import PartnerArea from '@/Pages/PartnerArea';
import { Link, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';



const App = ({logo}) => {
    const links={
        '/dashboard':'<span><i class="fa-solid fa-house"></i></span><span>Accueil</span>',
        '/inscription/nouvelle':'<span><i class="fa-regular fa-rectangle-list"></i></span><span>Nouvelle préinscription</span>','manager-register':'<span><i class="fa-regular fa-rectangle-list"></i></span><span>Gestion des préinscription</span>','logout':'<span><i class="fa-solid fa-right-from-bracket"></i></span><span>Déconnexion</span>'
        }
    const {url}=usePage();
    const handletoggle=(widh,visible)=>{
        const sideBar=document.querySelector('.side-bar');
        sideBar.style.width=widh;
        sideBar.style.visibility=visible;
       }
    return (
        <div className='header-content'>
            <header>
             <div className="log">
                <div className="toggle-btn" id="btn" onClick={()=>handletoggle('300px','visible')}>
                    <span></span>
                    <span></span>
                    <span></span>  
                </div>
                <div>
                <Link href="/dashboard">
                   <img src={logo} alt="" />
                </Link>
                </div>
             </div>
             <h1>Espace partenaire</h1> 
         </header>
         <div className="side-bar">
            <span className='icon' onClick={()=>handletoggle('0px','hidden')}><i className="fa-solid fa-xmark"></i></span>
            <div className='avatar'>
                <span><i className="fa-regular fa-circle-user"></i></span>
                <h3>PARTENAIRE USER</h3>
            </div>
            <div className='link'>
                <ul>
                    {Object.keys(links).map((link,index)=>(
                         <li key={index}>
                            <Link href={link} className={url===link? "active":""}>
                               <span dangerouslySetInnerHTML={{ __html: links[link] }} className='link-container'/>
                            </Link>
                         </li>
                    ))
                    }
                </ul>
            </div>
         </div>  
        </div>
    );
};

export default App;



