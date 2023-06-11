import JeremyPic from "../../assets/images/image-jeremy.png";

const Filter = () => {
  return (
    <div className="bg-dark-blue rounded-xl mx-6 mt-20">
      <div className="px-7 py-8 rounded-xl bg-blue flex gap-x-5">
        <img
          src={JeremyPic}
          alt="jeremy robson picture"
          className="rounded-[100%] border-2 border-white w-[4.3rem] self-start"
        />
        <div className="flex flex-col pt-3 text-pale-blue">
          <span className="font-rubik text-sm">Report for</span>
          <p className="font-rubik text-2xl font-light">Jeremy Robson</p>
        </div>
      </div>
      <div className="py-5 pl-9 pr-6 flex justify-between text-[1.1rem]">
        <button className="text-pale-blue leading-8">Daily</button>
        <button className="text-white leading-8">Weekly</button>
        <button className="text-pale-blue leading-8">Monthly</button>
      </div>
    </div>
  );
};

export default Filter;
