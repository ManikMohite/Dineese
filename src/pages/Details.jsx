import React from "react";
import { useParams, Link } from "react-router-dom";
import { restaurants } from "../data/restaurants";
import { motion } from "framer-motion";

export default function Details(){
  const { id } = useParams();
  const r = restaurants.find(x=>x.id===id);
  if(!r) return <div>Not found</div>;
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <motion.div className="space-y-4" initial={{opacity:0,y:6}} animate={{opacity:1,y:0}}>
        <div className="card overflow-hidden">
          <div className="aspect-[16/10] bg-slate-200">
            <img src={r.photos[0]} alt={r.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="card p-4">
          <h3 className="font-semibold mb-2">Photos</h3>
          <div className="grid grid-cols-2 gap-2">
            {r.photos.map((p,i)=>(
              <img key={i} src={p} alt={r.name+" "+i} className="w-full h-28 object-cover rounded-xl" />
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div className="space-y-4" initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:.05}}>
        <div className="card p-5 space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">{r.name}</h1>
          <div className="text-sm text-slate-600">{r.location}</div>
          <div className="text-sm">★ {r.rating} ({r.reviews} reviews)</div>
          <p className="text-slate-700">{r.about}</p>
          <div className="flex flex-wrap gap-2">
            {r.cuisine.map(c=>(<span key={c} className="chip">{c}</span>))}
          </div>
        </div>
        <div className="card p-5 space-y-3">
          <h3 className="font-semibold">Menu Preview</h3>
          <ul className="list-disc list-inside text-slate-700">
            {r.menuPreview.map(m=>(<li key={m}>{m}</li>))}
          </ul>
          <Link to={`/book/${r.id}`} className="btn-primary w-full text-center">Book a table</Link>
        </div>
      </motion.div>
    </div>
  );
}
