import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

function About() {
  const topics = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Optimization",
    "Software Engineering",
    "Deep Learning",
    "Graph Neural Networks",
    "Reinforcement Learning",
    "Agentic AI",
    "LLMs",
    "Explainable AI",
    "Simulation"
  ];

  return (
    <section id="about" className="py-32 px-4 md:px-6">

      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="About"
          subtitle="Bridging Statistics, Optimization and Artificial Intelligence."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-10"
        >
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Statistics and Operations Research undergraduate with strong
            foundations in Artificial Intelligence, Machine Learning,
            Data Science, Optimization and Software Engineering.
            Passionate about developing intelligent systems that solve
            real-world problems through rigorous research and innovation.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default About;