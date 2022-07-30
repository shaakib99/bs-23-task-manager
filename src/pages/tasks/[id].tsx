import Layout from "../../components/layout";
import TaskForm from "./form";

const UpdateTask = (props: { isCreating?: boolean }) => {
  return (
    <Layout>
      <div className="w-full flex justify-center mt-3">
        <TaskForm isCreating = {props?.isCreating} />
      </div>
    </Layout>
  );
};
export default UpdateTask;
