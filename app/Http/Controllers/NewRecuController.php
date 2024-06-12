<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use DB;
class NewRecuController extends Controller
{
    public function newRecu()
    {
        $n_fraisconvenuDB = DB::select('select * from  n_fraisconvenu');
        $typefraisDB = DB::select('select * from typefrais');
        $datas=DB::select('select tpf_nom,fcv_montant,fcv_sompayee,fcv_nbperiodes
        from typefrais as a ,n_fraisconvenu as b where a.tpf_id=b.fcv_typefrais_id
        ');
        
        $data = [
            "logo" => asset("assets/image/supmti-logo.png"),
            "n_fraisconvenuDB" => $n_fraisconvenuDB,
            "typefraisDB" => $typefraisDB,
            "datas" => $datas,
        ];
        return Inertia::render('manager/NewRecu', $data);
    }
}

// Textes complets
// 	
// tpf_nom


// fcv_id	
	
	
	
// fcv_mtperiode	
	
// fcv_ins_id	
// fcv_typeperiode_id	
// fcv_typefrais_ordre