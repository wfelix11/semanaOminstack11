import React, {useState} from 'react';
import './style.css';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';


import logoImg from '../../assets/logo.svg';


export default function NewIncidents () {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ong_id = localStorage.getItem('ondId');

    const history = useHistory();

    async function handleNewIncidentes (e){
        e.preventDefault();

        const data = ({
            title
            ,description
            ,value
        });

        try {
            await api.post('incidents', data, {
                headers: {
                    authorization: ong_id,
                }                
            });
            history.push('/profile');
        } catch (err) {
            alert ('Não foi possivel cadastrar o novo caso')
        }
        
    }

    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be the Hero"/>

                <h1>Cadastras novo Caso</h1>
                <p>Cadastre um novo caso </p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar ao Home
                </Link>
            </section>
            <form onSubmit={handleNewIncidentes}>
                <input 
                    placeholder="Titulo do Caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <input 
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />

                <button className="button" type="submit">Cadastrar</button>

            </form>
        </div>
    </div>
    )
}
