import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import BtnRegular from "../../../components/buttons/button-regular";
import TextField from "../../../components/inputs/text-field-regular";
import { useMember } from "../../../hooks/useMember.hook";
import { IMember } from "../../../interfaces/member.interface";

const MemberForm = (props: { isCreating?: boolean }) => {
  const [member, setMember] = useState<IMember | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IMember>();
  const navigate = useNavigate();
  const { getMemberById, updateMemberById, createMember, isLoading } =
    useMember({});
  const { id } = useParams();

  useEffect(() => {
    getMember();
  }, []);

  useEffect(() => {
    setValue("email", member?.email);
    setValue("name", member?.name || "");
  }, [member]);

  const getMember = async () => {
    if (!props?.isCreating && id) {
      const data = await getMemberById(id);
      setMember(data);
    }
  };
  const onSubmit = async (data: IMember) => {
    let response = null;
    if (!props?.isCreating && id) {
      response = await updateMemberById(id, data);
    } else if (props.isCreating) {
      response = await createMember(data);
    }
    if (response) {
      navigate("/member");
    }
  };
  return (
    <form className="w-1/4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        required
        label="Name"
        placeholder="Ex: John Doe"
        register={register("name", {
          required: true,
          pattern: /^[a-zA-Z]/i,
        })}
      />
      {errors.name?.type === "required" && (
        <p className="text-red-500">Name is required</p>
      )}
      {errors.name?.type === "pattern" && (
        <p className="text-red-500">Name address is not valid</p>
      )}
      <TextField
        label="Email"
        placeholder="Ex: abc@gmail.com"
        register={register("email", {
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      {errors.email?.type === "required" && (
        <p className="text-red-500">Email is required</p>
      )}
      {errors.email?.type === "pattern" && (
        <p className="text-red-500">Email address is not valid</p>
      )}
      <BtnRegular type="submit" text="Submit" isLoading={isLoading} />
    </form>
  );
};
export default MemberForm;
