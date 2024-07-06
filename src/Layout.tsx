import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-10  min-h-screen">
      <Sidebar />
      <main className="col-span-8">{children}</main>
    </div>
  );
};
export default Layout;
