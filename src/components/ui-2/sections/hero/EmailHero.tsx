import { FaEnvelope } from "react-icons/fa";
import { GeneralContext } from "../../../../context/GeneralContext";
import { useContext } from "react";
import { useRef } from "react";
import { useState } from "react";
import validator from "validator";
import { useRouter } from "next/router";
import axios from "axios";

interface Translate {
  h1: string;
  p: string;
  email: string;
  thank: string;
  confirm: string;
}

const Hero = () => {
  const { setMenu } = useContext(GeneralContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState("");
  const [thankYou, setThankYou] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (validator.isEmail(inputValue)) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_CONVERTKIT_API_URL}/${process.env.NEXT_PUBLIC_CONVERTKIT_GENERAL_FORM_ID}/subscribe`,
          {
            email: String(inputValue),
            api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setThankYou(true);
    }
  };

  const handleFocus = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section>
      <div
        className="flex items-center h-96 bg-primary"
        onMouseEnter={() => setMenu(false)}
      >
        <div className="flex flex-col items-center px-5 mx-auto text-white font-filson">
          <div className="text-2xl font-normal lg:text-4xl sm:text-3xl">
            <h1>{'Subscribe To Our Blog'}</h1>
          </div>
          <div className="mt-5 text-lg font-light text-center">
            <p>{'Get news, guides and more send directly to your inbox'}</p>
          </div>
          <div className="flex flex-col items-center mt-7 sm:w-full sm:space-x-5">
            {!thankYou ? (
              <div
                className="flex justify-between w-full px-2 py-1 space-x-3 bg-white rounded-full cursor-text"
                onClick={handleFocus}
              >
                <input
                  className="w-full font-light text-csblack focus:outline-none ml-7"
                  type="text"
                  placeholder={'Enter your email'}
                  ref={inputRef}
                  onChange={handleInput}
                  onKeyDown={(e) => {
                    e.key === "Enter" ? handleSubmit() : null;
                  }}
                />
                <button
                  className={`${
                    validator.isEmail(inputValue)
                      ? "cursor-pointer bg-opacity-100"
                      : "cursor-not-allowed bg-opacity-60"
                  } flex items-center px-6 py-4 text-sm text-white rounded-full sm:mt-0 lg:text-base bg-secondary`}
                  onClick={handleSubmit}
                >
                  <FaEnvelope />
                  <span className="not-italic font-normal font-filson"></span>
                </button>
              </div>
            ) : null}
            {thankYou ? (
              <div className="flex flex-col items-center">
                <span className="text-lg font-light">{'Thank you for signing up!'}</span>
                <span className="mt-5 text-lg font-light">
                  {'Make sure to confirm your subsciption.'}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
