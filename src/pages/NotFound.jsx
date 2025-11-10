import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-6xl">😕</div>
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <Link to="/" className="btn-primary">Back Home</Link>
      </div>
    </div>
  );
}
