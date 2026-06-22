import skills from "../data/skills";
import SectionTitle from "./SectionTitle";

function Skills() {
  const groups = [
    ["Programming", skills.programming],
    ["AI & Machine Learning", skills.ai],
    ["Frameworks", skills.frameworks],
    ["Data Science", skills.dataScience],
    ["Optimization", skills.optimization],
    ["Databases", skills.databases],
  ];

  return (
    <section id="skills" className="py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Skills"
          subtitle="Technical expertise across AI, ML, optimization and software engineering."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {groups.map(([title, list]) => (
            <div
              key={title}
              className="rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8"
            >
              <h3 className="text-xl font-bold mb-6">{title}</h3>

              <div className="flex flex-wrap gap-3">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-full bg-primary/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
