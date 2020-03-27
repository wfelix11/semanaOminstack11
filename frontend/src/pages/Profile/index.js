import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './style.css';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const history = useHistory();
    const [response, setResponse] = useState([]);
    const ongId = localStorage.getItem('ondId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                authorization: ongId,
            }
        }).then(response => {
            setResponse(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncidentes(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    authorization: ongId,
                }
            });

            setResponse(response.filter(response => response.id !== id));


        }catch{
            alert('Erro ao deletar caso, tente novamente')
        }
    }

    function handleLogout (){

        localStorage.clear();

        history.push('/');

    }

    return (

       <div className="profile-container">
           <header>
               <img src={logoImg} alt="Logo"/>
               <span>Bem vinda, {ongName}</span>


               <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
               <button onClick={handleLogout} type="button">
                   <FiPower size={18} color="#E02041" />
               </button>
           </header>
           <h1>Casos Cadastrados</h1>

           <ul>
            {response.map(i => (
               <li key={i.id}>
               <strong>CASO</strong>
               <p>{i.title}</p>
               
               <strong>Descrição</strong>
               <p>{i.description}</p>

               <strong>Valor</strong>
               <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(i.value)}</p>

               <button onClick = {() => handleDeleteIncidentes(i.id)} type="button">
                    <FiTrash2 size={20} color="#a8a8b3" />
               </button>
           </li>                
            ))}
           </ul>
       </div> 

        )
}