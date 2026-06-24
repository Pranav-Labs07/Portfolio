export default function SkillsSection() {
  return (
 <section
          id="journey"
          className="section-spy py-24 bg-slate-50 dark:bg-[#080808]"
        >
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 text-center reveal-on-scroll">
              Journey<span className="text-primary">.</span>
            </h2>

            <div className="relative border-l border-slate-200 dark:border-white/10 ml-4 md:ml-10 space-y-12">
              <div className="relative pl-8 md:pl-12 group reveal-on-scroll">
                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-primary transition-colors ring-4 ring-transparent group-hover:ring-primary/20"></span>
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    Frontend Developer
                  </h3>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300 w-fit">
                    Jan-2025
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">Tech</p>
                <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                  Designed some Frontend projects without dedication.
                </p>
              </div>

              <div className="relative pl-8 md:pl-12 group reveal-on-scroll delay-100">
                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-primary transition-colors ring-4 ring-transparent group-hover:ring-primary/20"></span>
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    Full-Stack Developer
                  </h3>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300 w-fit">
                    Oct-2025
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">Building Sites </p>
                <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                  Built projects like kuber and RideWithUs which solves real
                  world Problems.
                </p>
              </div>

              <div className="relative pl-8 md:pl-12 group reveal-on-scroll delay-200">
                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-primary transition-colors ring-4 ring-transparent group-hover:ring-primary/20"></span>
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center mb-2">
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    DevOps/ Cloud Engineer{" "}
                  </h3>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300 w-fit">
                    Jan 2026 - Ongoing
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">MCA</p>
                <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                  Specializing in cloud architecture and DevOps practices with
                  hands-on experience in AWS, Docker, Kubernetes, and Jenkins.
                </p>
              </div>
            </div>
          </div>
        </section>
  );
}
