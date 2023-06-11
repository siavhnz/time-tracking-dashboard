import Filter from "../components/Dashboard/Filter";

const Dashboard = () => {
  return (
    <main className="lg:gird lg:grid-cols-4">
      <div className="lg:row-span-full lg:col-span-1">
        <Filter />
      </div>
      <div>{/* status */}</div>
    </main>
  );
};

export default Dashboard;
