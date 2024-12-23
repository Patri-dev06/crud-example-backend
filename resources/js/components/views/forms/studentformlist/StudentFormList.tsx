import React from 'react';
import { useStudentForm } from '../../../context/StudentContext';
import apiService from '../../../../../services/apiService';
import { useNavigate } from 'react-router-dom';

function StudentFormList() {
  const { studentList } = useStudentForm();
  const navigate = useNavigate(); // Move this inside the component

  const handleDelete = async (id: number) => {
    try {
      await apiService.delete(`deleteform/${id}`);
      alert('Student deleted successfully!');
      window.location.reload(); // Refresh the student list after deletion
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleUpdate = (student) => {
    navigate(`/update-student/${student.id}`, {
      state: { student }, // Pass student data via state
    });
  };

  return (
    <div className="card bg-gray-300">
      <div className="card-body">
        <h2 className="card-title text-2xl">Registered students!</h2>
        <p className="text-sm">
          If your name is not here, please register.
        </p>
        <div className="rounded-xl bg-base-600 p-6 gap-3 mt-5">
          {studentList.length > 0 ? (
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Year Level</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {studentList.map((student) => (
                  <tr key={student.id} className="border-t">
                    <td className="px-4 py-2">{student.name}</td>
                    <td className="px-4 py-2">{student.yearlvl}</td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleUpdate(student)}
                        className="btn btn-sm btn-warning mx-1"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="btn btn-sm btn-error mx-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No students registered yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentFormList;
