import React from "react";
import CountUp from "react-countup";

export default function StatCard({ number, label }) {
  return (
    <div className="stat-card">
      <div className="stat-content">
        <span className="stat-number">
          {typeof number === "number" ? (
          <CountUp start={0} end={number} duration={2.5} suffix="+" />
        ) : (
            number // Fallback if `number` is not a number
          )}
        </span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  );
}
