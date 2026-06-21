import education from "../data/education";
import SectionTitle from "./SectionTitle";

function Education() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Education"
          subtitle="Academic foundation in statistics, operations research and AI."
        />

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <h3 className="text-3xl font-bold">{education.university}</h3>

          <p className="mt-4 text-slate-300">{education.degree}</p>

          <div className="flex flex-wrap gap-8 mt-8">
            <div>
              <div className="text-slate-400 text-sm">CGPA</div>

              <div className="text-primary text-2xl font-bold">
                {education.cgpa}
              </div>
            </div>

            <div>
              <div className="text-slate-400 text-sm">Duration</div>

              <div className="text-2xl font-bold">{education.duration}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {education.focus.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
