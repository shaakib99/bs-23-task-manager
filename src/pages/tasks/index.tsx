import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BtnRegular from "../../components/buttons/button-regular";
import Layout from "../../components/layout";
import { useTask } from "../../hooks/useTask.hook";
import Task from "./features/task";

const Tasks = (props: any) => {
  const { tasks, getTasks, isLoading } = useTask({});
  const navigate = useNavigate();

  useEffect(() => {
    !tasks.length && getTasks({});
  }, []);

  return (
    <Layout>
      <div className="p-5">
        <div className="m-2 border-b-2 flex justify-end">
          <BtnRegular
            type="button"
            text="Add"
            onPress={() => navigate("add")}
          />
        </div>
        <div className="flex flex-wrap justify-center">
          {tasks.map((task) => (
            <div className="m-2">
              <Task {...task} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          {isLoading ? "Loading..." : ""}
        </div>
      </div>
    </Layout>
  );
};
export default Tasks;
