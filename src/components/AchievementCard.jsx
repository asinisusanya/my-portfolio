import { Trophy } from "lucide-react";

function AchievementCard({ achievement }) {
  return (
    <div className="rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 p-5 md:p-6 hover:-translate-y-2 transition">
      <Trophy className="text-primary mb-3 md:mb-4 w-5 h-5 md:w-6 md:h-6" />

      <p className="text-sm md:text-base">{achievement}</p>
    </div>
  );
}

export default AchievementCard;
