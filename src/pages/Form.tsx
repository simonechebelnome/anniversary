import SHRINE from "../assets/shrine.png";
import QUESTIONS from "../data/questions.json";
import FAIRY from "../assets/sounds/fairy.mp3"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Paths } from "../enum";
import clsx from "clsx";
import { useCount } from "../contexts/CountContext";
import { useAudioPlayer, useGlobalAudioPlayer } from "react-use-audio-player";
import FAILURE from '../assets/sounds/link.mp3'
import SUCCESS from '../assets/sounds/yahaha.mp3'
interface Question {
  question: string;
  answers: string[];
  correctAnswer: number;
}

const Form = () => {
  const { id } = useParams();
  const { setCount } = useCount();
  const { load} = useAudioPlayer();
  const { load: globalLoad} = useGlobalAudioPlayer();
  const navigate = useNavigate();
  const numberId = parseInt(id!);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]);

  useEffect(() => {
    if (id) setCurrentQuestion(QUESTIONS[numberId]);
    setWrongAnswers([]);
  }, [id]);

  const handleButton = (index: number) => {
    if (index !== currentQuestion?.correctAnswer) {
      setWrongAnswers((prev) => [...prev, index]);
      load(FAILURE, {
        autoplay: true,
        initialVolume: 0.3
      });
      return;
    }

    // If there are still questions
    setCount( numberId + 1)
    load(SUCCESS, {
      autoplay: true,
      initialVolume: 0.4
    });

    if (id && QUESTIONS.length > numberId + 1) {
      navigate(`${Paths.FORM}/${numberId + 1}`);
      
    } else {
      globalLoad(FAIRY, {
        autoplay: true,
        initialVolume: 0.1
      });
  
      navigate(Paths.COMPLETION)
    };
  };

  return (
    <div
      style={{ backgroundImage: `url(${SHRINE})` }}
      className="flex justify-center py-8 gap-32 bg-cover bg-center h-screen"
    >
      <div className="card bg-base-100/90 w-6/7 h-max">
        <div className="card-body flex flex-col gap-8">
          {/* Question title */}
          <div className="flex flex-col gap-4">
            <h2 className="card-title text-white text-2xl">
              {currentQuestion?.question}
            </h2>
            <hr />
          </div>
          <section className="flex flex-col gap-6">
            {currentQuestion?.answers?.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleButton(index + 1)}
                disabled={wrongAnswers.includes(index + 1)}
                className={clsx(
                  "btn btn-secondary",
                  wrongAnswers.includes(index + 1) && "btn-disabled opacity-50"
                )}
              >
                {answer}
              </button>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Form;
