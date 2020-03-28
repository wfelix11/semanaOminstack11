import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import api from '../../services/api';


import LogoImg from '../../assets/logo.png';

import styles from './style';


export default function Incidents () {
    const [total, setTotal] = useState(0);
    const [incident, setIncident] = useState([]);
    const [page, setPage] = useState(1);
    const [loaging, setLoading] = useState(false);
    
    const navegation = useNavigation();


    function navigateToDetail(incident) {

        navegation.navigate('Detail', { incident });
    }

    async function loadIncidents(){

        if(loaging){
            return;
        }

        if(total>0 && incident.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: {page}
        });
        
        setIncident([...incident, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);

        setLoading(false);

    }

    useEffect(() => {
        loadIncidents();
    })
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={LogoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.tile}>Bem-vindo!</Text>
            <Text style={styles.descricao}>Escolha um dos casos abaixo e salve o dia.</Text>
        

            <FlatList
                data={incident}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident}) =>(
                    <View style={styles.Incidents}>
                        <Text style={styles.incidentsProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentsProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentsProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{
                                                            Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                                                            .format(incident.value)}
                        </Text>

                        <TouchableOpacity style={styles.detailButton} onPress={() => navigateToDetail(incident)}>
                            <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>


    )
}