import { FolderGit2, GitBranch } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
}

const projects: Project[] = [
  {
    title: "Inventory Management System",
    description: "A desktop system to manage stock levels, view reports, and monitor inventory performance.",
    tech: ["Java", "JavaFX", "MySQL"],
    github: "https://github.com/M8Sh3ck01",
  },
  {
    title: "Portfolio Website",
    description: "A personal website to showcase my skills, projects, and contact info.",
    tech: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/M8Sh3ck01",
  },
  {
    title: "Simple Calculator App",
    description: "A basic calculator built for practicing Java GUI concepts.",
    tech: ["Java", "JavaFX"],
    github: "https://github.com/M8Sh3ck01/basic-calculator",
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-8">
        <div 
          className="p-2 rounded-full"
          style={{
            backgroundColor: 'var(--accent)',
            color: 'var(--background)'
          }}
        >
          <FolderGit2 className="w-5 h-5" />
        </div>
        <h1 className="text-4xl font-bold">My Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg p-6 hover:-translate-y-1 transition-transform"
            style={{
              border: '1px solid var(--accent)'
            }}
          >
            <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
            <p className="mb-4 text-gray-300">{project.description}</p>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2 flex items-center">
                <span 
                  className="w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor: 'var(--accent)' }}
                ></span>
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'var(--background)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm mt-2">

                <GitBranch className="w-4 h-4 mr-1 text-[#4ECDC4]" />
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}