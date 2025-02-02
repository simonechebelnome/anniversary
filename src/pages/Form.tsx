import React from "react";

interface FormProps {
  questions: string[];
  correctAnswer: 1 | 2 | 3 | 4;
}

const Form: React.FC<FormProps> = () => {
  return <div className="flex flex-col"></div>;
};

export default Form;
