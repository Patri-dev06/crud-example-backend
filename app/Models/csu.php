<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class csu extends Model
{
    use HasFactory;

    // Specify fillable fields for mass assignment
    protected $fillable = ['name', 'password', 'yearlvl'];

    // Mutator for password hashing
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = ($value);
    }

    // Create a new student form
    public function createForm($form)
    {
        return $this->create($form);
    }

    // Retrieve all student forms
    public function getForm()
    {
        return $this->all();
    }

    // Update a student form
    public function updateForm($id, $data)
    {
        $form = $this->findOrFail($id); // Fetch record
        $form->update($data); // Update with provided data
        return $form;
    }
}
