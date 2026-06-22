import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

import profile from "../data/profile";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full" />

        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-secondary/20 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[0.3em] text-primary mb-6 mt-20"
        >
          AI Research Portfolio
        </motion.p> */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            lg:text-9xl
            font-black
            tracking-tight
            leading-none
            md:mt-32
            mt-24
          "
        >
          ASINI SUSANYA
          <br />
          KARUNARATHNA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {profile.title.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-slate-300 px-2"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a
            href="#research"
            className="px-5 md:px-7 py-3 md:py-4 text-sm md:text-base rounded-xl bg-primary hover:scale-105 transition flex items-center gap-2"
          >
            View Research
            <ArrowRight size={16} />
          </a>

          <a
            href="#projects"
            className="px-5 md:px-7 py-3 md:py-4 text-sm md:text-base rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            View Projects
          </a>

          <a
            href="/docs/resume.pdf"
            className="px-5 md:px-7 py-3 md:py-4 text-sm md:text-base rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        <div className="flex justify-center gap-5 mt-12">
          <a href={profile.github}>
            <Github />
          </a>

          <a href={profile.linkedin}>
            <Linkedin />
          </a>

          <a href={`mailto:${profile.email}`}>
            <Mail />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
