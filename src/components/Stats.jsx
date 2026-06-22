import { motion } from "framer-motion";

const stats = [
  {
    value: "15+",
    label: "Projects Completed",
  },

  {
    value: "3",
    label: "Research Projects",
  },

  {
    value: "3.945",
    label: "CGPA",
  },

  {
    value: "7+",
    label: "Awards & Achievements",
  },
];

function Stats() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{
                y: -8,
              }}
              className="rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 p-4 md:p-8 text-center backdrop-blur-xl"
            >
              <h3 className="text-2xl md:text-5xl font-black text-primary">{stat.value}</h3>

              <p className="text-xs md:text-base text-slate-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
