import App from '@/Layouts/App';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "react-country-state-city/dist/react-country-state-city.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useForm} from '@inertiajs/react';



const NewInsciption = ({logo,nationaliteDB,diplomeDB,formationDB,levelDB,paysDB,type_bacDB,villeDB,centreDB,n_niveauxDB}) => {
    const [page, setPage] = useState(0);
    const MySwal = withReactContent(Swal);
  
    const { data, setData, post, processing, errors, reset } = useForm({
        name:"",
        cni:"",
        bacType:"",
        email:"",
        civilite:"",
        country:"",
        prename:"",
        telephone:"",
        numberWhatsapp:"",
        nationalite:"",
        passport:"",
        city:"",
        diplome:"",
        centre:"",
        diplomeNew:"",
        formation:"",
        level:"", 
        lycee:"", 
      });

      const [numberPhone,setNumberPhone]=useState();
      const [numberWhatsapp,setNumberWhatsapp]=useState(); 
      data.telephone=numberPhone;
      data.numberWhatsapp=numberWhatsapp;
      const msg = [];
      const msg1 = [];
      

   
      const nextPage = (e) => {
        e.preventDefault();
        if (validatePage()) {
          setPage((prevPage) => prevPage + 1);
        } else { 
            MySwal.fire({
                title: <p>les champs non remplie</p>,
                html:msg.map(list=>(
                    `<div style="color:red;" >${list}</div>`
                )).join(' '),
                showCancelButton: true,
                cancelButtonText: "Remplir",
                cancelButtonColor:"rgb(23, 216, 23)",
                showConfirmButton:false,
              }) 
              msg.splice(0, msg.length)
        }
      };


  const prevPage = (e) => {
    e.preventDefault();
    setPage((prevPage) => prevPage - 1);
  };

  
  const validatePage = () => {
    if (page === 0){
        if (data.name==="") {
            msg.push('le champs nom est vide')
        }
        if (data.cni==="") {
            msg.push('le champs cni est vide')
        }
        if (data.bacType==="") {
            msg.push('le champs bac est vide')
        }
        if (data.email==="") {
            msg.push('le champs email est vide')
        }
        if (data.civilite==="") {
            msg.push('le champs civilite est vide')
        }
        if (data.country==="") {
            msg.push('le champs pays est vide')
        }
        if (data.prename==="") {
            msg.push('le champs prenom est vide')
        }
        if (data.telephone===undefined || data.telephone==="") {
            msg.push('le champs telephone est vide')
        }
        // if (data.numberWhatsapp===undefined || data.numberWhatsapp=="") {
        //     msg.push('le champs whatsapp est vide')
        // }
        if (data.nationalite==="") {
            msg.push('le champs nationalite est vide')
        }
        if (data.passport==="") {
            msg.push('le champs passport est vide')
        }
        if (data.lycee==="") {
            msg.push('le champs lycee est vide')
        }
        if (data.city==="") {
            msg.push('le champs ville est vide')
        }
        if (data.diplome==="") {
            msg.push('le champs diplome est vide')
        }
        if (msg.length!==0) {
            return false;
        }   
    };
    if (page===1) {
        if (data.centre==="") {
            msg1.push('le champs centre est vide')
        }   
        if (data.diplomeNew==="") {
            msg1.push('le champs diplome est vide')
        }   
        if (data.formation==="") {
            msg1.push('le champs formation est vide')
        }   
        if (data.level==="") {
            msg1.push('le champs niveau demande est vide')
        } 
        if (msg1.length!==0) {
            return false;
        } 
    };
    return true;
    
  }; 
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (validatePage()) {
        post(route('inscription.store'),{
            onSuccess: () => {
              alert('Le formulaire a été soumis avec succès!');
              // Optionnel: Réinitialiser le formulaire après succès
              reset();
            }}); 
      } else { 
          MySwal.fire({
              title: <p>les champs non remplie</p>,
              html:msg1.map(list=>(
                  `<div style="color:red;" >${list}</div>`
              )).join(' '),
              showCancelButton: true,
              cancelButtonText: "Remplir",
              cancelButtonColor:"rgb(23, 216, 23)",
              showConfirmButton:false,
            }) 
            msg1.splice(0, msg1.length)
      }
  } 
 
    return (
        <div className='newInscription'>
            <App logo={logo} />
           
           <form onSubmit={handleSubmit}>
           <div className="box">
            <div className="langue">
            <span >FR / EN</span>
            </div>
            <h1 className='title1'>Ajouter une Pré-Inscription </h1>
            <div className="form-container">
                <p>N.B : les champs marqués d'un astérisque * sont obligatoires</p>
                <div className={page==1? "progress page2":"progress"}>
                    <span className='after'>1</span>
                    <span className='befor'>2</span> 
                    
                </div>
                {page === 0 && <Page1 data={data} setData={setData} nationaliteDB={nationaliteDB}  numberWhatsapp={numberWhatsapp}setNumberWhatsapp={setNumberWhatsapp} paysDB={paysDB} type_bacDB={type_bacDB} villeDB={villeDB}
                  numberPhone={numberPhone} setNumberPhone={setNumberPhone}/>}
                {page === 1 && <Page2 diplomeDB={diplomeDB} formationDB={formationDB} centreDB={centreDB}
                  levelDB={levelDB} data={data} setData={setData} n_niveauxDB={n_niveauxDB} /> }
                <div className="next" id='btn'>
                    {page == 0 && <button onClick={nextPage}>Suivant <i className="fa-solid fa-arrow-right"></i></button>}
                    {page >0 && (<div id='btn-display'><button  onClick={prevPage} className="button"><i class="fa-solid fa-arrow-left"></i>Précédent</button> <button >Inscrivez vous</button></div> )}
                 </div>
              </div>
            </div>
           </form>
        </div>
    );
};

