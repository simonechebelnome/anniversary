import SHRINE from "../assets/shrine.jpg";
import QUESTIONS from "../data/questions.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Paths } from "../enum";
import clsx from "clsx";
interface Question {
  question: string;
  answers: string[];
  correctAnswer: number;
}

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const numberId = parseInt(id!);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [wrongAnswers, setWrongAnswers] = useState<number[]>([]); // Stato per risposte sbagliate

  useEffect(() => {
    if (id) setCurrentQuestion(QUESTIONS[numberId]);
  }, [id]);

  const handleButton = (index: number) => {
    if (index !== currentQuestion?.correctAnswer) {
      setWrongAnswers((prev) => [...prev, index]);
      return;
    }

    // If there are still questions
    if (id && QUESTIONS.length > numberId + 1)
      navigate(`${Paths.FORM}/${numberId + 1}`);
    else navigate(Paths.COMPLETION);
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
