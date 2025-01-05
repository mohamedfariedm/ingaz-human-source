
import React from "react";


export default function StatCard({ number, label }) {
  return (
    <div className="stat-card">
      <div className="stat-content">
        <span className="stat-number">{number}</span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  );
}
