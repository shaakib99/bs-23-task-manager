import { Link } from "react-router-dom";
import { IMember } from "../../../interfaces/member.interface";

const Member = (props: IMember) => {
  return (
    <div className="w-56 bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900">{props.name}</h5>
        <span className="text-sm text-gray-500">
          {props?.email || "Email was not provided"}
        </span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <Link
            to={`${props?.id}`}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Member;
