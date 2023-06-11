import { useState } from "react";
import Filter from "./Filter";
import StatList from "./StatList";

const Board = () => {
  const [filterby, setFilterby] = useState("weekly");

  const handleFilter = (filterby) => {
    setFilterby(filterby);
  };

  return (
    <main className="lg:grid lg:grid-cols-4 mr-auto ml-auto max-w-screen-sxl">
      <div className="lg:row-span-full lg:col-span-1">
        <Filter onHandleFilter={handleFilter} filterby={filterby} />
      </div>
      <div className="lg:row-span-1 lg:col-start-2 lg:col-end-5">
        <StatList filterby={filterby} />
      </div>
    </main>
  );
};

export default Board;
