import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

// TODO - Work on colors a bit
// Also make a custom scrollbar for this page
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Create Fabric",
      description: "Building Tools and Aesthetic Technology",
      link: "https://modrinth.com/mod/create-fabric",
      tags: ["Fabric Mod"],
    },
    {
      id: 2,
      title: "Create Steam n' Rails",
      description: "Adding depth to Create's rail network & steam system",
      link: "https://modrinth.com/mod/create-steam-n-rails",
      tags: ["Fabric/NeoForge Mod"],
    },
    {
      id: 3,
      title: "Quark",
      description:
        "A Quark is a very small thing. This mod is a collection of small things...",
      link: "https://modrinth.com/mod/quark",
      tags: ["Forge Mod"],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-4 py-16">
      <div className="container max-w-5xl">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mb-12 text-secondary">
          A collection of my recent Minecraft mods and other projects
        </p>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="hover:border-elementBorderHover group relative overflow-hidden rounded-lg border border-elementBorder bg-element p-6 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-elementHover hover:shadow-lg"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-secondary">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-elementAccent px-3 py-1 text-sm font-medium text-background shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                className="absolute inset-0 flex items-center justify-end p-6 opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <span className="rounded-full bg-elementAccent px-6 py-2 text-background shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-elementAccentHover hover:shadow-lg active:translate-y-0 active:shadow">
                  View Project →
                </span>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="perspective-1000 preserve-3d inline-flex items-center gap-2 rounded-full bg-elementAccent px-8 py-3 text-lg font-medium text-background shadow-lg transition-all duration-150 ease-out will-change-transform hover:scale-[1.02] hover:bg-elementAccentHover hover:shadow-xl active:translate-y-0.5 active:scale-95 active:bg-elementAccentHover active:shadow-md"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
