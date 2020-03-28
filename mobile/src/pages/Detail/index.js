import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking, ScrollView, SafeAreaView} from 'react-native';
import LogoImg from '../../assets/logo.png';
import * as MailComposer from 'expo-mail-composer';



import styles from './style';

export default function Detail() {

    const navegation = useNavigation();
    const routes = useRoute();

    const incident = routes.params.incident;

    const message= `Olá ${incident.name}, estou entrnado em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${
        Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
        .format(incident.value)}`

    function navigateBack(){
        navegation.goBack()
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: `Heroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (

        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={LogoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041"/>
                </TouchableOpacity>
            </View>

            <SafeAreaView showsVerticalScrollIndicator={false}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View  style={styles.Incidents}>
                        <Text style={[styles.incidentsProperty, { marginTop: 0 }]}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                        <Text style={styles.incidentsProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentsProperty}>DESCRIÇÃO:</Text>
                        <Text style={styles.incidentValue}>{incident.description}</Text>

                        <Text style={styles.incidentsProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{
                                                                Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                                                                .format(incident.value)}
                            </Text>

                    </View>

                    <View style={styles.contactBox}>
                        <Text style={styles.heroTitle}>Salve o dia!</Text>
                        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                        <Text style={styles.heroDescricao}>Entre em contato:</Text>


                        <View style={[styles.actions, {marginBottom: 40}]}>
                            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                                <Text style={styles.actionText}>WhatsApp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action} onPress={sendEmail}>
                                <Text style={styles.actionText}>Email</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

        </View>
    )
}