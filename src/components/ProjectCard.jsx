import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="rounded-3xl overflow-hidden bg-white/5 border border-white/10"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 md:h-56 object-cover"
      />

      <div className="p-5 md:p-7">

        <h3 className="text-lg md:text-xl font-bold">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 mt-5">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-primary/10 text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        {project.features && (
          <ul className="mt-5 text-slate-400 space-y-2">
            {project.features.map((feature) => (
              <li key={feature}>
                • {feature}
              </li>
            ))}
          </ul>
        )}

        {project.achievement && (
          <div className="mt-5 text-primary font-semibold">
            {project.achievement}
          </div>
        )}

        <div className="flex gap-4 mt-6">

          <a href={project.github}>
            <Github />
          </a>

          <a href="#">
            <ExternalLink />
          </a>

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;