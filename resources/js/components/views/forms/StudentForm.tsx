import React from 'react';
import apiService from '../../../../services/apiService';

const studentform = () => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [yearlvl, setYearlvl] = React.useState('');
  const [isUpdateMode, setIsUpdateMode] = React.useState(false); // To toggle between register and update modes
  const [currentStudentId, setCurrentStudentId] = React.useState(null);
  const handleSubmit = async () => {
    const formData = { name, password, yearlvl };

    try {
      if (isUpdateMode) {
        // If in update mode, update the student data
        await apiService.put(`/updateform/${currentStudentId}`, formData);
        alert('Student updated successfully!');
      } else {
        // If not in update mode, create a new student
        await apiService.post('/submitForm', formData);
        alert('Student registered successfully!');
        window.location.reload();
      }

      // Reset the form
      setName('');
      setPassword('');
      setYearlvl('');
      setIsUpdateMode(false); // Reset the form to register mode
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred!');
    }
  };

    return (
    <div className='flex flex-col gap-4'>
        
    <label className="input input-bordered flex items-center gap-2">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
    </svg>
    <input 
    value={name}
    onChange={(e) => setName(e.target.value)}
    type="text" className="grow" placeholder="Name" />
    </label>
    
    <label className="input input-bordered flex items-center gap-2">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
        fillRule="evenodd"
        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
        clipRule="evenodd" />
    </svg>
    <input
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    type="password" className="grow" placeholder="Password" />
    </label>

    <select 
    value={yearlvl}
    onChange={(e) => setYearlvl(e.target.value)}
    className="select select-bordered w-full max-w-xs">
        <option value="" disabled>
            Year Level
            </option>
        <option>1st Year</option>
        <option>2nd Year</option>
        <option>3rd Year</option>
        <option>4th Year</option>
    </select>

    <button className="btn btn-active btn-secondary" onClick={handleSubmit}>Register</button>

    </div>
  )
}

export default studentform