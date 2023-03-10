import React,{useEffect}  from 'react' 
import logo from '../../assets/logo.svg'
import './Navbar.css'
import {AiOutlineSearch} from 'react-icons/ai'
const Navbar = () => {
  const searchicon = <AiOutlineSearch/>;
  const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 80 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  let navbarClasses=['navbar'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }
  return (
    <nav >
      <div className={navbarClasses.join(" ")}>
        <div className='style-logo'>
          <img src={logo} alt="StyleInn" />
        </div>
        <div  className='navsearch'>
          <form >
          
              <input className='navinput' type="text" placeholder='&#xF002; Search Collections,brands,designers/stylists'></input>
              <span><button className='nav_btn' type='submit'>Search</button></span>
            </form>
        </div>
        <div>
          <ul className='navitems'>
            <li>Home</li>
            <li>Brand</li>
            <li>Cart</li>
            <li>Help</li>
            <li>Account</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
