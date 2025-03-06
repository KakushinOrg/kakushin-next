// import { whatWeDo } from "@/app/components/whatWeDoData";
import Accordion from "@/app/components/AboutUsAccordion/Accordion";

const AboutUsItem = ({ params }) => {
  const formattedText = params.subTitle.split("\n").map((line, i) => (
    <div key={i}>
      {line}
      <br />
    </div>
  ));

  return (
    <div>
      <main className="w-full mt-5">
        <section className="">
          <div id="empowering-startup" className="">
            <div className="flex gap-4 flex-col items-start ml-5">
              <h1 className="text-2xl font-bold text-center">{params.title}</h1>
              <p className="my-2 text-[#434343] text-start">{formattedText}</p>
              <p></p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-center">
              <div className="">
                {/* DONOT CLEANUP: This is for testing to see if we need the accordion or not */}
                {/* <h3 className="text-gray-700 font-semibold text-3xl mb-4 text-center">
                  {params.arrayTitle}
                </h3> */}
                {/* <Accordion
                  hasLink={false}
                  data={params.array}
                  variant="services"
                /> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUsItem;
