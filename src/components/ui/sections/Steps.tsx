interface IProps {
  title: string;
  steps: {
    title: string;
    paragraph: string;
  }[];
}

const Steps = ({ title, steps }: IProps) => {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="bg-secondary p-1 w-10 mx-auto rounded-full" />
      <h2 className="mt-7 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        {title}
      </h2>
      <ul className="grid grid-cols-2 mt-14 gap-10">
        {steps.map((item, index) => {
          return (
            <li className="border relative" key={item.title}>
              <div className="bg-secondary rounded-full px-6 text-white items-center flex justify-center font-bold absolute -translate-y-1/2 translate-x-2/3 text-lg">
                {index + 1}
              </div>
              <div className="py-14 px-10">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p>{item.paragraph}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Steps;
