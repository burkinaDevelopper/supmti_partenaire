<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use DB,Str;

class NewRegisterController extends Controller
{
    public function inscription()
    {
        $nationaliteDB = DB::select('select * from  nationalite');
        $diplomeDB = DB::select('select * from  n_diplomes');
        $formationDB = DB::select('select * from filiere');
        $levelDB = DB::select('select td_nom from n_type_diplome');
        $paysDB = DB::select('select * from pays');
        $type_bacDB = DB::select('select * from  type_bac');
        $villeDB = DB::select('select * from  ville');
        $centreDB = DB::select('select * from  centre');
        $n_niveauxDB = DB::select('select * from  n_niveaux');
       
        $data = [
            "logo" => asset("assets/image/supmti-logo.png"),
            "nationaliteDB" => $nationaliteDB,
            "diplomeDB" => $diplomeDB,
            "formationDB" => $formationDB,
            "paysDB" => $paysDB,
            "type_bacDB" => $type_bacDB,
            "villeDB" => $villeDB,
            "centreDB" => $centreDB,
            "n_niveauxDB" => $n_niveauxDB,
        ];
        return Inertia::render('manager/NewInsciption', $data);
    }
    public function inscriptionStore()
    { 
        request()->validate([
        "name"=>['required'],
        "cni"=>['sometimes'],
        "bacType"=>['required'],
        "email"=>['required'],
        "civilite"=>['required'],
        "country"=>['required'],
        "prename"=>['required'],
        "telephone"=>['required'],
        "numberWhatsapp"=>['sometimes'],
        "nationalite"=>['required'],
        "passport"=>['sometimes'],
        "city"=>['required'],
        "diplome"=>['required'],
        "centre"=>['required'],
        "diplomeNew"=>['required'],
        "formation"=>['required'],
        "level"=>['required'],
        "lycee"=>['required'],
        ]);
        DB::beginTransaction();
        try {
           DB::table('preinscription')->insert([
                    "pre_seq"=>18,
                    "pre_numero"=>'P000001/22',
                    "pre_civilite"=>request('civilite'),
                    "pre_nom"=> request('name'),
                    "pre_prenom"=>request('prename'),
                    "pre_tel"=>request('telephone'),
                    "pre_whatsapp"=> request('numberWhatsapp'),
                    "pre_nat_id"=>(int) request('nationalite'),
                    "pre_cin"=> (int) request('cni'),
                    "pre_passeport"=>request('passport'),
                    "pre_type_bac_id"=>request('bacType'),
                    "pre_bac_etablissement"=>request('lycee'),
                    "pre_bac_pays_id"=>request('country'),
                    "pre_bac_ville_id"=>request('city'),
                    "pre_centre_id"=>request('centre'),
                    "pre_classe_id"=>request('diplomeNew'),
                    "pre_for_id"=>request('formation'),
                    "pre_niv_id"=>request('level'),
                    "pre_date"=>167241745,
                ]);
                 DB::table('n_utilisateurs')->insert([
                    "user_nom"=>request('email'),
                    "user_login"=>Str::uuid(),
                    "user_estActif"=>1,
                    "user_role_id"=>1,
                    "user_ref_id"=>3,
                    "is_verified"=>5,  
                ]);
                DB::table('n_diplomes_acces')->insert(
                   [
                    "da_specialite" =>request('diplome'),
                    "da_preins_id" =>rand(10,122),
                    "da_type_diplome_id" =>rand(1,8),
                    "da_mention" =>"Assez bien", 
                   ]);
                   
        } catch (ValidationException $e) {
            DB::rollback();
            dd($e->getErrors());
        }
        DB::commit();
       return back();
         
    }
}
