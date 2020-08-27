import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import AuthInput from '../../components/AuthInput';

import Logo from '../../assets/images/logo.svg';
import Background from '../../assets/images/background.svg';
import Check from '../../assets/images/icons/check.svg';

import './styles.css';

function FinishRegister() {
    return (
        <div className="finished-register-container">
            <img src={Check} alt=""/>
                
            <h1>Cadastro concluído</h1>

            <p>
                Agora você faz parte da plataforma da Proffy. <br/>
                Tenha uma ótima experiência.
            </p>

            <Link to="/login" className="login-button">
                Fazer login
            </Link>

            <div className="finished-register-background" style={{ backgroundImage: `url(${Background})` }}/>

        </div>
    )
}

function Register() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [registerFinished, setRegisterFinished] = useState(false);

    function handleRegister(e: FormEvent) {
        e.preventDefault();
        setRegisterFinished(true);
        console.log("Você se cadastrou", registerFinished);
    }


    if (registerFinished) {
        return FinishRegister()
    }
    return (
        <div id="register-page-container" className="container">
            <div className="register-container">
                <main>
                    <h1>Cadastro</h1>
                    <p>
                        Preencha os dados abaixo para começar.
                    </p>
                    <form onSubmit={handleRegister}>
                        <AuthInput
                            name="nome"
                            placeholder="Nome"
                            type="text"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                        <AuthInput
                            name="lastName"
                            placeholder="Ultimo nome"
                            type="text"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}
                        />

                        <AuthInput
                            name="email"
                            placeholder="E-mail"
                            type="text"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />

                        <AuthInput
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        
                        <button type="submit">Concluir cadastro</button>
                    </form>

                </main>
            </div>

            <div className="proffy-board">
                <img src={Logo} alt="" className="register-logo" />
                <div className="register-background" style={{ backgroundImage: `url(${Background})` }}/>
                <p>
                    Sua plaforma de estudos online.
                </p>
            </div>
        </div>
    );
}

export default Register;