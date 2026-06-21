function BackgroundEffects() {
  return (
    <>
      <div className="fixed inset-0 -z-50 overflow-hidden">

        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-blob" />

        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-blob"
          style={{ animationDelay: "3s" }}
        />

        <div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl animate-blob"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div className="fixed inset-0 -z-40 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </>
  );
}

export default BackgroundEffects;