import data from "../../data.json";
import StatItem from "./StatItem";
import { design } from "./design";

const StatList = ({ filterby }) => {
  let prevLabel = "Last Day - ";

  if (filterby === "weekly") {
    prevLabel = "Last Week - ";
  } else if (filterby === "monthly") {
    prevLabel = "Last Month - ";
  }

  return (
    <div className="mx-6 pt-6 lg:mx-5 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
      {data.map((item, index) => {
        return (
          <StatItem
            designAttr={design(item.title)}
            key={index}
            title={item.title}
            current={item.timeframes[filterby].current}
            previous={`${prevLabel} ${item.timeframes[filterby].previous}`}
          />
        );
      })}
    </div>
  );
};

export default StatList;
