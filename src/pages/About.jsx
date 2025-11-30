import { skills, education } from "../constants";
import SkillCard from "../components/skills";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
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
    <section className="relative max-w-full mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-screen bg-[#121212] text-[#EAEAEA]">
      {/* Background Accents */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#1A1A2E]/40 blur-[160px] top-0 left-[-200px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#16213E]/40 blur-[160px] bottom-0 right-[-200px]"></div>
      </div>

      {/* Heading */}
      <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins text-center">
        Hello, I am{" "}
        <span className="bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-transparent font-semibold drop-shadow">
          Jayant
        </span>{" "}
        👋
      </h1>

      {/* Introduction */}
      <p className="mt-5 text-lg text-[#EAEAEA]/80 text-center max-w-3xl mx-auto">
        A passionate Software Engineer, full-stack developer, and problem-solver
        with a deep curiosity for technology. I love building innovative
        solutions, exploring new frameworks, and pushing the boundaries of what's
        possible with code.
      </p>

      {/* Skills Section */}
      <div className="py-14">
        <h3 className="font-semibold sm:text-3xl text-xl font-poppins text-center">
          My Skills
        </h3>

        <div className="mt-12 flex flex-col items-center gap-6">
          {splitIntoDecreasingRows(skills).map((row, idx) => (
            <div key={idx} className="flex gap-6 justify-center flex-wrap">
              {row.map((skill, i) => (
                <SkillCard key={i} skill={skill} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Education Timeline */}
      <div className="mt-20">
        <h3 className="font-semibold sm:text-3xl text-xl font-poppins text-center">
          Education
        </h3>

        <div className="mt-12">
          <VerticalTimeline animate={true} lineColor="#00DFD8">
            {education.map((edu, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{
                  background:
                    "linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)",
                  color: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 10px 20px rgba(0, 223, 216, 0.3)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #00DFD8",
                }}
                iconStyle={{ background: "#121212", color: "#fff" }}
                icon={
                  <img
                    src={edu.iconUrl}
                    alt={edu.name}
                    className="w-full h-full object-contain rounded-full p-2"
                  />
                }
              >
                <h3 className="text-xl font-bold">{edu.name}</h3>
                <h4 className="text-lg opacity-80 mt-1">{edu.organization}</h4>

                <p className="mt-2 text-[#00DFD8] font-semibold">{edu.year}</p>
                <p className="text-sm opacity-80 mt-1">{edu.score}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-20 text-center bg-gradient-to-r from-[#230584] to-[#031461] text-white py-10 px-6 rounded-xl shadow-xl">
        <h3 className="text-3xl font-extrabold tracking-wide">
          Have an Idea? Let’s Make It Happen! 🚀
        </h3>
        <p className="mt-3 text-lg max-w-2xl mx-auto opacity-90">
          Whether it's an innovative web app, an AI-powered solution, or
          something revolutionary, let's collaborate and build something
          extraordinary.
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
