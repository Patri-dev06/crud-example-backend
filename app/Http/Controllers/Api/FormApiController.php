<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\csu;
use Illuminate\Support\Facades\Validator;

class FormApiController extends Controller
{
    protected $todoModel;

    public function __construct()
    {
        $this->todoModel = new csu();
    }

    /**
     * Save a new student form.
     */
    public function saveForm(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'password' => 'required|min:5',
            'yearlvl' => 'required|string|max:10',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors(),
            ], 422);
        }

        $this->todoModel->createForm([
            'name' => $request->name,
            'password' => $request->password, // Encrypt the password
            'yearlvl' => $request->yearlvl,
        ]);

        return response()->json([
            'message' => 'Form Successfully Sent',
        ], 200);
    }

    /**
     * Retrieve all registered students.
     */
    public function getAllStudents()
    {
        return response()->json([
            'data' => $this->todoModel->getForm(),
        ], 200);
    }

    /**
     * Delete a student by ID.
     */
    public function deleteStudent($id)
    {
        $student = $this->todoModel->find($id);

        if (!$student) {
            return response()->json([
                'status' => 'error',
                'message' => 'Student not found',
            ], 404);
        }

        $student->delete();

        return response()->json([
            'message' => 'Student deleted successfully',
        ], 200);
    }

    /**
     * Update a student's details.
     */
    public function updateStudent(Request $request, $id)
    {
        try {
            // Validate request
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'password' => 'required|string|min:5',
                'yearlvl' => 'required|string|in:1st Year,2nd Year,3rd Year,4th Year',
            ]);
    
            // Find the student and update
            $student = csu::findOrFail($id);
            $student->update($validated);
    
            return response()->json(['message' => 'Student updated successfully'], 200);
    
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(['error' => 'Student not found'], 404);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An unexpected error occurred'], 500);
        }
    }
    
}
