function ExperienceCard({ item }) {
  return (
    <div className="relative border-l-2 border-primary pl-8">
      <div className="absolute w-4 h-4 rounded-full bg-primary -left-[9px] top-1" />

      <h3 className="text-2xl font-bold">{item.role}</h3>

      <p className="text-primary mt-1">{item.company}</p>

      <p className="text-slate-400 mt-2">{item.duration}</p>

      <ul className="mt-4 space-y-2 text-slate-300">
        {item.responsibilities.map((task) => (
          <li key={task}>• {task}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
