import SectionTitle from "./SectionTitle";

function ResearchHighlights() {
  return (
    <section className="py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Research Vision"
          subtitle="Advancing intelligent decision making through AI, optimization and statistical learning."
        />

        <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-10">
          <p className="text-base md:text-xl text-slate-300 leading-relaxed">
            My research focuses on intelligent systems that combine machine
            learning, optimization, reinforcement learning and statistical
            modelling to address high-impact real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResearchHighlights;
