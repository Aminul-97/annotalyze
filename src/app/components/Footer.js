"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/Footer.css";

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left: Logo + Social */}
        <div className="footer-left" data-aos="fade-right">
          <Link href="/">
            <Image src="/img/logo.png" alt="Company Logo" className="footer-logo" />
          </Link>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/img/x.svg" alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/img/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/img/insta.svg" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Middle: Company Links */}
        <div className="footer-middle" data-aos="fade-up">
          <h4>Company</h4>
          <ul>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Right: Resources */}
        <div className="footer-right" data-aos="fade-left">
          <h4>Resources</h4>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Annotalyze. All rights reserved.</p>
      </div>
    </footer>
  );
}
