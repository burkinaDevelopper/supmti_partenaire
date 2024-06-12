<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;   
use DB;

class ManagerInscription extends Controller
{
    public function gestionInscription(){
        $datas=DB::select('select pre_nom,pre_prenom,nat_nom,user_nom,pre_tel,pre_date,pre_comment_connu_ecole,pre_source,pre_attest_fourni,pre_id
        from preinscription as a,n_utilisateurs as b,nationalite as c
        where a.pre_id=c.nat_id and b.user_id=a.pre_id');
        $nationaliteDB = DB::select('select * from  nationalite');
        $data=[
            'datas'=>$datas,
            "logo" => asset("assets/image/supmti-logo.png"),
            "nationaliteDB"=> $nationaliteDB,
        ];
        return Inertia::render('manager/gestionInsciption', $data);
    }
}

// select societe,no_commande,date_commande
// from clients as a,commandes as b
// where a.code_client=b.code_client
// order by societe;
