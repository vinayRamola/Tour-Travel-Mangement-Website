import React,{useRef, useEffect} from 'react'
import { Container, Row, Button} from 'reactstrap'
import {NavLink, Link, useNavigate} from 'react-router-dom'

import logo from '../../assets/images/logo.png';
import './header.css';
import { AuthContext } from './../../context/AuthContext'
import { useContext } from 'react';

const nav__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
]

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const {user, dispatch} = useContext(AuthContext);

  const logout = ()=>{
    dispatch({type:'LOGOUT'})
    navigate('/')
  }

  const stickHeaderFunc = ()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    stickHeaderFunc()
    return window.removeEventListener('scroll',stickHeaderFunc)
  })

  const toggleMenu = ()=>menuRef.current.classList.toggle('show__menu')

  return <header className="header" ref={headerRef}>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between ">

          {/* *************Logo*********** */}
          <div className='logo'>
            <img src={logo} alt="" />
          </div>

          {/* **********Menu start********* */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu d-flex align-items-center gap-5'>
              {
                nav__links.map((items,index) => (
                  <li className="nav__item">
                    <NavLink to={items.path} className={navClass=> navClass.isActive ? "active__link" :""}>{items.display}</NavLink>

                    {/* isactive class here is used to selct only one navbar link */}
                  </li>
                ))}
            </ul>
          </div>
          {/* *********Menu ends********* */}

        <div className='nav__right d-flex align-items gap-4'>
          <div className="nav__btns d-flex align-items-center gap-4">

            {
              user? (
                <>
                <h5 className='mb-0'>{user.username}</h5>
                <Button className='btn btn-dark' onClick={logout}>Logout</Button>
              </>
              ):(
                <>
                <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
                </>
              )
            }  
          </div>

          <span className='mobile__menu' onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
          </span>
        </div>
        </div>
      </Row>
  </header>
}

export default Header