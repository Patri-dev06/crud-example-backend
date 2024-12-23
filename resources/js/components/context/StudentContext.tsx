import React from 'react';
import apiService from '../../../services/apiService';

interface StudentData {
    id: number;
    name: string;
    password: string;
    yearlvl: string;
    created_at: string;
    updated_at: string;
}

interface StudentContextType {
    studentList: StudentData [];
    updateStudentForm: () => void;
}

const StudentContext = React.createContext<StudentContextType | undefined>(undefined);

export const StudentFormProvider: React.FC = ({ children }) => {
    
    const [studentList, setStudentList] = React.useState<StudentData[]>([]);

    const fetchStudentForm = () => {
        apiService.get<{data: StudentData[]}>('getform').then((response) => {
            console.log(response.data)
            setStudentList(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    React.useEffect(() => {
        fetchStudentForm();
    }, []);

    const updateStudentForm = () => {
        fetchStudentForm();
    };

    return <StudentContext.Provider value={{studentList, }}>{children}</StudentContext.Provider>
};

export const useStudentForm = () => {
    const context = React.useContext(StudentContext);

    if (!context) {
        throw new Error('useStudentForm must be used within a StudentFormProvider');
    }

    return context;
};


