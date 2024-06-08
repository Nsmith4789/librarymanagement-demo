import React from 'react';

export default function ProjectsPage() {
  const projects = [
    {
      name: 'Project 1',
      githubLink: 'https://nsmith4789.github.io/capstone-project2024/',
    },
    {
      name: 'Project 2',
      githubLink: 'https://nsmith4789.github.io/capstone-project-fed-2/',
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl px-8 py-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Projects Page</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.name} className="mb-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}