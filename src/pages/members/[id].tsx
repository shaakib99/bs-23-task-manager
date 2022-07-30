import Layout from "../../components/layout";
import MemberForm from "./features/form";

const UpdateMember = (props: { isCreating?: boolean }) => {
  return (
    <Layout>
      <div className="w-full flex justify-center mt-3">
        <MemberForm isCreating={props?.isCreating} />
      </div>
    </Layout>
  );
};
export default UpdateMember;
