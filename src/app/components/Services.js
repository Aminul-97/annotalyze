"use client";

import React, { useEffect } from "react";
import "./styles/ServicesSection.css"; // External CSS

export default function ServicesSection() {
  useEffect(() => {
    // Fade-in animation using IntersectionObserver
    const cards = document.querySelectorAll(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section">
      <h2 className="animated-heading fancy-zoom">
        Our Data Annotation Services
      </h2>
      <p className="subheading">
        We transform raw data into smart AI-ready datasets.
      </p>

      <div className="services-grid">
        {/* Image Annotation */}
        <div className="service-card">
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <rect x="6" y="6" width="52" height="52" rx="4" />
              <rect x="18" y="20" width="28" height="18" strokeDasharray="4 2" />
            </svg>
          </div>
          <h3>Image Annotation</h3>
          <p>
            Bounding boxes, polygons, and segmentation for object detection and
            computer vision.
          </p>
          <a className="view-more" href="/services/image-annotation">
            View More
          </a>
        </div>

        {/* Video Annotation */}
        <div className="service-card">
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <rect x="8" y="12" width="36" height="40" rx="4" />
              <polygon points="30,26 42,32 30,38" fill="none" />
              <rect x="48" y="20" width="8" height="24" rx="2" />
            </svg>
          </div>
          <h3>Video Annotation</h3>
          <p>
            Track objects across frames for real-time insights and autonomous
            vision systems.
          </p>
          <a className="view-more" href="/services/video-annotation">
            View More
          </a>
        </div>

        {/* Text Annotation */}
        <div className="service-card">
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <rect x="10" y="10" width="44" height="44" rx="3" />
              <line x1="18" y1="22" x2="46" y2="22" />
              <line x1="18" y1="30" x2="46" y2="30" />
              <line x1="18" y1="38" x2="38" y2="38" />
            </svg>
          </div>
          <h3>Text Annotation</h3>
          <p>
            NER, sentiment tagging, and entity linking for training advanced NLP
            models.
          </p>
          <a className="view-more" href="/services/text-annotation">
            View More
          </a>
        </div>

        {/* Audio Annotation */}
        <div className="service-card">
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <line x1="10" y1="32" x2="10" y2="42" />
              <line x1="18" y1="24" x2="18" y2="48" />
              <line x1="26" y1="18" x2="26" y2="46" />
              <line x1="34" y1="24" x2="34" y2="48" />
              <line x1="42" y1="28" x2="42" y2="42" />
              <line x1="50" y1="34" x2="50" y2="38" />
            </svg>
          </div>
          <h3>Audio Annotation</h3>
          <p>
            Transcription, emotion tagging, and speech segmentation for
            voice-driven AI.
          </p>
          <a className="view-more" href="/services/audio-annotation">
            View More
          </a>
        </div>

        {/* 3D Point Cloud */}
        <div className="service-card">
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M32 12 L52 22 L52 42 L32 52 L12 42 L12 22 Z" />
              <circle cx="32" cy="12" r="1.5" />
              <circle cx="52" cy="22" r="1.5" />
              <circle cx="52" cy="42" r="1.5" />
              <circle cx="32" cy="52" r="1.5" />
              <circle cx="12" cy="42" r="1.5" />
              <circle cx="12" cy="22" r="1.5" />
            </svg>
          </div>
          <h3>3D Point Cloud</h3>
          <p>
            LiDAR and 3D object labeling to support navigation, robotics, and AR
            systems.
          </p>
          <a className="view-more" href="/services/3d-point-cloud">
            View More
          </a>
        </div>

        {/* Document Annotation */}
        <div className="service-card">
          <div className="service-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M16 8 H40 L52 20 V56 A4 4 0 0 1 48 60 H16 A4 4 0 0 1 12 56 V12 A4 4 0 0 1 16 8 Z" />
              <line x1="20" y1="28" x2="44" y2="28" />
              <line x1="20" y1="36" x2="44" y2="36" />
              <line x1="20" y1="44" x2="34" y2="44" />
            </svg>
          </div>
          <h3>Document Annotation</h3>
          <p>
            Extract key data from scanned invoices, IDs, and structured
            documents.
          </p>
          <a className="view-more" href="/services/document-annotation">
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
