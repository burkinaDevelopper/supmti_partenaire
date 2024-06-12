
import App from '@/Layouts/App';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';


const gestionInsciption = ({logo,datas,nationaliteDB}) => {
   const [selectInscrit,setSelectInscrit]=useState("");
   const [selectNationalite,setSelectNationalite]=useState("");
   const [selectSearch,setSelectSearch]=useState("");
   console.log(selectInscrit);
   
    const action=(e)=>{
         e.target.nextElementSibling.classList.toggle('visible-box');
    }
    function dateFormater(date) {
        let mYDate=new Date(date).toLocaleString();
        let x=mYDate.split(" ");
        return x[0]    
    }
    const inscrit=(st)=>{
        if (st==1) {
            return "Oui" 
        }else{
            return 'Non'
        }
    }
    return (
        <div className='container-inscription'>
            <App logo={logo} /> 

            <div className='container'>
                <h1>Gestion des preinscriptions</h1>
                <div className="banner">
                    <div className="year">
                        <label htmlFor="">Annee Scolaire:</label>
                        <select name="" id="">
                            <option value="">Toutes</option>
                            <option value="">1970</option>
                        </select>
                    </div>
                    <div className="type">
                        <label htmlFor="">Type de preinscription</label>
                        <select
                         name="" id="">
                            <option value="">Toutes les preinscription</option>
                            <option value="Internet">Internet</option>
                            <option value="Recommandation">Recommandation</option>
                            <option value="Partenaire : Sanoh">Partenaire : Sanoh</option>
                            <option value="Autre : ">Autre:</option>
                        </select>
                
                    </div>
                    <div className="type">
                        <label htmlFor="">Nationalite</label>
                         <select
                         onChange={(e)=>setSelectNationalite(e.target.value)}
                          name="" id="">
                            <option value="">Toutes</option>
                            {nationaliteDB && nationaliteDB.map((value,index)=>( 
                            <option value={value.nat_nom} key={index}>{value.nat_nom}</option>
                          ))}
                         </select>
                    </div>
                    <div className="inscript">
                        <label htmlFor="">Inscrit</label>
                         <div className="radion">
                            <input
                            id="1"
                            value={selectInscrit}
                            onChange={(e)=>setSelectInscrit(e.target.id)}
                             type="radio" name="status" />
                            <label for="html">Oui</label><br></br>
                            <input
                            id="0"
                            value={selectInscrit}
                            onChange={(e)=>setSelectInscrit(e.target.id)}
                             type="radio" name="status" />
                            <label for="html">Non</label><br></br>
                            <input
                            id=""
                            value={selectInscrit}
                            onChange={(e)=>setSelectInscrit(e.target.id)}
                             type="radio" name="status" />
                            <label for="html">Tous</label><br></br>
                         </div>
                    </div>
                    <div className="dossier">
                        <label htmlFor="">Dossier</label>
                         <div className="radion">
                            <input type="radio" name="status" id="" value="Complet" />
                            <label for="html">Complet</label><br></br>
                            <input type="radio" name="status" id="" value="Incomplet"/>
                            <label for="html">Incomplet</label><br></br>
                            <input type="radio" name="status" id="" value="" />
                            <label for="html">Tous</label><br></br>
                         </div>
                    </div>
                    <div className="btn"><button>Filtrer</button></div>
                </div>
                <div className="search">
                    <input
                     value={selectSearch}
                     onChange={(e)=>setSelectSearch(e.target.value)}
                     type="search" name="search" id="search" placeholder='Rechercher' />
                    <label htmlFor="search"><i class="fa-solid fa-magnifying-glass"></i></label>
                </div>
                <div className="table-container">
                    <table cellpadding="10" cellspacing="3">
                        <thead >
                        <tr>
                            <th>Nom&Prenom</th>
                            <th>Nationalite</th>
                            <th>Adresse mail</th>
                            <th>Telephone</th>
                            <th>Date de preinscription</th>
                            <th>Source</th>
                            <th>Avancement</th>
                            <th>Inscrit</th>
                            <th>comppleter/modifier</th> 
                        </tr>
                        </thead>
                        <tbody >
                            {datas && datas  
                            .filter((data)=>{
                                return(
                                    (data.pre_attest_fourni.toString().includes(selectInscrit.toString()))&&
                                    (data.nat_nom.includes(selectNationalite))&&
                                    (data.pre_nom.toLowerCase().includes(selectSearch.toLowerCase()) || data.pre_prenom.toLowerCase().includes(selectSearch.toLowerCase()))  
                                );
                            })
                            .map((data)=>(
                                  <tr>
                                  <td>{data.pre_nom} {data.pre_prenom}</td>
                                  <td>{data.nat_nom}</td>
                                  <td>{data.user_nom}</td>
                                  <td>{data.pre_tel}</td>
                                  <td>{dateFormater(data.pre_date)}</td>
                                  <td>{data.pre_comment_connu_ecole}</td>
                                  <td>{data.pre_source=="D"? "Accepter":"Refuser"}</td>
                                  <td>{inscrit(data.pre_attest_fourni)=="Oui"? <span>{inscrit(data.pre_attest_fourni)} </span>:
                                     <span  style={{color: "red"}}>{inscrit(data.pre_attest_fourni)}</span> }</td> 
                                  <td>
                                     <span className='action' onClick={action}>Action<i class="fa-solid fa-caret-down"></i></span>
                                     <div className="hidden-box">
                                          <div className='action-box'>
                                          <Link href={data.pre_id} >
                                                  Visualiser
                                              </Link >
                                          <Link href={data.pre_id} >
                                                  modifier
                                              </Link >
                                          <Link href={data.pre_id} >
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

export default gestionInsciption;