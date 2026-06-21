import leadership from "../data/leadership";
import SectionTitle from "./SectionTitle";

function Leadership() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Leadership & Volunteering"
          subtitle="Community engagement and leadership experience."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {leadership.map((item) => (
            <div
              key={item.role + item.organization}
              className="rounded-3xl bg-white/5 border border-white/10 p-8"
            >
              <h3 className="font-bold text-xl">{item.role}</h3>

              <p className="text-primary mt-2">{item.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
