<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use DB;
class RequestManagerController extends Controller
{
    public function requestManager(){
        $nationaliteDB = DB::select('select * from  nationalite');
        $demandeStatutDB = DB::select('select * from  demande_statut');
        $typesDocumentsDB = DB::select('select * from  n_types_documents');
        $documentsDB = DB::select('select * from  n_types_documents');
        $datas=DB::select('select dir_nom,dir_prenom,nat_nom,dir_email,dir_tel,tdoc_nom,ds_nom,dem_id
        from n_personnel as a,nationalite as b,n_types_documents as c,demande_statut as d,n_demandes as e
        where e.dem_id=a.dir_id and e.dem_id=b.nat_id and e.dem_typedoc_id=c.tdoc_id and e.dem_statut_id=d.ds_id');
       
       
        $data=[
            "logo" => asset("assets/image/supmti-logo.png"),
            "nationaliteDB"=> $nationaliteDB,
            "datas"=>$datas,
            "demandeStatutDB"=> $demandeStatutDB,
            "typesDocumentsDB"=> $typesDocumentsDB,

        ];
        return Inertia::render('manager/RequestManager', $data);
    }
}
