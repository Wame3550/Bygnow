import StepCard from "../../../shared/StepCard";

const Main = () => {
  return (
    <section>
      <div className="mx-5 mt-24 mb-24">
        <StepCard
          number="/assets/1.svg"
          title="Upartisk"
          description="Vi sørger for at du altid får den bedste løsning."
          image="/assets/information.svg"
        />
        <StepCard
          number="/assets/2.svg"
          title="Bedste Løsning"
          reverse={true}
          description="Vi giver dig al den information, du behøver for at vælge den bedste løsning til den rigtige pris."
          image="/assets/knowledge.svg"
        />
        <StepCard
          number="/assets/3.svg"
          title="Tillidsfulde"
          description="Vi er gratis at bruge og fuldstændig uafhængige."
          image="/assets/trusted.svg"
        />
      </div>
    </section>
  );
};

export default Main;
