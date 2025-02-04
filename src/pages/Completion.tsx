import GODDESS from '../assets/goddess.jpeg'
import REWARD from '../assets/sounds/reward.mp3'
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import ConfettiExplosion from 'react-confetti-explosion';
import { useCount } from '../contexts/CountContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../enum';


const Completion = () => {
  const { load } = useGlobalAudioPlayer();
  const [ isExploding, setIsExploding] = useState<boolean>(false);
  const { setCount} = useCount();
  const navigate = useNavigate();

  const handleCompletion = () => {
    load(REWARD, {
      autoplay: true,
      initialVolume: 0.4
    });

    setCount(0);
    setIsExploding(true);
    
    setTimeout(() => {
      navigate(Paths.DASHBOARD)
    }, 5000)
  };


  return (
    <div
    style={{ backgroundImage: `url(${GODDESS})` }}
    className="flex justify-center items-center py-8 gap-32 bg-cover bg-center h-screen"
  >

      {isExploding ? <ConfettiExplosion particleCount={250} width={1600} force={0.8}/> : (
          <button onClick={handleCompletion} className='btn btn-lg bg-red-500 mb-16 text-white'>
          Ottieni Portacuore
        </button>
      )}
    </div>
  );
};

export default Completion;
