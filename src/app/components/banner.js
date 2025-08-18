"use client";

import React from "react";
import "./styles/VideoBanner.css"; // Import external CSS

export default function VideoBanner() {
  return (
    <section className="banner">
      <video autoPlay muted loop playsInline>
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1>We simplify complex data work without dumbing it down.</h1>
      </div>
    </section>
  );
}
