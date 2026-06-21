import experience from "../data/experience";

import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Experience"
          subtitle="Professional and industry experience."
        />

        <div className="space-y-16">
          {experience.map((item) => (
            <ExperienceCard key={item.role} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
