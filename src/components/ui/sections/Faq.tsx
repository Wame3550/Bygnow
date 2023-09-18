import { FaQuestionCircle } from "react-icons/fa";
import Accordion from "../Faqs/accordion";

interface IFaq {
  faq: {
    question: string;
    answer: string;
  }[];
}

const Faq = ({ faq }: IFaq) => {
  return (
    <div className="py-20 bg-[#F3F1F2]">
      <div className="flex justify-center">
        <FaQuestionCircle size={50} className="text-secondary" />
      </div>
      <div className="flex justify-center mt-5 text-xl sm:text-2xl md:text-3xl">
        <h2 className="font-quicksand font-bold text-black">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="w-12 mt-5 border-t-4 border-secondary"></div>
      </div>
      <ul className="flex flex-col items-center mx-5 mt-5 space-y-3">
        {faq.map((item, index) => {
          return (
            <Accordion
              key={index}
              heading={item.question}
              paragraph={item.answer}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Faq;
