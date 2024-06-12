<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('n_fraisconvenus', function (Blueprint $table) {
            $table->id();
            $table->integer('fcv_montant')->nullable();
            $table->integer('fcv_sompayee')->nullable();
            $table->integer('fcv_nbperiodes')->nullable();
            $table->integer('fcv_mtperiode')->nullable();
            $table->integer('fcv_typefrais_id')->nullable();
            $table->integer('fcv_ins_id')->nullable();
            $table->integer('fcv_typeperiode_id')->nullable();
            $table->integer('fcv_typefrais_ordre')->nullable(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('n_fraisconvenus');
    }
};


