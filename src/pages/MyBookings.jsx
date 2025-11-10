import React, { useEffect, useState } from "react";
import { storage } from "../lib/storage";

export default function MyBookings(){
  const [list, setList] = useState([]);
  useEffect(()=>{
    setList(storage.get("bookings", []).slice().reverse());
  }, []);

  function cancel(id){
    const next = storage.get("bookings", []).map(b => b.id===id ? { ...b, status: "cancelled" } : b);
    storage.set("bookings", next);
    setList(next.slice().reverse());
  }

  if(list.length===0){
    return <div className="card p-10 text-center text-slate-600">No bookings yet. Discover a restaurant and reserve your first table.</div>
  }

  return (
    <div className="space-y-3">
      {list.map(b => (
        <div key={b.id} className="card p-4 flex items-center justify-between">
          <div>
            <div className="font-semibold">{b.restaurantName}</div>
            <div className="text-sm text-slate-600">{b.date} at {b.time} • {b.guests} guests</div>
            <div className="text-xs uppercase tracking-wide mt-1">{b.status}</div>
          </div>
          {b.status==="confirmed" ? (
            <button onClick={()=>cancel(b.id)} className="btn-ghost">Cancel</button>
          ) : (
            <div className="text-slate-500 text-sm">Cancelled</div>
          )}
        </div>
      ))}
    </div>
  );
}
