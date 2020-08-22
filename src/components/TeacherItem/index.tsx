import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
            <article className="teacher-item">
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/33751384?s=460&u=bba99304003d18646b6e4ed1152f02a23f00d081&v=4" alt="Samu"/>
                    <div>
                        <strong>Samuel Barbosa</strong>
                        <span>Química</span>
                    </div>
                </header>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo commodi, est inventore dolor sit atque dolores? 
                    <br/> <br/>
                    Animi, quia beatae! Incidunt dicta debitis quo deleniti culpa illum aliquid perspiciatis. Repudiandae?
                </p>

                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ 10,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
    )
}

export default TeacherItem;