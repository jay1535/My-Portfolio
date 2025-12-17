import { useState } from "react";
import { skills, education, certificates } from "../constants";
import SkillCard from "../components/skills";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [activeCert, setActiveCert] = useState(null);

  function splitIntoDecreasingRows(skills) {
    let rows = [];
    let rowSize = Math.min(9, skills.length);
    let index = 0;

    while (index < skills.length && rowSize > 0) {
      rows.push(skills.slice(index, index + rowSize));
      index += rowSize;
      rowSize--;
    }
    return rows;
  }

  return (
    <section className="relative max-w-full mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-screen bg-[#121212] text-[#EAEAEA] overflow-hidden">

      {/* ===== Background Glow ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[180px] bottom-[-200px] right-[-200px]" />
      </div>

      {/* ===== Header ===== */}
      <h1 className="sm:text-5xl text-3xl font-semibold text-center">
        Hello, I’m{" "}
        <span className="bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-transparent">
          Jayant
        </span>{" "}
        👋
      </h1>

      <p className="mt-6 text-lg text-[#EAEAEA]/80 text-center max-w-3xl mx-auto leading-relaxed">
        A passionate Software Engineer and Full-Stack Developer who enjoys
        transforming ideas into scalable, impactful digital products.
        I focus on clean architecture, thoughtful UI, and real-world problem solving.
      </p>

      {/* ===== Skills ===== */}
      <div className="py-16">
        <h3 className="text-3xl font-semibold text-center mb-4">
          Skills & Expertise
        </h3>

        <p className="text-center max-w-3xl mx-auto text-[#EAEAEA]/70 mb-12 leading-relaxed">
          Over time, I’ve built a strong technical toolkit by working across
          different layers of application development. These skills help me
          design intuitive interfaces, build reliable backend systems, and
          deliver solutions that scale with growing requirements.
        </p>

        <div className="flex flex-col items-center gap-6">
          {splitIntoDecreasingRows(skills).map((row, idx) => (
            <div key={idx} className="flex gap-6 justify-center flex-wrap">
              {row.map((skill, i) => (
                <SkillCard key={i} skill={skill} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== Education ===== */}
      <div className="mt-32">
        <h3 className="text-3xl font-semibold text-center mb-4">
          Education
        </h3>

        <p className="text-center max-w-3xl mx-auto text-[#EAEAEA]/70 mb-12 leading-relaxed">
          My academic journey has played a crucial role in shaping my logical
          thinking and problem-solving abilities. Alongside formal coursework,
          I’ve consistently applied theoretical concepts through projects,
          practical implementations, and continuous self-learning.
        </p>

        <VerticalTimeline lineColor="#00DFD8">
          {education.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background:
                  "linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)",
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,223,216,0.35)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #00DFD8" }}
              iconStyle={{ background: "#121212" }}
              icon={
                <img
                  src={edu.iconUrl}
                  alt={edu.name}
                  className="w-full h-full object-contain p-2 rounded-full"
                />
              }
            >
              <h3 className="text-xl font-bold">{edu.name}</h3>
              <h4 className="opacity-80">{edu.organization}</h4>
              <p className="mt-2 text-[#00DFD8] font-semibold">{edu.year}</p>
              <p className="opacity-80">{edu.score}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* ===== Certifications (Carousel Stops on Hover) ===== */}
      <div className="mt-28">
        <h3 className="text-3xl font-semibold text-center mb-4">
          Certifications & Learning
        </h3>

        <p className="text-center max-w-3xl mx-auto text-[#EAEAEA]/70 mb-10 leading-relaxed">
          Learning never stops in technology. These certifications reflect my
          dedication to staying current with industry trends, mastering modern
          tools, and continuously sharpening my technical and analytical skills.
        </p>

        {/* IMPORTANT: group wrapper */}
        <div className="relative group ">
          <div
            className="
              flex gap-6 w-max
              animate-certScroll
              group-hover:[animation-play-state:paused]
            "
          >
            {[...certificates, ...certificates].map((cert, index) => (
              <div
                key={index}
                onClick={() => setActiveCert(cert)}
                className="
                  w-[260px]
                  cursor-pointer
                  bg-gradient-to-br from-[#1A1A2E] to-[#16213E]
                  border border-[#00DFD8]/30
                  rounded-2xl p-6
                  transition-all duration-300
                  hover:scale-110
                  hover:border-[#00DFD8]
                  hover:shadow-[0_0_35px_rgba(0,223,216,0.7)]
                "
              >
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="h-28 w-full object-contain mb-4"
                />

                <h4 className="text-center font-semibold text-lg">
                  {cert.title}
                </h4>

                <p className="text-center text-sm text-[#00DFD8]/80 mt-1">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Certificate Modal ===== */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center px-4"
          onClick={() => setActiveCert(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              max-w-xl w-full
              bg-gradient-to-br from-[#1A1A2E] to-[#16213E]
              rounded-3xl p-6
              shadow-[0_0_50px_rgba(0,223,216,0.7)]
            "
          >
            <button
              className="absolute top-4 right-6 text-xl hover:text-[#00DFD8]"
              onClick={() => setActiveCert(null)}
            >
              ✕
            </button>

            <img
              src={activeCert.imageUrl}
              alt={activeCert.title}
              className="w-full h-64 object-contain mb-6"
            />

            <h3 className="text-2xl font-bold text-center">
              {activeCert.title}
            </h3>
            <p className="text-center text-[#00DFD8] font-semibold mt-2">
              {activeCert.issuer}
            </p>
            <p className="text-center text-sm opacity-80 mt-2">
              Category: {activeCert.category}
            </p>
          </div>
        </div>
      )}

      {/* ===== Call-to-Action ===== */}
      <div className="mt-16 text-center bg-gradient-to-r from-[#0c0463] to-[#210461] text-white py-10 px-6 rounded-xl shadow-xl">
        <h3 className="text-3xl font-extrabold tracking-wide">
          Let’s Build Something Meaningful 🚀
        </h3>

        <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
          If you’re looking for someone who enjoys turning ideas into reliable,
          well-designed products — I’d love to collaborate and make it happen.
        </p>

        <a href="/contact">
          <button className="mt-5 bg-white text-[#183f64] font-semibold px-7 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-transform duration-300 hover:scale-105">
            Let’s Talk →
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;
