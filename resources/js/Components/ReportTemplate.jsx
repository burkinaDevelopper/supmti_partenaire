import React from 'react';

const ReportTemplate = ({ data }) => {
    const numberFormateur = (nb) => {
        return Math.trunc(nb) + "DH";
    }
    return (
        <div className='pdf-container'>
            <h2>Detail de recus</h2>
            <table cellpadding="10" cellspacing="3">
                <tr>
                    <th>Type de Frais/Etat</th>
                    <th>Convenu</th>
                    <th>Payé</th>
                    <th>Reste</th>
                </tr>
                <tr>
                    <td>{data.tpf_nom}</td>
                    <td>{numberFormateur(data.fcv_montant)}</td>
                    <td className='paye-grenn'>{numberFormateur(data.fcv_sompayee)}</td>
                    <td className='rest-red'>{data.fcv_nbperiodes + "DH"}</td>
                </tr>
            </table>
        </div>
    );
};

export default ReportTemplate;