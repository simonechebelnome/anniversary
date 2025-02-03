import GODDESS from '../assets/goddess.jpeg'

const Completion = () => {
  return (
    <div
    style={{ backgroundImage: `url(${GODDESS})` }}
    className="flex justify-center items-center py-8 gap-32 bg-cover bg-center h-screen"
  >
      <button className='btn btn-lg bg-red-500 mb-16 text-white'>
        Ottieni Portacuore
      </button>
    </div>
  );
};

export default Completion;
