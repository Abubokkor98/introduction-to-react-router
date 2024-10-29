import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="p-2 flex gap-7 text-xl bg-purple-700">
        <span>My Website</span>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact Us</Link>
        <Link to={'/users'}>Users</Link>
        <Link to={'/posts'}>Posts</Link>
      </nav>
    </div>
  );
}
