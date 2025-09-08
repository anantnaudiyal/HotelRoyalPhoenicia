import React, { useEffect, useState } from 'react';

export default function ScrollTopButton(){
  const [visible, setVisible] = useState(false);
  useEffect(()=>{
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  },[]);

  const goTop = () => window.scrollTo({top:0, behavior:'smooth'});

  return visible ? (
    <button
      onClick={goTop}
      style={{position:'fixed', right:16, bottom:16, padding:'10px 14px', borderRadius:9999, boxShadow:'0 8px 24px rgba(0,0,0,.25)', border:'none', cursor:'pointer'}}
      className="button-accent"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
}
