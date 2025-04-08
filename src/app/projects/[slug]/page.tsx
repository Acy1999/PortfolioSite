import { notFound } from "next/navigation";
import { projects } from "@/app/data";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
// Define the correct type for the params
type ProjectPageParams = {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// This is the recommended pattern for handling dynamic route parameters
export default async function ProjectPage({ params }: ProjectPageParams) {
  // Properly await the params object
  const { slug } = await params;

  // Find the project with the matching slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main>
      <Navbar />

      <div className="dark:bg-gray-900 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-emerald-500 sm:text-balance sm:text-5xl">
              {project.title}
            </p>
            <p className="mt-6 text-lg/8 dark:text-gray-300 text-slate-800">
              {project.description}
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              src={project.image}
              alt={project.description}
              width={2432}
              height={1442}
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 dark:ring-white/10 ring-gray-900"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t dark:from-gray-900 from-white pt-[7%]" />
            </div>

            {/* You can add more fields like tech stack, screenshots, etc. */}
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className="mx-auto mb-6 max-w-3xl">
            <div className="border-b border-gray-200 pb-5">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                {project.bodyheader}
              </h2>
            </div>
            {project.bodyCopy.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed mb-4 dark:text-white pt-2"
              >
                {paragraph}
              </p>
            ))}
            <h2 className="text-xl font-bold dark:text-white text-gray-800 mt-10 mb-4">
              Technologies Used:
            </h2>

            <div className="flex flex-wrap gap-2 mt-6 pb-6">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-br from-emerald-500 to-emerald-400 text-white text-sm px-4 py-1 rounded-full shadow-sm font-medium tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Separate async function to handle data fetching
async function getProject(slug: string) {
  // In a real app, this might be a database query
  // For now, we'll just find the project in our static data
  return projects.find((p) => p.slug === slug);
}
