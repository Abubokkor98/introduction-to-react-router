import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <div>
      <nav className="p-2 flex gap-7 text-xl bg-purple-700 ">
        <span>My Website</span>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact Us</Link>
        <NavLink to={'/users'}>Users</NavLink>
        <NavLink to={'/posts'}>Posts</NavLink>
      </nav>
    </div>
  );
}
