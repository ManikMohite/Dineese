import React from "react";
import { motion } from "framer-motion";

export default function SearchBar({ value, onChange }){
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
      <div className="relative">
        <input
          className="input pl-11"
          placeholder="Search restaurants, cuisines…"
          value={value}
          onChange={(e)=>onChange(e.target.value)}
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔎</span>
      </div>
    </motion.div>
  );
}
