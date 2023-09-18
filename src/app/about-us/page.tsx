import { Fragment } from "react";
import Hero from "../../components/ui/sections/Hero";
import Services from "../../components/ui/sections/Services";
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from "next/image";

const AboutUs = () => (
  <Fragment>
    <section className="bg-white max-w-7xl mx-auto p-6">
      <div className="bg-[#f3f1f2] rounded-xl h-[510px] w-full bg-no-repeat p-10 lg:p-20 gap-5 justify-center flex flex-col-reverse lg:grid lg:grid-cols-5">
        <div className="gap-5 flex flex-col lg:col-span-3">
          <div>
            <h1 className="text-[#191919] lg:text-5xl font-bold lg:col-span-8 mx-auto text-2xl md:text-3xl text-center lg:text-left">
              About HVAC Pooler GA
            </h1>
          </div>
          <div className="flex">
            <p className="text-[#191919] col-span-6 text-center lg:text-left">
              <p>
                We are your trusted HVAC experts serving the Pooler, Georgia
                community. With a commitment to excellence, our skilled
                technicians deliver top-notch heating, ventilation, and air
                conditioning services. From installations to repairs and
                maintenance, we prioritize your comfort and satisfaction.
                Experience superior indoor climate control with HVAC Pooler GA.
              </p>
            </p>
          </div>
          <div className="mx-auto lg:mx-0">
            <a
              href="#"
              className="text-base font-bold leading-6 text-white bg-secondary py-2.5 px-6 rounded-full flex items-center gap-2 w-fit"
            >
              <BsFillTelephoneFill />
              Call Now (844) 204-0938
            </a>
          </div>
        </div>
        <div className="relative w-full lg:w-96 lg:h-full h-96 mx-auto">
          <Image src={"/assets/about-us.svg"} alt={""} fill />
        </div>
      </div>
    </section>
    <section>
      <div className="pt-16 font-quicksand bg-white prose max-w-none p-6">
        <div className="max-w-2xl mx-auto p-10 border rounded-lg bg-white shadow-lg">
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<p>At HVAC Pooler GA, we are dedicated to providing exceptional HVAC services in Pooler, GA and surrounding areas. With a passion for customer satisfaction and a commitment to quality, we strive to be the go-to choice for all your heating, ventilation, and air conditioning needs.</p> <p>Our team consists of highly skilled and experienced HVAC technicians who are proficient in handling a wide range of HVAC systems. We understand that each home and business is unique, which is why we take a personalized approach to deliver tailored solutions that meet your specific requirements.</p> <p>What sets us apart is our unwavering commitment to excellence in every aspect of our service. From the moment you reach out to us, we prioritize clear communication, prompt response, and exceptional workmanship. We believe in building lasting relationships with our customers based on trust, reliability, and superior service.</p>",
            }}
          />
        </div>
      </div>
    </section>
    <Services
      title={"Why choose Us"}
      paragraph={""}
      services={[
        {
          title: "Expertise",
          image: "certificate-white.svg",
          paragraph:
            "Our HVAC technicians in Pooler, GA are highly skilled and trained professionals with extensive experience in handling a wide range of HVAC systems. Rest assured, your HVAC system will be in capable hands.",
        },
        {
          title: "Quality Service",
          image: "quality-white.svg",
          paragraph:
            "We take pride in delivering top-notch service to our customers. From installation and repairs to maintenance and emergency assistance, we prioritize quality workmanship, attention to detail, and customer satisfaction.",
        },
        {
          title: "Timely Response",
          image: "clock-white.svg",
          paragraph:
            "We understand the importance of a quick response when it comes to HVAC issues. Our team is prompt and reliable, ensuring that your HVAC problems are addressed in a timely manner to minimize disruptions to your comfort.",
        },
        {
          title: "Personalized Solutions",
          image: "personalization-white.svg",
          paragraph:
            "Every home and HVAC system is unique. We provide personalized solutions tailored to your specific needs, ensuring maximum efficiency, energy savings, and long-term performance of your HVAC system.",
        },
        {
          title: "Transparent Pricing",
          image: "best-price-white.svg",
          paragraph:
            "We believe in transparency and fair pricing. You can trust us to provide upfront and honest estimates, with no hidden costs or surprises. We strive to offer competitive rates without compromising on the quality of our services.",
        },
        {
          title: "Customer Care",
          image: "customer-white.svg",
          paragraph:
            "Your satisfaction is our priority. We are committed to excellent customer service and go the extra mile to exceed your expectations. We value your trust and strive to build long-term relationships with our customers.",
        },
      ]}
      description={false}
      footerColor={false}
      column={3}
    />
  </Fragment>
);

export default AboutUs;
