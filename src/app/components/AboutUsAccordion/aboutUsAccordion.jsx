// import { whatWeDo } from "@/app/components/whatWeDoData";
import Accordion from "@/app/components/Accordion";

const AboutUsItem = ({ params }) => {
  return (
    <div>
      <main className="justify-center items-center flex my-10 md:my-28 px-5 sm:px-10 md:px-16 lg:px-28 xl:px-48 2xl:px-60">
        <section className="">
          <div id="empowering-startup" className="">
            <div className="flex gap-4 flex-col items-center">
              <h2 className="title mb-5">{params.title}</h2>
              <p className="my-2 paragraph text-center">{params.subTitle}</p>
              <p></p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
              <div className="">
                {/* <h3 className="text-gray-700 font-semibold text-3xl mb-4 text-center">
                  {params.arrayTitle}
                </h3> */}
                <Accordion
                  hasLink={false}
                  data={params.array}
                  variant="services"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUsItem;
