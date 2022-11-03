import React from "react";
import { Link } from "react-router-dom";

const LeftNaviList = () => {
  const GitHubUrl = "https://github.com/Ropung";
  const VeLogUrl = "https://velog.io/@nogi5676";

  return (
    <aside className="w-full h-full flex flex-col items-start justify-start">
      <div className="w-full flex flex-col flex-auto gap-6 justify-start text-white text-2xl px-10">
        <Link to={"/"} className="cursor-pointer">
          HOME.
        </Link>
        <Link to={"/info"} className="cursor-pointer">
          INFO.
        </Link>
        <Link to={"/project"} className="cursor-pointer">
          SIDE PROJECT.
        </Link>
        <div className="cursor-pointer" onClick={() => window.open(GitHubUrl)}>
          GitHub.
        </div>
        <div className="cursor-pointer" onClick={() => window.open(VeLogUrl)}>
          VELOG.
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 px-8 text-gray-400 text-base whitespace-nowrap">
        <div>
          email: <a href="mailto:563710@naver.com">563710@naver.com</a>
        </div>
        <div>
          tel : <a href="tel:010-9593-5676">010-9593-5676</a>
        </div>
      </div>
    </aside>
  );
};

export default LeftNaviList;
