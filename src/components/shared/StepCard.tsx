import { Fragment } from 'react';
import Image from "next/legacy/image";

interface Props {
  reverse?: boolean;
  number: string;
  title: string;
  description: string;
  image: string;
}

const Loader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const StepCard: React.FC<Props> = ({
  description,
  image,
  number,
  title,
  reverse,
}: Props) => {
  return (
    <Fragment>
      <div className='flex justify-center mt-16 gap-x-12'>
        <div
          className={`flex flex-col justify-center w-80 ${
            reverse === true ? 'order-2' : null
          }`}
        >
          <div
            className={`w-8 xs:w-10 md:w-12 ${
              reverse === true ? 'mr-auto' : 'ml-auto'
            }`}
          >
            <Image
              loader={Loader}
              width={48}
              height={48}
              src={number}
              alt={title}
            />
          </div>
          <h2
            className={`mt-5 md:mt-10 ${
              reverse === true ? 'mr-auto' : 'ml-auto'
            } xs:text-2xl sm:text-3xl font-bold font-filson text-csblack`}
          >
            {title}
          </h2>
          <p
            className={`mt-5 ${
              reverse === true ? 'text-left' : 'text-right'
            } xs:text-xl sm:text-2xl font-light font-filson text-csblack`}
          >
            {description}
          </p>
        </div>
        <div
          className={`py-16 rounded-lg shadow-3xl w-80 p-10 h-96 flex items-center ${
            reverse === true ? 'order-1' : null
          }`}
        >
          <Image
            loader={Loader}
            width={320}
            height={241}
            src={image}
            alt={title}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default StepCard;
