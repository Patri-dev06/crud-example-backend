import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import apiService from '../../../../services/apiService'; // Adjust import path as needed

const StudentUpdateForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student; // Fetch student data passed via navigate state

  // State for form fields
  const [name, setName] = useState(student?.name || '');
  const [password, setPassword] = useState(student?.password || '');
  const [yearlvl, setYearlvl] = useState(student?.yearlvl || '');

  // Update form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, password, yearlvl }); // Log the data being sent
    try {
        await apiService.put(`/updateform/${student.id}`, { name, password, yearlvl });
        alert('Student updated successfully!');
        navigate('/'); // Redirect to the main page after successful update
    } catch (error) {
        console.error('Error updating student:', error.response?.data || error);
        alert('Failed to update student. Please check the data.');
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Student</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name Input */}
          <label className="input-group">
            <span className="w-24">Name</span>
            <input
              type="text"
              placeholder="Enter student name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          {/* Password Input */}
          <label className="input-group">
            <span className="w-24">Password</span>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {/* Year Level Dropdown */}
          <label className="input-group">
            <span className="w-24">Year Level</span>
            <select
              className="select select-bordered w-full"
              value={yearlvl}
              onChange={(e) => setYearlvl(e.target.value)}
            >
              <option value="" disabled>
                Select Year Level
              </option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </label>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Update
          </button>
          {/* Cancel Button */}
          <button
            type="button"
            className="btn btn-secondary w-full"
            onClick={() => navigate('/')} // Redirect to the main page on cancel
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentUpdateForm;
