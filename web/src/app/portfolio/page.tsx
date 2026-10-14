import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Portfolio | Sammy El-Sherif",
  description: "A collection of projects by Sammy El-Sherif",
};

export default function Portfolio() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Portfolio
          </h1>
          <p className="text-lg text-foreground/60 leading-relaxed">
            A collection of projects I&apos;ve worked on, from prototyping tools to
            AI-powered applications.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
