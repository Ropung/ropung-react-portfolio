import { FunctionComponent } from "react";
import LeftNaviList from "./widgets/LeftNaviList";

const LeftNavibar = (props) => {
  const { element } = props;

  return (
    <main className="w-screen h-screen flex flex-row">
      <section className="min-w-[25vw] h-screen bg-dark py-10">
        <LeftNaviList />
      </section>
      <section className="min-w-[75vw] h-screen bg-black">{element}</section>
    </main>
  );
};

export default LeftNavibar;
