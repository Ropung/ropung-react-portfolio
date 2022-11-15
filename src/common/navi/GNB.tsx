import { Link } from "react-router-dom";

const GNB = () => {
  return (
    <header className="fixed right-0 left-0 top-0 w-screen h-24 flex items-center px-8 bg-opacity-60 bg-white border-b justify-between">
      <div className="font-bold cursor-pointer text-4xl">Ropung</div>
      <div className="flex flex-row gap-8 text-2xl">
        <Link to={"/"} className="cursor-pointer">
          Main
        </Link>
        <Link to={"/about"} className="cursor-pointer">
          About
        </Link>
        <Link to={"/project"} className="cursor-pointer">
          Project
        </Link>
      </div>
    </header>
  );
};

export default GNB;
