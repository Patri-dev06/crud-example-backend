import React from 'react';
import { Route, Routes as Router } from 'react-router-dom';
import Main from '../views/main';
import StudentFormList from '../views/forms/studentformlist/StudentFormList'; // Adjust the import path as needed
import UpdateStudent from '../views/forms/StudentUpdateForm'; // Adjust the import path as needed

export const Routes = () => {
    return (
        <Router>
            <Route path="/" element={<Main />} />
            <Route path="/student-list" element={<StudentFormList />} />
            <Route path="/update-student/:id" element={<UpdateStudent />} />
        </Router>
    );
};

export default Routes;
