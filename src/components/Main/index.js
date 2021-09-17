import Header from "../Header";
import FindWine from "../FindWine";
import WineItems from "../WineItems";

import cl from "./Main.module.scss";

const Main = () => {
  return (
    <div className={cl.main}>
      <Header />
      <FindWine />
      <WineItems />
    </div>
  );
};

export default Main;
