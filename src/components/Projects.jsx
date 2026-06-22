import projects from "../data/projects";

import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Projects"
          subtitle="AI, Machine Learning, Data Science and Software Engineering projects."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
