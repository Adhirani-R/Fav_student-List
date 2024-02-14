import React, { createContext, useState } from 'react';

const StudentContext = createContext();

const StudentContextProvider = ({ children }) =>
 {
  const [students] = useState([{ id: 1, name: 'Adhirani' }, { id: 2, name: 'Sri' },
  { id: 3, name: 'Vicky' }, { id: 4, name: 'Rani' }, { id: 5, name: 'Siva' }]);

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) =>
   {
    const student = students.find((student) => student.id === id);
    {
      setFavorites([...favorites, student]);
    }
   };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, favorites, toggleFavorite, removeFavorite }} >
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContextProvider, StudentContext };
