import { Outlet } from "react-router";
import FindUs from "../components/FindUs/FindUs";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const HomeLayout = () => {
  return (
    <div>
      <h1>Home laout</h1>
      <header>
        <Header />
      </header>
      <section className="w-11/12 mx-auto">
        <LatestNews />
      </section>

      <nav className="w-11/12 mx-auto">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">
        <aside className="left col-span-3 ">
          <LeftNav />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightNav />
          <FindUs />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
