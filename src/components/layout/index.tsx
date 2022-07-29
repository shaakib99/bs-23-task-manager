import Footer from "./footer";
import Navbar from "./navbar";

const Layout = (props: any) => {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "70vh" }}>{props.children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
