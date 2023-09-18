import { VscClose } from "react-icons/vsc";
import Image from "next/legacy/image";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailModal: React.FC<Props> = ({ setShowModal }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [thankYou, setThankYou] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.includes("@") && inputValue.includes(".")) {
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

  const handleClose = () => {
    setShowModal(false);
    setThankYou(false);
  };

  return (
    <div className="fixed z-30 flex justify-center w-full h-full p-40 bg-black bg-opacity-60">
      <div className="flex flex-col bg-white rounded-lg w-96 h-96">
        <div className="flex flex-col p-4">
          <VscClose
            className="ml-auto cursor-pointer"
            size={20}
            onClick={handleClose}
          />
          <div className="flex flex-col mx-auto mt-5">
            <Image
              width={120}
              height={120}
              src="/assets/email.svg"
              alt="Email Signup"
            />
            <label className="mt-5 font-bold text-center text-csblack font-filson">
              Subscribe to get updates
            </label>
            <label className="text-sm font-light text-center text-csblack font-filson">
              Sign up for the latest updates!
            </label>
            <div className="w-72">
              <input
                className="w-full px-3 py-3 mt-4 mb-3 text-sm font-light leading-tight text-gray-700 border rounded shadow outline-none appearance-none border-secondary font-filson"
                id="email"
                type="email"
                onChange={handleInput}
                placeholder="Indtast din email"
              />
              <button
                className={`${
                  inputValue.includes("@") && inputValue.includes(".")
                    ? "cursor-pointer bg-opacity-100"
                    : "cursor-not-allowed bg-opacity-60"
                } px-3 py-3 font-light text-white rounded bg-secondary font-filson w-full`}
                onClick={handleSubmit}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        {thankYou ? (
          <motion.div
            className="fixed z-10 flex flex-col p-4 rounded-lg bg-secondary w-96 h-96"
            animate={{ y: 0 }}
            initial={{ y: 384 }}
            transition={{ duration: 0.3 }}
          >
            <VscClose
              className="ml-auto text-white cursor-pointer"
              size={20}
              onClick={handleClose}
            />
            <div className="flex flex-col my-auto font-light text-center text-white font-filson">
              <label>Thank you for subscribing!</label>
              <label>A confirmation email has been sent to you.</label>
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default EmailModal;
