import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-14 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>

      {subtitle && (
        <p className="text-slate-400 mt-4 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}

export default SectionTitle;
