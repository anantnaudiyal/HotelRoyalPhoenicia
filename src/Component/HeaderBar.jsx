import React, { useEffect, useRef, useState } from 'react';
import logo from '../Images/logo.png';
import searchIcon from '../Images/search.png';
import { IoMenu, IoClose } from 'react-icons/io5';

const getStoredTheme = () => localStorage.getItem('theme') || 'light';
const applyTheme = (t) => { document.documentElement.setAttribute('data-theme', t); localStorage.setItem('theme', t); };

export default function HeaderBar(){
  const [theme, setTheme] = useState(getStoredTheme());
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(()=>{ applyTheme(theme); }, [theme]);

  useEffect(()=>{
    const onClick = (e) => { if(menuRef.current && !menuRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  },[]);

  const links = ['overview','suites','dining','wellness','deals','contact'];

  return (
    <nav className="w-full" style={{backdropFilter:'blur(6px)'}}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Royal Phoenicia" className="h-9 w-9 object-contain" />
          <span className="text-lg font-semibold tracking-wide">Royal Phoenicia</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map(slug => (
            <a key={slug} href={`#${slug}`} className="relative group text-sm uppercase tracking-wider">
              {slug}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <img src={searchIcon} alt="search" className="h-5 w-5 opacity-80" />
          <button onClick={()=>setTheme(t=>t==='light'?'dark':'light')} className="button-accent rounded-full px-3 py-1 text-sm">
            {theme==='light' ? 'Dark' : 'Light'}
          </button>
        </div>

        <button className="md:hidden" onClick={()=>setOpen(o=>!o)} aria-label="Toggle menu">
          {open ? <IoClose size={24}/> : <IoMenu size={24}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div ref={menuRef} className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-3">
            {links.map(slug => (
              <a key={slug} href={`#${slug}`} onClick={()=>setOpen(false)} className="py-2 border-b border-white/10">
                {slug.toUpperCase()}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <img src={searchIcon} alt="search" className="h-5 w-5 opacity-80" />
              <button onClick={()=>setTheme(t=>t==='light'?'dark':'light')} className="button-accent rounded-full px-3 py-1 text-sm">
                {theme==='light' ? 'Dark' : 'Light'}
              </button>
            </div>
          </div>
        </div>
      )}
      <hr className="opacity-20" />
    </nav>
  );
}