const Page1 = ({data,setData,nationaliteDB,numberWhatsapp,setNumberWhatsapp,setNumberPhone,numberPhone,paysDB,type_bacDB,villeDB}) => {
    
    return (
        <div>
        <div className="container-top">
        <div className="left-part">
        <div className="name">
             <label htmlFor="">civilité */nom *</label>
              <div>
              <select 
                value={data.civilite}
                name="civilite"
                onChange={(e)=>setData('civilite', e.target.value)} 
              >
                 <option value="M.">M.</option>
                 <option value="Mme.">Mme.</option>
                 <option value="Mlles.">Mlles.</option>
             </select>
             <input
              value={data.name}
              name="name"
              onChange={(e)=>setData('name', e.target.value)} 
              
              type="text" className='name'/>
              </div>

         </div>
         <div className="telephone">
             <label htmlFor="">Téléphone *</label>
             <PhoneInput
                 className="telephone-input"
                 value={numberPhone}
                 name="telephone"
                 country='ma'
                 onChange={setNumberPhone}
                 />
         </div>
         <div className="email">
             <label htmlFor="">Adresse mail *</label>
             <input
              value={data.email}
              name="email"
              onChange={(e)=>setData('email', e.target.value)}
              type="email"  placeholder='exemple@mail.com'/>
         </div>
         <div className="cni">
             <label htmlFor="">CIN *(requis pour les marocains)</label>
             <input
              value={data.cni}
              name="cni"
              onChange={(e)=>setData('cni', e.target.value)}
              type="text" placeholder='CNI'/>
         </div>
         <div className="bac-type">
             <label htmlFor="">Type de Baccalauréat *</label>
             <select 
              name="bacType"
              value={data.bacType}
              onChange={(e)=>setData('bacType', e.target.value)}
              >
                 <option value="">--Type de Baccalaurét--</option>
                 {type_bacDB && type_bacDB.map((type_bac,index)=>(
                     <option key={index} value={type_bac.tb_id}>{type_bac.tb_nom}</option>
                 ))}
                
             </select>
             
         </div>
         <div className="country">
             <label htmlFor="">Pays / Ville d'obtention <br /> Pays *</label>
             <select 
              value={data.country}
              name="country"
              onChange={(e)=>setData('country', e.target.value)}
              className='country'>
             {paysDB && paysDB.map((country,index)=>(
                     <option key={index} value={country.pays_id}>{country.pays_nom}</option>
                 ))}
             </select>
         </div>
        </div>
    
        <div className="right-part">
             <div className="prename">
                 <label htmlFor="">Prenom*</label>
                 <input 
                 value={data.prename}
                 name="prename"
                 onChange={(e)=>setData('prename', e.target.value)}
                 type="text"  placeholder='Prenom'/>
             </div>
             <div className="whatsapp-number">
                 <label htmlFor="">Numero whatsapp</label>   
                <PhoneInput
                 className="telephone-input"
                 value={numberWhatsapp}
                 name="telephone"
                 country='ma'
                 onChange={setNumberWhatsapp}
                 />
             </div>
             <div className="nationalite">
                <label htmlFor="">Nationalite*</label>
                  <select 
                    name="nationalite"
                    value={data.nationalite}
                    onChange={(e)=>setData('nationalite', e.target.value)}
              >
                {nationaliteDB && nationaliteDB.map((value,index)=>( 
                    <option value={value.nat_id} key={index}>{value.nat_nom}</option>
                ))}
                    
             </select>
             </div>
             <div className="passport">
                 <label htmlFor="">Numéro de passeport *(requis pour les étrangers)</label>
                 <input
                 value={data.passport}
                 name="passport"
                 onChange={(e)=>setData('passport', e.target.value)}
                  type="text"   />
             </div>
             <div className="lycee">
                 <label htmlFor="">Nom du lycée *</label>
                 <input
                 value={data.lycee}
                 name="lycee"
                 onChange={(e)=>setData('lycee', e.target.value)} 
                  type="text" placeholder='Nom du lycée' />
             </div>
             <div className="city">
                 <label htmlFor="">Ville*</label>
                    <select 
                     value={data.city}
                     name="city"
                     onChange={(e)=>setData('city', e.target.value)} 
                     >
                {villeDB && villeDB.map((value,index)=>( 
                    <option value={value.vil_id} key={index}>{value.vil_nom_fr}</option>
                ))}       
             </select>
             </div>
        </div>
        </div>
        <div className="container-bottom">
          <div>
          <label htmlFor="">Diplôme d'accès *</label>
           <select 
           value={data.diplome}
           name="diplome"
           onChange={(e)=>setData('diplome', e.target.value)}  > 
                 <option value="Bac">Bac</option>
                 <option value="Bac+2">Bac+2</option>
                 <option value="DTS">DTS</option>
                 <option value="DUT">DUT</option>
                 <option value="DUEG">DUEG</option>
                 <option value="Licence">Licence</option>
                 <option value="Master">Master</option>   
           </select>
          </div>
         
        </div>
       </div>
    );
};



