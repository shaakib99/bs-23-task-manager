import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BtnRegular from "../../components/buttons/button-regular";
import Layout from "../../components/layout";
import { useMember } from "../../hooks/useMember.hook";
import Member from "./member";

const Members = (props: {}) => {
  const { getMembers, members, isLoading } = useMember({});
  const navigate = useNavigate();

  useEffect(() => {
    !members.length && getMembers({});
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
          {members.map((member) => (
            <div className="m-2">
              <Member {...member} />
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
export default Members;
