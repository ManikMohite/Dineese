import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Filters({ cuisine, setCuisine, onlyAvailable, setOnlyAvailable, sort, setSort }){
  const cuisines = ["All","Italian","Indian","Japanese"];
  return (
    <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {cuisines.map(c => (
        <button key={c} onClick={()=>setCuisine(c)} className={`chip ${cuisine===c ? "ring-2 ring-primary/40" : ""}`}>{c}</button>
      ))}
      <label className="chip flex items-center gap-2 cursor-pointer">
        <input type="checkbox" checked={onlyAvailable} onChange={(e)=>setOnlyAvailable(e.target.checked)} />
        Available now
      </label>
      <select className="chip cursor-pointer" value={sort} onChange={(e)=>setSort(e.target.value)}>
        <option value="relevance">Relevance</option>
        <option value="rating">Top rated</option>
        <option value="distance">Nearest</option>
      </select>
    </motion.div>
  );
}
