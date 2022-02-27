import Dashboard from "../components/Home/Dashboard";
import HomePage from "../components/Home/HomePage";

const Home = () => {
  const userId = localStorage.getItem("userId");
  return (
    <div className='centered'>
      {userId ? <Dashboard /> : <HomePage />}
    </div>
  );
};

export default Home;