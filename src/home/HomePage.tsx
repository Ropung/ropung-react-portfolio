import GNB from "@/common/navi/GNB";
import { Link } from "react-router-dom";
import HomeMain from "./widgets/HomeMain";

const HomePage = () => {
  const GitHubUrl = "https://github.com/Ropung";
  const VeLogUrl = "https://velog.io/@nogi5676";

  return (
    <>
      <GNB />
      <main className="w-screen h-screen pt-24">
        <HomeMain />
        <HomeMain />
        <HomeMain />
      </main>
    </>
  );
};

export default HomePage;
