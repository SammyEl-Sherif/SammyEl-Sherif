import Link from "next/link";

export interface Project {
  slug: string;
  name: string;
  description: string;
  url: string;
  tags?: string[];
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 transition-all hover:border-foreground/20 hover:bg-foreground/[0.04] ${
        featured ? "md:p-8" : ""
      }`}
    >
      <div className="flex flex-col gap-3">
        <h3
          className={`font-semibold tracking-tight ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {project.name}
        </h3>
        <p
          className={`text-foreground/60 leading-relaxed ${
            featured ? "text-base" : "text-sm"
          }`}
        >
          {project.description}
        </p>
        {project.tags && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-foreground/5 text-foreground/50"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <span className="text-sm text-foreground/40 mt-2 group-hover:text-foreground/60 transition-colors">
          View on GitHub →
        </span>
      </div>
    </Link>
  );
}
