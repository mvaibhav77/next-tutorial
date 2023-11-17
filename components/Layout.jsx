import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Nav />
      <h1 className="text-5xl text-center my-12">Welcome to Next.js</h1>
      <main className="m-4">{children}</main>
    </div>
  );
};

export default Layout;
