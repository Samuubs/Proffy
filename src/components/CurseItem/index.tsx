import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export interface Curse {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: number;
}

interface CurseItemProps {
    curse: Curse;
}

const CurseItem: React.FC<CurseItemProps> = ({ curse }: CurseItemProps) => {
    const history = useHistory();

    function createNewConnection() {
        api.post('connections', { 
        user_id: curse.id, 
        });
    }

    function teste () {
        history.push("/", {
            curse: curse
        });
    }
    
    return (
        <article className="curse-item">
        <header>
            <img src={curse.avatar} alt={curse.name} />
            <div>
            <strong>{curse.name}</strong>
            <span>{curse.subject}</span>
            </div>
        </header>
        <p>
            {curse.bio}
        </p>
        <footer>
            <p>
            Preço/hora
            <strong>
                R$
                {curse.cost}
            </strong>
            </p>

            <Link className="curse-edit" to={{ pathname: '/edit-course', state: { curse }}}> 
                Editar 
            </Link>

            <Link to="/" className="curse-add-class">
                Adicionar Aula
            </Link>
        </footer>
        </article>
    );
}

export default CurseItem;