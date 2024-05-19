<?php

use App\Http\Controllers\{
    ProfileController,
    NewRegisterController
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
});


require __DIR__ . '/auth.php';
