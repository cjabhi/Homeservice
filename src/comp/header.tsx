"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import '../comp/css/navbar.css';
import {FaBars, FaTimes} from "react-icons/fa";
import { signOut } from '@/auth';

const Navbar = () => {

    const [click , setClick] = useState(false);
    const handleclick = ()=>{setClick(!click)};
    const [color , setcolor] = useState(false);
    const handlecolor = ()=>{
        if(window.scrollY>=1){
            setcolor(true);
        }else{
            setcolor(false);
        }
    }
    window.addEventListener("scroll" , handlecolor);
    
        
    const logout = async ()=>{
        await signOut();
    }
  return (
    <div className={color ? "header header-bg" : " header"} >
        <Link href={'/'}> <h1>HomeService</h1> </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"} >
            <li> <Link href={'/userprofile'} >My Profile</Link> </li>
            <li> <Link href={'/register-service'} >Register / Update</Link> </li>
            <li> <button onClick={logout} >logout</button> </li>
        </ul>
        <div className='hamburger' >
            {
                !click ? (<FaBars size={20} style={{color:"black"}} onClick={handleclick} />) : (<FaTimes size={20} style={{color:"black"}} onClick={handleclick} />)
            }
        </div>
        
    </div>
  )
}

export default Navbar