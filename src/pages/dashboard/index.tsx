import { Link } from "react-router-dom";
import Layout from "../../components/layout";

const Home = (props: any) => {
  return (
    <Layout>
      <div className="p-5 flex">
        <div className="m-5 w-72 rounded h-44 bg-gradient-to-r from-cyan-500 to-blue-500">
          <h2 className="text-4xl text-white font-bold m-8">Tasks</h2>
          <Link
            to="/task"
            className="mx-5 relative inline-flex items-center px-8 py-1 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-white group"
          >
            <span className="relative">View</span>
          </Link>
        </div>
        <div className="m-5 w-72 rounded h-44 bg-gradient-to-r from-cyan-500 to-sky-500">
          <h2 className="text-4xl text-white font-bold m-8">Members</h2>
          <Link
            to="/member"
            className="mx-5 relative inline-flex items-center px-8 py-1 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-white group"
          >
            <span className="relative">View</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
