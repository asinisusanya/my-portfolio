import certifications from "../data/certifications";
import SectionTitle from "./SectionTitle";

function Certifications() {
  return (
    <section className="py-32 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Certifications"
          subtitle="Professional and technical certifications."
        />

        <div className="space-y-3 md:space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="rounded-xl md:rounded-2xl bg-white/5 border border-white/10 p-4 md:p-6 text-sm md:text-base"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
