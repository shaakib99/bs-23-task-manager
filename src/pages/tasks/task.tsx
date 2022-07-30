import { Link } from "react-router-dom";
import { ITask } from "../../interfaces/task.interface";

const Task = (props: ITask) => {
  return (
    <Link
      to={`${props?.id}`}
      className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {props.title}
      </h5>
      <p className="m-1 font-normal text-gray-700 dark:text-gray-400">
        {props?.description || "Description was not provided"}
      </p>
    </Link>
  );
};
export default Task;
