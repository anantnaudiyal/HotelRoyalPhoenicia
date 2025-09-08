import React, { useState } from 'react';
import card1 from '../Images/card-1.png';
import card2 from '../Images/card-2.png';
import card3 from '../Images/card-3.png';

const data = [
  { id: 1, title: 'Deluxe Suite', image: card1, desc: 'Spacious city-view suite with king bed.' },
  { id: 2, title: 'Royal Suite', image: card2, desc: 'Elegant corner suite with lounge access.' },
  { id: 3, title: 'Executive Suite', image: card3, desc: 'Modern suite perfect for business stays.' },
];

export default function Suites(){
  const [query, setQuery] = useState('');
  const items = data.filter(d => d.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <section id="suites" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Our Suites</h2>
          <p className="opacity-70 mt-1">Handpicked rooms for every kind of traveler.</p>
        </div>
        <input
          value={query}
          onChange={e=>setQuery(e.target.value)}
          placeholder="Search suites..."
          className="px-4 py-2 rounded-xl border border-white/20 bg-transparent outline-none"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map(s => (
          <article key={s.id} className="card rounded-2xl overflow-hidden shadow-md border border-white/10">
            <img src={s.image} alt={s.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="opacity-70 text-sm mt-1">{s.desc}</p>
              <button className="button-accent mt-4 px-4 py-2 rounded-xl">View Details</button>
            </div>
          </article>
        ))}
        {items.length === 0 && (
          <p className="opacity-70">No suites match “{query}”. Try a different search.</p>
        )}
      </div>
    </section>
  );
}
