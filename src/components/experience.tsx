'use client'
import { IJob } from '@/interfaces';
import experienceList from '../data/experience.json';
import JobItem from './jobItem';
import { useState } from 'react';
export default function Experience() {
  const [showMoreData, setShowMoreData] = useState(false);
  return(
    <div className="mb-3 bg-white rounded-xl p-4 sm:p-8">
      <p className="font-bold text-xl mb-5">Experiência</p>
      <div className="mb-2">
        <div>

          {
            showMoreData
            ? experienceList.map((job: IJob, index: number) => (
              <JobItem item={job} key={index} index={index} />
            ))
            : <div>
                <JobItem item={experienceList[0]} index={0} />
                <JobItem item={experienceList[1]} index={1} />
              </div>
          }
        </div>
        <div className="w-full flex items-center justify-start">
          <button
            type="button"
            className="text-gray-500 hover:text-[#0A66C2] transition-colors cursor-pointer duration-400 text-sm"
            onClick={ () => { setShowMoreData(!showMoreData) } }
          >
            { !showMoreData && 'Clique aqui para ver todas as Experiências'}
          </button>
        </div>
      </div>

    </div>
  );
}