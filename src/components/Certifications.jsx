import certifications from "../data/certifications";
import SectionTitle from "./SectionTitle";

function Certifications() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Certifications"
          subtitle="Professional and technical certifications."
        />

        <div className="space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="rounded-2xl bg-white/5 border border-white/10 p-6"
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
