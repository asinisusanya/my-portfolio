import research from "../data/research";

import SectionTitle from "./SectionTitle";
import ResearchCard from "./ResearchCard";

function Research() {
  return (
    <section id="research" className="py-32 px-4 md:px-6">

      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="Research"
          subtitle="Current and ongoing research contributions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {research.map((item) => (
            <ResearchCard
              key={item.title}
              research={item}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default Research;