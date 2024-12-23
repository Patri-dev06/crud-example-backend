import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import { StudentFormProvider } from './context/StudentContext';
import NavBar from '../components/views/navbar/NavBar';

const App = () => {
    return <BrowserRouter>
        <StudentFormProvider>
            <NavBar />    
            <Routes />
        </StudentFormProvider>
    </BrowserRouter>
}

export default App;