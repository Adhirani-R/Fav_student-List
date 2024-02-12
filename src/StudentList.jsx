import React, { useContext } from 'react';
import { StudentContext } from './StudentContextProvider';

const StudentList = () =>
 {
  const { students, favorites, toggleFavorite } = useContext(StudentContext);
  const isFavorite = (id) => favorites.some((student) => student.id === id);
  
  return (
    <>

      <div className='stu'>
       {
          students.map((student) =>
           (       
            <>
             <p>{student.id} <span>. {student.name}</span>
             <button className='b_fav' onClick={() => toggleFavorite(student.id)}
              disabled={isFavorite(student.id)}  >Add to Favourite</button> </p>
               
            </> 
           ))}
        
      </div>
    </>
  );
};

export default StudentList;
