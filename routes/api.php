<?php

use App\Http\Controllers\Api\FormApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/submitForm', [FormApiController::class, 'saveForm']);
Route::get('/getform', [FormApiController::class, 'getAllStudents']);
Route::delete('/deleteform/{id}', [FormApiController::class, 'deleteStudent']);
Route::put('/updateform/{id}', [FormApiController::class, 'updateStudent']);


