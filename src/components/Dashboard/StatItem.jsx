import { ReactComponent as Ellipsis } from "../../assets/images/icon-ellipsis.svg";

const StatItem = ({ designAttr, title, current, previous }) => {
  return (
    <div
      className={`${designAttr.bg} ${designAttr.icon} bg-no-repeat bg-[right_1rem_top_-0.65rem] rounded-xl rounded-b-2xl pt-9 mb-6 lg:mb-0 lg:pt-11`}
    >
      <div className="bg-dark-blue rounded-xl p-6 lg:p-7 hover:bg-desaturated-blue hover:cursor-pointer transition-all duration-700">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-bold text-lg font-rubik">{title}</h2>
          <Ellipsis aria-hidden={true} focusable={false} />
        </div>

        <div className="flex justify-between items-center lg:flex-col lg:items-start lg:pt-3 ">
          <p className="text-[2rem] text-gray-300 font-light font-rubik lg:text-[3.5rem]">
            {current}hrs
          </p>
          <p className="text-pale-blue font-rubik font-normal text-[0.93rem] lg:-mt-1">
            {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatItem;
