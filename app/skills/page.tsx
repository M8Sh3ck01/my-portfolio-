import { Code, Palette, Server, Database, Cpu, Code2 } from 'lucide-react';

export default function SkillsPage() {
  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code className="w-5 h-5" />,
      items: ['Java', 'C', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Frontend Development',
      icon: <Palette className="w-5 h-5" />,
      items: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
      category: 'Backend Development',
      icon: <Server className="w-5 h-5" />,
      items: ['Node.js', 'Java', 'Spring Boot']
    },
    {
      category: 'Database & Cloud',
      icon: <Database className="w-5 h-5" />,
      items: ['SQLite', 'PostgreSQL', 'MongoDB', 'JSON']
    },
    {
      category: 'Systems & Tools',
      icon: <Cpu className="w-5 h-5" />,
      items: ['Git', 'Linux']
    }
  ];

  return (   
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Updated heading with icon */}
      <div className="flex items-center mb-8">
        <div 
          className="p-3 rounded-full mr-4"
          style={{
            backgroundColor: 'var(--accent)',
            color: 'var(--background)'
          }}
        >
          <Code2 className="w-6 h-6" />
        </div>
        <h1 className="text-4xl font-bold">My Skills</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="rounded-lg p-6 hover:-translate-y-1 transition-transform"
            style={{
              border: '1px solid var(--accent)'
            }}
          >
            <div className="flex items-center mb-4">
              <div 
                className="p-2 rounded-full mr-3"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--background)'
                }}
              >
                {skill.icon}
              </div>
              <h2 className="text-xl font-semibold">{skill.category}</h2>
            </div>
            <ul className="space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-center">
                  <span 
                    className="w-2 h-2 rounded-full mr-2"
                    style={{ backgroundColor: 'var(--accent)' }}
                  ></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}