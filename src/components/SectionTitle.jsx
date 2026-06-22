import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-10 md:mb-14 text-center px-4"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>

      {subtitle && (
        <p className="text-slate-400 mt-3 md:mt-4 max-w-3xl mx-auto text-sm md:text-base">{subtitle}</p>
      )}
    </motion.div>
  );
}

export default SectionTitle;
