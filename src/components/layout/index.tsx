import { useEffect } from "react";
import { localStorageKeys } from "../../common/mock/storage-keys.mock";
import { useUser } from "../../hooks/useUser.hook";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = (props: any) => {
  const { saveUser } = useUser({});
  useEffect(() => {
    const userInfo = localStorage.getItem(localStorageKeys.USER);
    if (userInfo) saveUser(JSON.parse(userInfo));
  }, []);
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "70vh" }}>{props.children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
