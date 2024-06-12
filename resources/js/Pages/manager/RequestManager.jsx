import App from '@/Layouts/App';
import React, { useState } from 'react';

const RequestManager = ({ logo, nationaliteDB, datas, demandeStatutDB, typesDocumentsDB }) => {
    const [selectSearch, setSelectSearch] = useState("");
    const [typeRequest, setTypeRequest] = useState("");
    const [selectNationalite, setSelectNationalite] = useState("");
    const [status, setStatus] = useState("");

    const handleModal = (data) => {
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
        document.querySelector('.pname').textContent = data.dir_nom;
        document.querySelector('.pprename').textContent = data.dir_prenom;
        document.querySelector('.pnationalite').textContent = data.nat_nom;
        document.querySelector('.pemail').textContent = data.dir_email;
        document.querySelector('.ptel').textContent = data.dir_tel;
        document.querySelector('.pdocument').textContent = data.tdoc_nom;
        document.querySelector('.pstatus').textContent = data.ds_nom;
    }

    const handleClose = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    return (
        <div className='request'>
            <App logo={logo} />
            <div className="request-box">
                <h1>gestion des demandes</h1>
                <div className="box-container">
                    <div className="preinscription">
                        <label htmlFor="">Type de préinscription : </label>
                        <select
                            onChange={(e) => setTypeRequest(e.target.value)}
                            name="typeRequest" id="">
                            <option value="">Toutes les préinscription</option>
                            {typesDocumentsDB && typesDocumentsDB.map((value, index) => (
                                <option value={value.tdoc_nom} key={index}>{value.tdoc_nom}</option>
                            ))}
                        </select>
                    </div>
                    <div className="type">
                        <label htmlFor="">Nationalite</label>
                        <select
                            onChange={(e) => setSelectNationalite(e.target.value)}
                            name="" id="">
                            <option value="">Toutes</option>
                            {nationaliteDB && nationaliteDB.map((value, index) => (
                                <option value={value.nat_nom} key={index}>{value.nat_nom}</option>
                            ))}
                        </select>
                    </div>
                    <div className="status">
                        <label htmlFor="">Status demande : </label>
                        <select
                            onChange={(e) => setStatus(e.target.value)}
                            name="status" id="">
                            <option value="">Toutes</option>
                            {demandeStatutDB && demandeStatutDB.map((value, index) => (
                                <option value={value.ds_nom} key={index}>{value.ds_nom}</option>
                            ))}
                        </select>
                    </div>
                    <div className="btn"><button>Filtrer</button></div>
                </div>
                <div className="search">
                    <input
                        value={selectSearch}
                        onChange={(e) => setSelectSearch(e.target.value)}
                        type="search" name="search" id="search" placeholder='Rechercher nom/prenom' />
                    <label htmlFor="search"><i className="fa-solid fa-magnifying-glass"></i></label>
                </div>
                <div className="table-container">
                    <table cellpadding="10" cellspacing="3">
                        <thead >
                            <tr>
                                <th>Nom&Prenom</th>
                                <th>Nationalite</th>
                                <th>Adresse mail</th>
                                <th>Telephone</th>
                                <th>Document</th>
                                <th>Status demande</th>
                                <th>details</th>
                            </tr>
                        </thead>
                        <tbody >
                            {datas && datas
                                .filter((data) => {
                                    return (
                                        (data.tdoc_nom.includes(typeRequest)) &&
                                        (data.nat_nom.includes(selectNationalite)) &&
                                        (data.ds_nom.includes(status)) &&
                                        (data.dir_nom.toLowerCase().includes(selectSearch.toLowerCase()) || data.dir_prenom.toLowerCase().includes(selectSearch.toLowerCase()))
                                    );
                                })
                                .map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.dir_nom} {data.dir_prenom}</td>
                                        <td>{data.nat_nom}</td>
                                        <td>{data.dir_email}</td>
                                        <td>{data.dir_tel}</td>
                                        <td>{data.tdoc_nom}</td>
                                        <td>{data.ds_nom}</td>
                                        <td><button className='detais myBtn' onClick={() => handleModal(data)}>voir</button></td>
                                    </tr>
                                ))}

                        </tbody>
                    </table>
                </div>
            </div>

            <div id="myModal" className="modal">
                <div class="modal-content">
                    <span class="close" onClick={handleClose}>&times;</span>
                    <h1>Detais des demandes</h1>
                    <p><strong>Nom: </strong><span className='pname'></span></p>
                    <p><strong>Prenom: </strong><span className='pprename'></span></p>
                    <p><strong>Nationalite: </strong><span className='pnationalite'></span></p>
                    <p><strong>Email: </strong><span className='pemail'></span></p>
                    <p><strong>Telephone: </strong><span className='ptel'></span></p>
                    <p><strong>Document: </strong><span className='pdocument'></span></p>
                    <p><strong>Status demande: </strong><span className='pstatus'></span></p>
                </div>
            </div>
        </div>
    );
};

export default RequestManager;