import JeremyPic from "../../assets/images/image-jeremy.png";

const Filter = ({ filterby, onHandleFilter }) => {
  return (
    <div className="bg-dark-blue rounded-xl mx-6 mt-20 lg:mt-6 lg:ml-6 lg:mr-2">
      <div className="px-7 py-8 rounded-xl bg-blue flex gap-x-5 lg:flex-col">
        <img
          src={JeremyPic}
          alt="jeremy robson picture"
          className="rounded-[100%] border-2 border-white w-[4.3rem] self-start lg:w-[5.3rem]"
        />
        <div className="flex flex-col pt-3 text-pale-blue lg:pt-10 lg:pl-1 lg:pb-11">
          <span className="font-rubik text-sm">Report for</span>
          <h1 className="font-rubik text-2xl font-light lg:text-[2.5rem] lg:pt-1 lg:leading-[3rem]">Jeremy Robson</h1>
        </div>
      </div>
      <div className="py-5 pl-9 pr-6 flex justify-between text-[1.1rem] lg:flex-col lg:items-start lg:pl-8 lg:gap-y-3">
        <button
          className={`${filterby === 'daily' ? "text-pale-blue" : "text-white"} leading-8`}
          onClick={() => onHandleFilter("daily")}
        >
          Daily
        </button>
        <button
          className={`${filterby === 'weekly' ? "text-pale-blue" : "text-white"} leading-8`}
          onClick={() => onHandleFilter("weekly")}
        >
          Weekly
        </button>
        <button
          className={`${filterby === 'monthly' ? "text-pale-blue" : "text-white"} leading-8`}
          onClick={() => onHandleFilter("monthly")}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default Filter;
