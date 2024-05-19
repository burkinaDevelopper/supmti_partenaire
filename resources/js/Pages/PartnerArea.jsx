import App from '@/Layouts/App';
import { Link } from '@inertiajs/react';
import React from 'react';

const Card = ({url,icon,title,description}) => {
    return (
        <Link href={url} className='card-link'>
                <span dangerouslySetInnerHTML={{ __html: icon }}></span>
                <h3>{title}</h3>
                <p>{description}</p>
        </Link>  
    );
};

const PartnerArea = ({logo}) => {
    return (
        <div className='partner-area'>
           <App logo={logo} />
           <h1>Bienvenue,</h1>
           <p>Ceci est votre espace où vous pouvez gérer vos préinscriptions, dossiers et paiements.</p>
           <div className="card-container">
            <Card url='/inscription/nouvelle' icon='<i class="fa-solid fa-plus"></i>' title='Nouvelle préinscription' description='Creer une Nouvelle préinscription en remplissant le formulaire en ligne' />
            <Card url='/' icon='<i class="fa-regular fa-rectangle-list"></i>' title='Gestion des préinscriptions' description='Suivi de vos préinscription, modification des données et gestion des dossiers'/>
            <Card url='/' icon='<i class="fa-regular fa-rectangle-list"></i>' title='Gestion des demandes' description='Suivi de vos demandes'
            />
            <Card url='/' icon='<i class="fa-regular fa-credit-card"></i>' title='Gestion des paiement' description='Suivi des paiement des differents frais relatifs aux etudiants inscrits' />
            <Card url='/' icon='<i class="fa-regular fa-money-bill-1"></i>' title='Nouveau recu' description='Ajouter des paiement pour des différents frais relatifs aux étudiants inscrits' />
           </div>
        </div>
    );
};

export default PartnerArea;
