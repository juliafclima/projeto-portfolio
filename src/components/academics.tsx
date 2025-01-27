import { ICourse } from "@/interfaces";
import academicsList from "../data/academics.json";
import CourseItem from "./courseItem";
export default function Academics() {
  return (
    <div className="mb-3 bg-white rounded-xl p-4 sm:p-8">
      <p className="font-bold text-xl mb-5">Formação</p>
      <div className="mb-2">
        <div>
          {academicsList.map((job: ICourse, index: number) => (
            <CourseItem item={job} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
