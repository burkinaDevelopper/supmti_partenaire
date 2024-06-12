import App from '@/Layouts/App';
import { Link } from '@inertiajs/react';
import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import ReportTemplate from '@/Components/ReportTemplate';

const NewRecu = ({ logo, datas, typefraisDB }) => {
    const [frais, setFrais] = useState("");
    const [contenu, setContenu] = useState("");
    const [paye, setPaye] = useState("");
    const [reste, setReste] = useState("");
    const reportTemplateRef = useRef(null);

    // const action = (e) => {
    //     e.target.nextElementSibling.classList.toggle('visible-box');
    // }
    const numberFormateur = (nb) => {
        return Math.trunc(nb) + "DH";
    }
    const handleGeneratePdf = async (data) => {
        const doc = new jsPDF({
            format: 'a4',
            unit: 'px',
        });

        // Adding the fonts.
        //doc.setFont('Inter-Regular', 'normal');
        doc.html(reportTemplateRef.current, {
            async callback(doc) {
                await doc.save(data.tpf_nom);
            },
        });

    }



    return (
        <div className='paiment'>
            <App logo={logo} />
            <div className="box-container">
                <h1 className='title'>gestion des recus</h1>
                <div className="box-manager">
                    <div className='input-box'>
                        <div className="year">
                            <label htmlFor="">Type de Frais</label>
                            <select
                                value={frais}
                                onChange={(e) => setFrais(e.target.value)}
                                name="year" id="">
                                <option value="">Toutes</option>
                                {typefraisDB && typefraisDB.map((value, index) => (
                                    <option value={value.tpf_nom} key={index}>{value.tpf_nom}</option>
                                ))}
                            </select>
                        </div>
                        <div className="class">
                            <label htmlFor="">Convenu</label>
                            <input
                                value={contenu}
                                onChange={(e) => setContenu(e.target.value)}
                                type="text" name="inscription" />

                        </div>
                        <div className="inscription">
                            <label for="html">Payé</label>
                            <input
                                value={paye}
                                onChange={(e) => setPaye(e.target.value)}
                                type="text" name="inscription" />
                        </div>
                        <div className="etudiant">
                            <label for="html">Reste</label>
                            <input
                                value={reste}
                                onChange={(e) => setReste(e.target.value)}
                                type="text" name="etudiant" />
                        </div>

                    </div>
                    <button>Rechercher</button>
                </div>
                <h3>Liste des Etudiants :</h3>
                <div className="table-payment">
                    <table cellpadding="10" cellspacing="3">
                        <thead>
                            <tr id='left-part'>
                                <th>Type de Frais/Etat</th>
                                <th>Convenu</th>
                                <th>Payé</th>
                                <th>Reste</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas && datas
                                .filter((data) => {
                                    return (
                                        (data.tpf_nom.includes(frais)) &&
                                        (data.fcv_montant.includes(contenu)) &&
                                        (data.fcv_sompayee.includes(paye)) &&
                                        (data.fcv_nbperiodes.toString().includes(reste))
                                    );
                                })
                                .map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.tpf_nom}</td>
                                        <td>{numberFormateur(data.fcv_montant)}</td>
                                        <td>{numberFormateur(data.fcv_sompayee)}</td>
                                        <td>{data.fcv_nbperiodes + "DH"}</td>
                                        <td>
                                            <span className='action' id='pdfsave' onClick={() => handleGeneratePdf(data)}>telecharger</span>
                                            <div ref={reportTemplateRef} className='masque-pdf'>
                                                <ReportTemplate data={data} key={index} />
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

export default NewRecu;





