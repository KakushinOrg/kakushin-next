"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

export default function OurStorySection() {
  const { scrollY } = useScroll();

  const yImage1 = useTransform(scrollY, [0, 1900], [0, -150]);
  const yImage2 = useTransform(scrollY, [0, 1900], [0, -250]);
  const yImage3 = useTransform(scrollY, [0, 1900], [0, -250]);
  const yImage4 = useTransform(scrollY, [0, 1900], [0, -1100]);
  const yBlurred1 = useTransform(scrollY, [0, 1900], [0, -600]);
  const yBlurred2 = useTransform(scrollY, [0, 1900], [0, 50]);
  const textY = useTransform(scrollY, [0, 1900], [0, 800]);

  return (
    <section id="home">
      <motion.div
        className="relative flex flex-col items-center pt-32"
        style={{ background: "linear-gradient(to bottom, #F7F7F7, #FFFFFF)" }}
      >
        {/* Main Image Section */}
        <div className="relative w-full flex justify-center h-[840px]">
          <motion.div
            style={{ y: textY }}
            className="text-center z-20 max-w-2xl my-52"
          >
            <h2 className="titleText text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-lg max-w-xl mx-auto paragraph">
              At Kakushin, we specialize in empowering startups, Non-Profit, and
              businesses to thrive by providing tailored solutions that drive
              innovation and sustainable growth. From MVP development and
              AI-driven projects to branding and business strategy, we help turn
              ideas into impactful realities.
            </p>
          </motion.div>

          {/* Positioned Images with Different Sizes and Blur Effects */}
          <motion.div
            style={{ y: yImage1 }}
            className="w-[12vw] h-[15vw] rounded-lg overflow-hidden shadow-lg absolute top-[8%] left-[10%] z-10"
          >
            <Image
              src="/images/Growth_Navigator.jpg"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>

          <motion.div
            style={{ y: yImage2 }}
            className="w-[13vw] h-[18vw] rounded-lg overflow-hidden shadow-lg absolute top-0 right-[10%] z-10"
          >
            <Image
              src="/images/Growth_Navigator.jpg"
              alt="Image 2"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>

          <motion.div
            style={{ y: yImage3 }}
            className="w-[10vw] h-[10vw] rounded-lg overflow-hidden shadow-lg absolute bottom-24 left-[20%] z-10"
          >
            <Image
              src="/images/Growth_Navigator.jpg"
              alt="Image 3"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>

          <motion.div
            style={{ y: yImage4 }}
            className="rounded-lg overflow-hidden shadow-lg absolute bottom-0 right-[7%] z-10 w-[20vw] h-[22vw]"
          >
            <Image
              src="/images/Growth_Navigator.jpg"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>

          {/* Additional Blurred Background Images */}
          <motion.div
            style={{ y: yBlurred1, filter: "blur(8px)" }}
            className="rounded-lg overflow-hidden shadow-lg absolute bottom-48 left-[25%] opacity-40 w-[10vw] h-[12vw]"
          >
            <Image
              src="/images/Growth_Navigator.jpg"
              alt="Blurred Image 1"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>

          <motion.div
            style={{ y: yBlurred2, filter: "blur(8px)" }}
            className="rounded-lg overflow-hidden shadow-lg absolute top-32 right-[20%] opacity-40 w-[15vw] h-[16vw]"
          >
            <Image
              src="/images/Growth_Navigator.jpg"
              alt="Blurred Image 2"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
