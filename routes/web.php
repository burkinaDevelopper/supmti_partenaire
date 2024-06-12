<?php

use App\Http\Controllers\{
    ProfileController,
    NewRegisterController,
    ManagerInscription,
    ManagerPayment,
    NewRecuController,
    RequestManagerController,
};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->middleware('BlockHome');

Route::get('/dashboard', function () {
    return Inertia::render('PartnerArea', [
        "logo" => asset("assets/image/supmti-logo.png"),
    ]);
})->middleware(['auth'])->name('partner.area');




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/inscription/nouvelle', [NewRegisterController::class, 'inscription'])->name('inscription');
    Route::post('/inscription/store', [NewRegisterController::class, 'inscriptionStore'])->name('inscription.store');
    Route::get('/inscription/liste', [ManagerInscription::class, 'gestionInscription'])->name('inscription.liste');
    Route::get('/inscription/recu', [ManagerPayment::class, 'payment'])->name('payment');
    Route::get('/inscription/nouveaupaiment', [NewRecuController::class, 'newRecu'])->name('newRecu');
    Route::get('/inscription/gestiondemande', [RequestManagerController::class, 'requestManager'])->name('requestManager');
});


require __DIR__ . '/auth.php';



