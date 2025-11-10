import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Confirmation(){
  const loc = useLocation();
  const nav = useNavigate();
  const booking = loc.state?.booking;
  if(!booking){
    return (
      <div className="card p-6 space-y-4 max-w-lg mx-auto text-center">
        <h1 className="text-xl font-semibold">No booking in progress</h1>
        <Link to="/" className="btn-ghost">Back to Discover</Link>
      </div>
    );
  }
  return (
    <div className="card p-6 space-y-4 max-w-lg mx-auto text-center">
      <div className="text-5xl">🎉</div>
      <h1 className="text-2xl font-semibold">Your table is reserved!</h1>
      <div className="text-slate-700">
        <div><strong>{booking.restaurantName}</strong></div>
        <div>{booking.date} at {booking.time} • {booking.guests} guests</div>
        <div>Under: {booking.name} • {booking.phone}</div>
      </div>
      <div className="flex gap-2 justify-center">
        <Link to="/my-bookings" className="btn-primary">View my bookings</Link>
        <button onClick={()=>nav(-1)} className="btn-ghost">Modify</button>
      </div>
    </div>
  );
}
