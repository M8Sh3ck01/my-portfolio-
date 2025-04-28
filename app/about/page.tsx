import { User, Code2, Goal, Briefcase } from 'lucide-react';

export default function About() {
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
          <User className="w-5 h-5" />
        </div>
        <h1 className="text-4xl font-bold">About Me</h1>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 pt-1">
            <span 
              className="w-2 h-2 rounded-full mt-2"
              style={{ backgroundColor: 'var(--accent)' }}
            ></span>
          </div>
          <p className="text-lg">
  <strong className="text-xl">I</strong>'m Misheck Champopa, a 22-year-old aspiring software developer and ICT student at Mzuzu University. My goal is to continue improving my skills and working on projects that utilize the latest technologies and AI tools.
</p>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 pt-1">
            <span 
              className="w-2 h-2 rounded-full mt-2"
              style={{ backgroundColor: 'var(--accent)' }}
            ></span>
          </div>
          <p className="text-lg">
            I specialize in <strong>JavaScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>,
            but I'm also gaining experience with <strong>Vue.js</strong> and exploring mobile development.
          </p>
        </div>

        <div className="rounded-lg p-6" style={{ border: '1px solid var(--accent)' }}>
          <div className="flex items-center mb-4">
            <div 
              className="p-2 rounded-full mr-3"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--background)'
              }}
            >
              <Briefcase className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-semibold">Some of my Projects</h2>
          </div>
          <ul className="space-y-2">
            {[
              "Portfolio Website with Next.js and Tailwind CSS",
              "Inventory System in Java + JavaFX",
              "Calculator App for JavaFX practice"
            ].map((project, index) => (
              <li key={index} className="flex items-center">
                <span 
                  className="w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor: 'var(--accent)' }}
                ></span>
                {project}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 pt-1">
            <span 
              className="w-2 h-2 rounded-full mt-2"
              style={{ backgroundColor: 'var(--accent)' }}
            ></span>
          </div>
          <p className="text-lg">
            My focus is on building practical applications that solve real problems while refining my skills with AI tools.
          </p>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 pt-1">
            <span 
              className="w-2 h-2 rounded-full mt-2"
              style={{ backgroundColor: 'var(--accent)' }}
            ></span>
          </div>
          <p className="text-lg">
            Explore my work in the <a href="/projects" className="underline text-[#4ECDC4]"><strong>projects section</strong></a>.
          </p>
        </div>
      </div>
    </div>
  );
}