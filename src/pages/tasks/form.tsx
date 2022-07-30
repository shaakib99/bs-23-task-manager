import { ITask } from "../../interfaces/task.interface";
import { useForm } from "react-hook-form";
import BtnRegular from "../../components/buttons/button-regular";
import TextField from "../../components/inputs/text-field-regular";
import SelectRegular from "../../components/selects/select-regular";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTask } from "../../hooks/useTask.hook";
import { useMember } from "../../hooks/useMember.hook";

const TaskForm = (props: { isCreating?: boolean }) => {
  const { getTaskById, createTask, updateTaskById, isLoading, tasks } = useTask(
    {}
  );
  const [task, setTask] = useState<ITask | null>(null);
  const { members, getMembers } = useMember({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ITask>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    !members.length && getMembers({});
    getTask();
  }, []);

  useEffect(() => {
    setValue("title", task?.title || "");
    setValue("description", task?.description || "");
    setValue("assignTo", (task?.assignTo as any) || "");
    setValue("title", task?.title || "");
  }, [task]);

  const getTask = async () => {
    if (!props?.isCreating && id) {
      const data = await getTaskById(id);
      setTask(data);
    }
  };
  const onSubmit = async (data: ITask) => {
    let response = null;
    if (!props?.isCreating && id) {
      response = await updateTaskById(id, data);
    } else if (props.isCreating) {
      response = await createTask(data);
    }
    if (response) {
      navigate("/task");
    }
  };

  return (
    <form className="w-1/4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        required
        label="Title"
        placeholder="Ex: John Doe"
        register={register("title", {
          required: true,
          pattern: /^[a-zA-Z0-9]/i,
        })}
      />
      {errors.title?.type === "required" && (
        <p className="text-red-500">title is required</p>
      )}
      {errors.title?.type === "pattern" && (
        <p className="text-red-500">Title address is not valid</p>
      )}
      <TextField
        label="Description"
        placeholder=""
        register={register("description", {
          minLength: 5,
        })}
      />
      {errors.description?.type === "minLength" && (
        <p className="text-red-500">
          Description has to be at least 5 characters
        </p>
      )}
      <SelectRegular
        title="Select a member"
        data={members.map((member) => ({
          label: member.name,
          value: member.id as string,
        }))}
        register={register("assignTo")}
      />
      <BtnRegular type="submit" text="Submit" isLoading={isLoading} />
    </form>
  );
};
export default TaskForm;
