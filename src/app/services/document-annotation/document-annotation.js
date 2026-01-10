"use client";

import { useEffect, useState } from "react";
import yaml from "js-yaml";
import "aos/dist/aos.css";
import "../services.css";

export default function DocumentAnnotationPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch YAML dynamically from public folder
    fetch("/contents/document-annotation.yml")
      .then((res) => res.text())
      .then((text) => setData(yaml.load(text)));
  }, []);

  if (!data) return <p style={{ padding: "2rem", textAlign: "center" }}>Loading...</p>;

  return (
    <section className="container">
      <h1 className="section-title">{data.title}</h1>
      <p className="section-subtitle">{data.subtitle}</p>

      {/* What is Image Annotation */}
      <div className="section grid" data-aos="fade-up">
        <div>
          <h2>{data.what_is_section.title}</h2>
          <p>{data.what_is_section.description}</p>
        </div>
        <div className="image-wrapper">
          <img
            src={data.what_is_section.image}
            alt={data.what_is_section.title}
          />
        </div>
      </div>

      {/* Types Section */}
      <div className="section">
        <h2 className="section-title">{data.types_section.title}</h2>
        <p className="section-subtitle">{data.types_section.subtitle}</p>
        <div className="feature-grid">
          {data.types_section.features.map((f, i) => (
            <div
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              key={i}
            >
              <img src={f.image} alt={f.title} />
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <div className="section">
        <h2 className="section-title">{data.industries_section.title}</h2>
        <p className="section-subtitle">{data.industries_section.subtitle}</p>
        <div className="feature-grid">
          {data.industries_section.features.map((f, i) => (
            <div
              className="feature-card"
              data-aos="flip-left"
              data-aos-delay={i * 100}
              key={i}
            >
              <img src={f.image} alt={f.title} />
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="section grid" data-aos="fade-up">
        <div>
          <h2>{data.why_choose_us.title}</h2>
          <p>{data.why_choose_us.description}</p>
          <ul>
            {data.why_choose_us.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="image-wrapper">
          <img
            src={data.why_choose_us.image}
            alt={data.why_choose_us.title}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="cta-box" data-aos="zoom-in">
        <h2>{data.cta.title}</h2>
        <p>{data.cta.description}</p>
        <a href={data.cta.button_link} className="cta-btn">
          {data.cta.button_text}
        </a>
      </div>
    </section>
  );
}
