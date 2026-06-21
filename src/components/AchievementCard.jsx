import { Trophy } from "lucide-react";

function AchievementCard({ achievement }) {
  return (
    <div className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:-translate-y-2 transition">
      <Trophy className="text-primary mb-4" />

      <p>{achievement}</p>
    </div>
  );
}

export default AchievementCard;
