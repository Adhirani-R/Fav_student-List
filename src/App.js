// App.js
import React from 'react';
import { StudentContextProvider } from './StudentContextProvider';
import StudentList from './StudentList';
import FavoriteStudent from './FavoriteStudent';
import Nav from './Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  
  return (
    <BrowserRouter>
     <Nav />
     
        <StudentContextProvider>
        <Routes>
        <Route path='/' element={<StudentList />}/>
          <Route path='/studentlist' element={<StudentList />}/>
          <Route path='/favorite' element={<FavoriteStudent />}/>
          </Routes>
        </StudentContextProvider>
     
    </BrowserRouter>
  );
};

export default App;
