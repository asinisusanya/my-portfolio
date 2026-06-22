import { motion } from "framer-motion";

function ResearchCard({ research }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10"
    >
      <img
        src={research.image}
        alt={research.title}
        className="h-40 md:h-56 w-full object-cover"
      />

      <div className="p-5 md:p-7">

        <div className="flex justify-between items-center mb-4">

          <span className="text-primary text-sm">
            {research.status}
          </span>

        </div>

        <h3 className="text-lg md:text-xl font-bold mb-3">
          {research.title}
        </h3>

        <p className="text-slate-400">
          {research.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {research.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/5 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

    </motion.div>
  );
}

export default ResearchCard;