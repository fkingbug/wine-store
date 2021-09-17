import React from "react";
import TabsWine from "../TabsWine";
import WineSearch from "../UI/WineSearch";

import { setWineCategory, setSearch } from "../../store/action/filter";
import { useDispatch, useSelector } from "react-redux";

const categoryWine = ["All", "Red", "White", "Rose", "Sparking", "Dessert"];

const FindWine = () => {
  const dispatch = useDispatch();
  const { category, searchWine } = useSelector((state) => state.filter);

  const getActiveTabs = React.useCallback(
    (item) => {
      dispatch(setWineCategory(item));
    },
    [dispatch]
  );
  const getSearchWine = (item) => {
    dispatch(setSearch(item));
  };
  return (
    <div>
      <WineSearch search={searchWine} setInput={(e) => getSearchWine(e.target.value)} />
      <TabsWine items={categoryWine} tabsActive={category} getActiveTabs={getActiveTabs} />
    </div>
  );
};

export default FindWine;
