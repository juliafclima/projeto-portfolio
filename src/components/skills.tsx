'use client'
import skillsList from '../data/skills.json';

export default function Skills() {
  return(
    <div className="mb-3 bg-white rounded-xl p-4 sm:p-8">
      <p className="font-bold text-xl mb-5">Habilidades</p>
      <div className="flex flex-col gap-6">
        {skillsList.map((category) => (
          <div key={category.category}>
            <p className="font-semibold mb-3">{category.category}</p>
            <div className="flex flex-wrap gap-4">
              {category.items.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}