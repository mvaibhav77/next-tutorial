import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Nav />
      <main className="m-4">{children}</main>
    </div>
  );
};

export default Layout;