const Page2 = ({data,setData,diplomeDB,formationDB,levelDB,centreDB,n_niveauxDB}) => {
    function generateRandomString(e) {
        e.preventDefault();
        const length = 6;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charactersLength);
          result += characters.charAt(randomIndex);
        }
        
        document.getElementById('result').textContent = result;
      }
    return (
        <div className='page2-container'>
        <div>
        <div className="container-part1">
                <div className="centre">
                    <label htmlFor="">centre *</label>
                    <select 
                    name="centre"
                    value={data.centre}
                    onChange={(e)=>setData('centre', e.target.value)}
                    >
                        <option value="">--centre--</option>
                        {centreDB && centreDB.map((value,index)=>(
                            <option  value={value.ct_id} key={index}>{value.ct_nom}</option>
                        ))}  
                        <option value="SupMTI Rabat">SupMTI Rabat</option>
                       
                    </select>
                    
                </div>
                <div className="diplomeNew">
                    <label htmlFor=""> Diplome souhaite *</label>
                    <select 
                    name="diplomeNew"
                    value={data.diplomeNew}
                    onChange={(e)=>setData('diplomeNew', e.target.value)}
                    >
                        <option value="">--Diplome---</option>
                        {diplomeDB && diplomeDB.map((value,index)=>(
                            <option  value={value.dip_id} key={index}>{value.dip_nom}</option>
                        ))}      
                    </select>  
                </div>
                <div className="formation">
                    <label htmlFor="">Formation souhaitè *</label>
                    <select 
                    name="formation"
                    value={data.formation}
                    onChange={(e)=>setData('formation', e.target.value)}
                    >
                        <option value="">--Formation souhaitè--</option>
                        {formationDB && formationDB.map((value,index)=>(
                            <option key={index} value={value.fil_id}>{value.fil_nom}</option>
                        ))}
                            
                    </select>
                    
                </div>
                <div className="level">
                    <label htmlFor="">Niveau demande *</label>
                    <select 
                    name="level"
                    value={data.level}
                    onChange={(e)=>setData('level', e.target.value)}
                    >
                        <option value="">--Niveau demande--</option>
                        {n_niveauxDB && n_niveauxDB.map((value,index)=>(
                            <option key={index} value={value.niv_id}>{value.niv_nom}</option>
                        ))}
                            
                    </select>
                    
                </div>
        </div>
        <div className="container-part2">
            <div className="random">
                <p id='result'>Click pour Generer</p>
                <button onClick={generateRandomString}><i className="fa-solid fa-spinner"></i></button>
            </div>
            <div className="randon-input">
                <label htmlFor="">Saisissez le caracters que vous voyez *</label>
                <input type="text" />
            </div>
        </div>
      </div>
            
        </div>
    );
};


export default NewInsciption;