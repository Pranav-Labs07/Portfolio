import projects from "../data/project";
import { useState, useEffect } from "react";

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => {
        if (activeFilter === "dev") return project.category.toLowerCase().includes("full stack") || project.category.toLowerCase().includes("web");
        if (activeFilter === "cloud") return project.category.toLowerCase().includes("aws") || project.category.toLowerCase().includes("ci/cd");
        return true;
      });

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleOpenModal = (project) => {
      document.body.style.overflow = "hidden";
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
      document.body.style.overflow = "auto";
    setSelectedProject(null);
  };

  return (
    <section id="work" className="section-spy py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal-on-scroll">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">
            Projects<span className="text-primary">.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xs text-left md:text-right">
            A combination of business strategy, aesthetic design, and clean code.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap gap-4 mb-16 reveal-on-scroll delay-100"
          id="portfolio-filters"
        >
          <button
            onClick={() => handleFilterChange("all")}
            className={`filter-btn px-5 py-2 rounded-full border text-sm font-bold transition-all hoverable magnetic-btn ${
              activeFilter === "all"
                ? "active border-primary text-primary bg-primary/5"
                : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary"
            }`}
            data-filter="all"
          >
            All
          </button>

          <button
            onClick={() => handleFilterChange("dev")}
            className={`filter-btn px-5 py-2 rounded-full border text-sm font-bold transition-all hoverable magnetic-btn ${
              activeFilter === "dev"
                ? "active border-primary text-primary bg-primary/5"
                : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary"
            }`}
            data-filter="dev"
          >
            Full Stack Development
          </button>

          <button
            onClick={() => handleFilterChange("cloud")}
            className={`filter-btn px-5 py-2 rounded-full border text-sm font-bold transition-all hoverable magnetic-btn ${
              activeFilter === "cloud"
                ? "active border-primary text-primary bg-primary/5"
                : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary"
            }`}
            data-filter="cloud"
          >
            DevOps
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-32" id="projects-grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className={`project-item spotlight-card group cursor-pointer project-trigger hoverable reveal-on-scroll ${
                index % 2 === 1 ? "md:mt-24" : ""
              }`}
              data-filter-category={
                project.category.toLowerCase().includes("full stack") || project.category.toLowerCase().includes("web")
                  ? "dev"
                  : "cloud"
              }
            >
              <div className="spotlight-overlay"></div>

              {/* Project Image Card */}
              <div className="project-card relative w-full aspect-[4/3] bg-slate-200 dark:bg-surface rounded-2xl overflow-hidden mb-6 preserve-3d transition-transform duration-300 shadow-lg group-hover:shadow-xl border border-slate-200 dark:border-white/5">
                <div className="absolute inset-0 overflow-hidden transform-gpu">
                  <img
                    src={project.image}
                    loading="lazy"
                    width="1200"
                    height="900"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 parallax-img"
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex justify-between items-start border-b border-slate-200 dark:border-white/10 pb-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm">• {project.category}</p>
                </div>
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                  <i className="fas fa-plus group-hover:rotate-90 transition-transform"></i>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100]">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity opacity-100 cursor-pointer"
              onClick={handleCloseModal}
            ></div>

            {/* Modal Content */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="bg-white dark:bg-[#111] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl transform scale-100 opacity-100 transition-all duration-300 border border-slate-200 dark:border-white/10 relative">
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  aria-label="Close Modal"
                  className="fixed top-4 right-4 w-10 h-10 bg-white/50 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-slate-900 dark:text-white hover:bg-red-500 hover:text-white transition-colors z-20 hoverable focus:outline-none"
                >
                  <i className="fas fa-times"></i>
                </button>

                {/* Modal Image */}
                <div className="h-64 md:h-96 w-full overflow-hidden">
                  <img
                    src={selectedProject.image}
                    className="w-full h-full object-cover"
                    alt={selectedProject.title}
                  />
                </div>

                {/* Modal Content */}
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div>
                      <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
                        {selectedProject.title}
                      </h2>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      {selectedProject.live && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm hover:scale-105 transition-transform whitespace-nowrap hoverable focus:outline-none"
                        >
                          Visit Website <i className="fas fa-external-link-alt ml-2"></i>
                        </a>
                      )}
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm hover:scale-105 transition-transform whitespace-nowrap hoverable focus:outline-none"
                        >
                          GitHub <i className="fas fa-external-link-alt ml-2"></i>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                        About the Project
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 rounded-full text-xs font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                          Year
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">{selectedProject.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
