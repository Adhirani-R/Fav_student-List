import React, { useContext } from 'react';
import { StudentContext } from './StudentContextProvider';

const FavoriteStudent = () => 
{
  const { favorites, removeFavorite } = useContext(StudentContext);

   return (
    <div div className='stu'>
      {
      favorites.map((student) => 
      (
         <p>{student.id}
            <span>. {student.name}</span>
            <button className='b_fav' onClick={() => removeFavorite(student.id)}>Remove Fav</button>
          </p>
      ))}
    </div>
  );
};

export default FavoriteStudent;
