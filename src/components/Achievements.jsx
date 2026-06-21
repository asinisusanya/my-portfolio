import achievements from "../data/achievements";

import SectionTitle from "./SectionTitle";
import AchievementCard from "./AchievementCard";

function Achievements() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Achievements"
          subtitle="Awards, competitions and academic excellence."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <AchievementCard key={item} achievement={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
