import { useState } from "react";
import Filter from "./Filter";
import StatList from "./StatList";

const Board = () => {
  const [filterby, setFilterby] = useState("weekly");

  const handleFilter = (filterby) => {
    setFilterby(filterby);
  };

  return (
    <main className="lg:gird lg:grid-cols-4">
      <div className="lg:row-span-full lg:col-span-1">
        <Filter onHandleFilter={handleFilter} filterby={filterby} />
      </div>
      <div>
        <StatList filterby={filterby} />
      </div>
    </main>
  );
};

export default Board;
