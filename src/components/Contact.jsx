import { Github, Linkedin, Mail } from "lucide-react";

import profile from "../data/profile";
import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Get In Touch"
          subtitle="Open to research collaborations, internships and AI opportunities."
        />

        <div className="rounded-3xl bg-white/5 border border-white/10 p-10 text-center">
          <h3 className="text-3xl font-bold">
            Let's Build Something Intelligent
          </h3>

          <p className="mt-4 text-slate-400">
            Interested in AI research, machine learning, optimization or data
            science collaborations?
          </p>

          <div className="flex justify-center gap-8 mt-10">
            <a href={`mailto:${profile.email}`}>
              <Mail size={28} />
            </a>

            <a href={profile.github}>
              <Github size={28} />
            </a>

            <a href={profile.linkedin}>
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
