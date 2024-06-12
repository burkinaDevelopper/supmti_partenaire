import App from '@/Layouts/App';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

const Payment = ({ logo, anneescolaireDB, classeDB, datas }) => {
    const action = (e) => {
        e.target.nextElementSibling.classList.toggle('visible-box');
    }
    const [year, setYear] = useState("");
    const [classe, setClasse] = useState("");
    const [inscription, setInscription] = useState("");
    const [name, setName] = useState("");

    return (
        <div className='paiment'>
            <App logo={logo} />
            <div className="box-container">
                <h1 className='title'>gestion des recus</h1>
                <div className="box-manager">
                    <div className='input-box'>
                        <div className="year">
                            <label htmlFor="">Annee Scolaire:</label>
                            <select
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                name="year" id="">
                                <option value="">Toutes</option>
                                {anneescolaireDB && anneescolaireDB.map((value, index) => (
                                    <option value={value.annee_nom} key={index}>{value.annee_nom}</option>
                                ))}
                            </select>
                        </div>
                        <div className="class">
                            <label htmlFor="">Classe :</label>
                            <select
                                value={classe}
                                onChange={(e) => setClasse(e.target.value)}
                                name="class" id="">
                                <option value="">Toutes</option>
                                {classeDB && classeDB.map((value, index) => (
                                    <option value={value.classe_nom} key={index}>{value.classe_nom}</option>
                                ))}
                            </select>
                        </div>
                        <div className="inscription">
                            <label for="html">N° Inscription :</label>
                            <input
                                value={inscription}
                                onChange={(e) => setInscription(e.target.value)}
                                type="text" name="inscription" />
                        </div>
                        <div className="etudiant">
                            <label for="html">Nom Etudiant :</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text" name="etudiant" />
                        </div>

                    </div>
                    <button>Rechercher</button>
                </div>
                <h3>Liste des Etudiants :</h3>
                <div className="table-payment">
                    <table cellpadding="10" cellspacing="3">
                        <thead>
                            <tr>
                                <th>N° Inscription</th>
                                <th>Etudiant</th>
                                <th>Année Scolaire</th>
                                <th>Classe</th>
                                <th>centre</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas && datas
                                .filter((data) => {
                                    return (
                                        (data.annee_nom.includes(year)) &&
                                        (data.classe_nom.includes(classe)) &&
                                        (data.ins_numero.includes(inscription)) &&
                                        (data.etud_nom.toLowerCase().includes(name.toLowerCase()) || data.etud_prenom.toLowerCase().includes(name.toLowerCase()))

                                    );
                                })
                                .map((data, index) => (
                                    <tr>
                                        <td>{data.ins_numero}</td>
                                        <td>{data.etud_nom} {data.etud_prenom}</td>
                                        <td>{data.annee_nom}</td>
                                        <td>{data.classe_nom}</td>
                                        <td>{data.ct_nom}</td>
                                        <td>
                                            <span className='action' onClick={action}>Action<i class="fa-solid fa-caret-down"></i></span>
                                            <div className="hidden-box">
                                                <div className='action-box'>
                                                    <Link href={data.etud_nom} >
                                                        Visualiser
                                                    </Link >
                                                    <Link href={data.etud_nom} >
                                                        modifier
                                                    </Link >
                                                    <Link href={data.etud_nom} >
                                                        supprimer
                                                    </Link >
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Payment;