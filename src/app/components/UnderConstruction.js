"use client";

import React from "react";
import Link from "next/link";
import "./styles/under-construction.css"; // Import external CSS

export default function UnderConstruction() {
  return (
    <div className="uc-container">
      <div className="uc-content">
        <h1 className="uc-title">🚧 Under Construction 🚧</h1>
        <p className="uc-text">
          We’re working hard to bring something amazing here. Stay tuned!
        </p>

        <div className="uc-buttons">
          <Link href="/" className="uc-btn primary">
            Back to Home
          </Link>
          <Link href="/contact" className="uc-btn secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
