"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./styles/Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen((v) => !v);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    // Only toggle via JS on small screens; desktop uses :hover CSS
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setDropdownOpen((v) => !v);
    }
  };

  return (
    <nav>
      <div className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <img src="/img/annotalyze.png" alt="Logo"/>
          </Link>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMobile} aria-label="Toggle menu">
          ☰
        </div>

        {/* Links */}
        <div className={`nav-links ${mobileOpen ? "show" : ""}`}>
          <Link href="/">Home</Link>

          {/* Dropdown */}
          <div className={`dropdown ${dropdownOpen ? "open" : ""}`}>
            <div
              className="dropdown-btn"
              onClick={toggleDropdown}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleDropdown()}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Services
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="dropdown-menu">
              <Link href="/services/image-annotation">Image Annotation</Link>
              <Link href="/services/video-annotation">Video Annotation</Link>
              <Link href="/services/text-annotation">Text Annotation</Link>
              <Link href="/services/audio-annotation">Audio Annotation</Link>
              <Link href="/services/3d-point-annotation">3d Point Annotation</Link>
              <Link href="/services/document-annotation">Document Annotation</Link>
            </div>
          </div>

          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact">Contact Us</Link>

          <button className="quote-btn" type="button">Get A Quote</button>
        </div>
      </div>
    </nav>
  );
}
