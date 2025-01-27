import { IProject } from '@/interfaces';
import projectsList from '../data/projects.json';
import Image from 'next/image';
export default function Projects() {
  return(
    <div className="mb-3 bg-white rounded-xl p-4 sm:p-8">
      <p className="font-bold text-xl mb-5">Projetos</p>
      <div className="grid grid-cols-1 gap-2">
        {
          projectsList.map((project: IProject, index: number) => (
            <div
              className="relative flex flex-col sm:flex-row border sm:border-none border-[#a7c3df] rounded"
              key={index}
            >
              <div className="w-full sm:w-1/2 md:w-1/3 h-38 sm:h-full">
                <Image
                  className="bg-white w-full h-full object-cover"
                  src={'/projects/' + project.title + '.png'}
                  alt={project.title}
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="w-full px-2 sm:px-4 py-2">
                <span className="pt-1 leading-4 mt-1 font-bold">{ project.title }</span>
                <div className="pt-0">
                  {
                    project.deploy !== '' &&
                    <a
                      href={ project.deploy }
                      target="_blank"
                      className="font-bold hover:underline text-sm"
                    >
                      Site
                    </a>
                  }
                  {
                    project.deploy !== '' && project.github !== ''
                    && <span className="px-1">·</span>
                  }
                  {
                    project.github !== '' &&
                    <a
                      href={ project.github }
                      target="_blank"
                      className="font-bold hover:underline text-sm"
                    >
                      Github
                    </a>
                  }
                </div>
                <div className="text-sm">
                  { project.description }
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="w-full flex items-center justify-start mt-5">
        <a
          type="button"
          className="text-gray-500 hover:text-[#0A66C2] transition-colors cursor-pointer duration-400 text-sm"
          href="https://github.com/juliafclima"
          target="_blank"
        >
          Clique aqui para ver mais Projetos
        </a>
      </div>
    </div>
  );
}