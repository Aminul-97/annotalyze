"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./styles/ServicesDet.css";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    title: "Image Annotation",
    description:
      "We offer a wide range of image annotation services including bounding boxes, polygons, keypoints, and semantic segmentation.",
    img: "/img/image.jpg",
    link: "/services/image-annotation",
    reverse: false,
    aos: "zoom-in-up",
  },
  {
    title: "Video Annotation",
    description:
      "Track moving objects and define sequences frame-by-frame with high-accuracy temporal consistency.",
    img: "/img/video.gif",
    link: "/services/video-annotation",
    reverse: true,
    aos: "zoom-in-left",
  },
  {
    title: "Text Annotation",
    description:
      "Label unstructured data for NLP tasks like entity recognition, intent classification, and sentiment analysis.",
    img: "/img/text.jpg",
    link: "/services/text-annotation",
    reverse: false,
    aos: "fade-up",
  },
  {
    title: "Audio Annotation",
    description:
      "We provide transcription, emotion tagging, and sound classification to extract meaningful audio insights.",
    img: "/img/audio.jpg",
    link: "/services/audio-annotation",
    reverse: true,
    aos: "fade-right",
  },
  {
    title: "3D Point Cloud Annotation",
    description:
      "Annotate LiDAR and 3D sensor data for autonomous vehicles, robotics, and spatial recognition systems using cuboids, segmentation, and labeling.",
    img: "/img/3d.gif",
    link: "/services/3d-point-annotation",
    reverse: false,
    aos: "flip-left",
  },
  {
    title: "Document Annotation",
    description:
      "Transform complex documents into machine-readable formats with annotations like classification, OCR bounding boxes, and key information extraction.",
    img: "/img/document.jpg",
    link: "/services/document-annotation",
    reverse: true,
    aos: "flip-up",
  },
];

export default function ServicesSec() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="container">
      <h2 className="section-title">Our Data Annotation Services</h2>
      <p className="section-subtitle">
        Accelerate your AI development with human-powered, high-quality
        annotation at scale.
      </p>

      {servicesData.map((service, idx) => (
        <div
          className={`service-row ${service.reverse ? "reverse" : ""}`}
          key={idx}
          data-aos={service.aos}
        >
          <div className="service-img">
            <div className="image-wrapper">
              <img src={service.img} alt={service.title} />
            </div>
          </div>
          <div className="service-text">
            <h3>{service.title}</h3>
            <p>{service.description}</p>

            {/* Use Next.js Link instead of <a> */}
            <Link href={service.link} className="view-more">
              View More
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
