import leadership from "../data/leadership";
import SectionTitle from "./SectionTitle";

function Leadership() {
  return (
    <section className="py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Leadership & Volunteering"
          subtitle="Community engagement and leadership experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {leadership.map((item) => (
            <div
              key={item.role + item.organization}
              className="rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8"
            >
              <h3 className="font-bold text-lg md:text-xl">{item.role}</h3>

              <p className="text-primary text-sm md:text-base mt-2">{item.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
