import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";
import { storage } from "../lib/storage";

export default function Booking(){
  const { id } = useParams();
  const r = restaurants.find(x=>x.id===id);
  const nav = useNavigate();
  const [date, setDate] = useState(()=>new Date().toISOString().slice(0,10));
  const [time, setTime] = useState("19:30");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if(!r) return <div>Not found</div>;

  function submit(e){
    e.preventDefault();
    const booking = {
      id: crypto.randomUUID(),
      restaurantId: r.id,
      restaurantName: r.name,
      date, time, guests, name, phone,
      createdAt: new Date().toISOString(),
      status: "confirmed"
    };
    const all = storage.get("bookings", []);
    all.push(booking);
    storage.set("bookings", all);
    nav("/confirm", { state: { booking } });
  }

  return (
    <form onSubmit={submit} className="max-w-xl mx-auto card p-5 space-y-4">
      <h1 className="text-2xl font-semibold">Book a table • {r.name}</h1>
      <div>
        <div className="label">Date</div>
        <input type="date" className="input" value={date} onChange={e=>setDate(e.target.value)} required />
      </div>
      <div>
        <div className="label">Time</div>
        <input type="time" className="input" value={time} onChange={e=>setTime(e.target.value)} required />
      </div>
      <div>
        <div className="label">Guests</div>
        <input type="number" min="1" max="12" className="input" value={guests} onChange={e=>setGuests(parseInt(e.target.value||'1'))} required />
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <div className="label">Your name</div>
          <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Manik Mohite" required />
        </div>
        <div>
          <div className="label">Phone</div>
          <input className="input" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="98765 43210" required />
        </div>
      </div>
      <button className="btn-primary w-full">Confirm booking</button>
    </form>
  );
}
