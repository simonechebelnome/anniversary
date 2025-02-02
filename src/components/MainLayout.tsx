import EMBLEM from "../assets/emblem.jpg";
import { useCount } from "../contexts/CountContext";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { count } = useCount();

  return (
    <div className="flex flex-col gap-4">
      {/* Emblemi */}
      <section className="p-4 w-full bg-gray-800 flex justify-end">
        <div className="flex items-center gap-4 w-max">
          <p className="text-xl text-white font-bold">{count}</p>
          <img src={EMBLEM} className="w-12 h-12" alt="" />
        </div>
      </section>

      {/* Body */}
      <div className="flex flex-col gap-4 mx-8">{children}</div>
    </div>
  );
};

export default MainLayout;
