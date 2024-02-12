import './index.css';
import { Link } from "react-router-dom";

const Nav=()=>
{
  return(<div className='nav'>
    <h2><Link to={'./studentlist'} style={{ color: 'white', textDecoration: 'none', marginLeft:'15px' }}> Student List</Link></h2>
   <h2> <Link to={'./favorite'} style={{ color: 'white', textDecoration: 'none' }}>
    Favorite Students</Link></h2>  
  </div>)
}
export default Nav