<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use DB,Str;
class ManagerPayment extends Controller
{
    public function payment(){
        $anneescolaireDB = DB::select('select * from  anneescolaire');
        $classeDB = DB::select('select * from  classe');
        $datas=DB::select('select etud_nom,etud_prenom,ins_numero,annee_nom,classe_nom,ct_nom
        from n_inscriptions as a,n_etudiants as b,anneescolaire as c,n_admissions as d,classe as e, centre as f
        where b.etud_id=d.adm_etudiant_id and a.ins_etudiant_id=b.etud_id and c.annee_id=a.ins_as_id and e.classe_annee_etude=a.     ins_classe_id and f.ct_id=d.adm_centre_id');
        $data=[
            "logo" => asset("assets/image/supmti-logo.png"),
            "anneescolaireDB"=>$anneescolaireDB,
            "classeDB"=>$classeDB,
            "datas"=> $datas,
        ]; 
        return Inertia::render('manager/Payment', $data);
    }
}
//ins_numero=adm_numero(n_admissions)
//ins_numero=etud_nom,etud_prenom(n_etudiants)
//ins_numero=annee_nom(anneescolaire)
//=classe_nom(anneescolaire)
// Textes complets
// adm_date	
// adm_id	
// adm_seq	
// adm_numero	
// adm_type	
// adm_supmti_id	
// adm_etudiant_id	
// adm_formation_id	
// adm_centre_id	
// adm_centre_admin_id	
// adm_as_id	
// adm_preins_id	
// adm_cne	
// adm_cni	
// adm_passport	
// adm_cejour_date_exp	
// adm_situation	
// adm_diplomeacces

// annee_id	
// annee_nom	
// annee_datedeb	
// annee_datefin	

// $datas=DB::select('select etud_nom,etud_prenom,ins_numero,annee_nom,classe_nom,ct_nom
// from n_inscriptions as a,n_etudiants as b,anneescolaire as c,n_admissions as d,classe as e, centre as f
// where b.etud_id=d.adm_etudiant_id and a.ins_etudiant_id=b.etud_id and c.annee_id=a.ins_as_id and e.classe_annee_etude=a.     ins_classe_id and  f.ct_id=d.adm_centre_id');