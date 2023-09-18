interface Props {
  content: string;
}

const Policy: React.FC<Props> = ({ content }: Props) => {
  return (
    <section>
      <div className="px-5 py-10 sm:px-10 sm:py-20 xl:px-80 bg-csfooter md:px-20 lg:px-40">
        <div className="px-12 py-8 mb-12 bg-white border border-gray-200 rounded-md lg:py-12 text-csblack">
          <div
            className="mt-5 prose font-filson"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </section>
  );
};

export default Policy;
