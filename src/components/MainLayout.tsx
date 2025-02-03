import EMBLEM from "../assets/emblem.jpg";
import POOP from '../assets/poop.png'
import { useCount } from "../contexts/CountContext";
import { useLinkClickHandler, useNavigate } from "react-router-dom";
import { Paths } from "../enum";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { count, setCount } = useCount();
  const navigate = useNavigate()

  const handleRedirect = () => {
    setCount(0);
    navigate(Paths.DASHBOARD)
  }

  return (
    <div className="flex flex-col">
      {/* Emblemi */}
      <section className="p-4 w-full bg-gray-800 flex items-center justify-between">
        <img src={POOP} className="w-12 h-12 cursor-pointer" onClick={handleRedirect} />
        <div className="flex items-center gap-4 w-max">
          <p className="text-xl text-white font-bold">{count}</p>
          <img src={EMBLEM} className="w-12 h-12" alt="" />
        </div>
      </section>

      {/* Body */}
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default MainLayout;
