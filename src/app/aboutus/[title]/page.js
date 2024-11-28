import { whatWeDo } from "@/app/components/whatWeDoData";
import Accordion from "@/app/components/Accordion";
import Image from "next/image";
import Img from "../../../../public/images/Growth_Navigator.jpg";

const AboutUsItem = ({ params }) => {
  const { title } = params;

  const item = whatWeDo.find((i) => i.title === decodeURIComponent(title));

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <main className="justify-center items-center flex my-36 md:my-48 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 2xl:px-60">
        <section className="">
          <div id="empowering-startup" className="">
            <div className="flex flex-col items-center text-center">
              <h2 className="titleText pb-4">{item.title}</h2>
              <p className="paragraph pb-16 max-w-2xl">{item.subTitle}</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
              <div className="flex-1">
                <Image
                  src={Img}
                  alt="Principles Illustration"
                  width={750}
                  height={970}
                  className="rounded-3xl w-full h-auto object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-700 font-semibold text-3xl mb-4">
                  {item.arrayTitle}
                </h3>
                <Accordion
                  hasLink={false}
                  data={item.array}
                  variant="services"
                />
              </div>
            </div>
            <div className="flex flex-col items-center text-center md:mt-40 mt-20">
              <h3 className="titleText pb-4">{item.whyUsTitle}</h3>
              <p className="paragraph pb-16 max-w-2xl">{item.whyUsText}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUsItem;
