"use client";
import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/ContactSection.css";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="contact-section" data-aos="fade-up">
      <h1 data-aos="zoom-in">Let’s Build Something Amazing Together 🚀</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        Have a project in mind, or just want to connect with our team? Reach out
        and let's make it happen.
      </p>

      {/* Link instead of <a> */}
      <Link href="/contact" className="contact-button" data-aos="zoom-in" data-aos-delay="400">
        Send Message
      </Link>
    </section>
  );
}
