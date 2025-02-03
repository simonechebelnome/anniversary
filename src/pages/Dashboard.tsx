import BATH from "../assets/bath.jpg";
import TITLE from "../assets/text.png";
import { useNavigate } from "react-router-dom";
import { Paths } from "../enum";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${Paths.FORM}/0`)
  }

  return (
    <div
      style={{ backgroundImage: `url(${BATH})` }}
      className="flex flex-col justify-start gap-32 bg-cover bg-center h-screen"
    >
      <div className="p-4 bg-gray-700 flex justify-center">
        <img src={TITLE} alt="" />
      </div>
      <div className="flex justify-center">
      <button onClick={handleNavigate} className="mt-99 w-2/3 rounded-lg btn btn-xl btn-primary">Entra</button>
      </div>
    </div>
  );
};

export default Dashboard;
