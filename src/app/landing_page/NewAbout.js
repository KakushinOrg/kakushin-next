"use client";
import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion";

export default function OurStorySection() {
  const { scrollY } = useScroll();

  // Debugging scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  // Adjusted input range to [0, 1900] for all transforms
  const yImage1 = useTransform(scrollY, [0, 1900], [0, -150]);
  const yImage2 = useTransform(scrollY, [0, 1900], [0, -250]);
  const yImage3 = useTransform(scrollY, [0, 1900], [0, -250]);
  const yImage4 = useTransform(scrollY, [0, 1900], [0, -1100]); // Moves faster
  const yBlurred1 = useTransform(scrollY, [0, 1900], [0, -600]);
  const yBlurred2 = useTransform(scrollY, [0, 1900], [0, 50]);
  const textY = useTransform(scrollY, [0, 1900], [0, 800]);

  return (
<motion.div className="relative flex flex-col items-center py-32" style={{ background: 'linear-gradient(to bottom, #F7F7F7, #FFFFFF)' }}>
      
      {/* Main Image Section */}
      <div className="relative w-full flex justify-center h-[840px]">
        <motion.div style={{ y: textY }} className="text-center z-20 max-w-2xl py-52">
          <h2 className="titleTextAboutUs text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-lg max-w-xl mx-auto paragraphAboutUs">
            When Facebook launched in 2004, it changed the way people connect. Apps like Messenger, Instagram, and WhatsApp further empowered billions around the world. Now, Meta is moving beyond 2D screens toward immersive experiences like augmented, virtual, and mixed reality to help build the next evolution in social technology.
          </p>
        </motion.div>
        

        {/* Positioned Images with Different Sizes and Blur Effects */}
        <motion.div
          style={{ y: yImage1 }}
          className="w-56 h-72 rounded-lg overflow-hidden shadow-lg absolute top-[8%] left-[10%] z-10"
        >
          <img src="/images/Growth_Navigator.jpg" alt="Image 1" className="object-cover w-full h-full" />
        </motion.div>
        
        <motion.div
          style={{ y: yImage2 }}
          className="w-60 h-80 rounded-lg overflow-hidden shadow-lg absolute top-0 right-[10%] z-10"
        >
          <img src="/images/Growth_Navigator.jpg" alt="Image 2" className="object-cover w-full h-full" />
        </motion.div>
        
        <motion.div
          style={{ y: yImage3 }}
          className="w-48 h-48 rounded-lg overflow-hidden shadow-lg absolute bottom-24 left-[20%] z-10"
        >
          <img src="/images/Growth_Navigator.jpg" alt="Image 3" className="object-cover w-full h-full" />
        </motion.div>
        
        <motion.div
          style={{ y: yImage4 }}
          className="rounded-lg overflow-hidden shadow-lg absolute bottom-0 right-[5%] z-10 sm:w-4 sm:h-20 md:w-[400px] md:h-[450px]"
        >
          <img src="/images/Growth_Navigator.jpg" alt="Image 4" className="object-cover w-full h-full" />
        </motion.div>

        {/* Additional Blurred Background Images */}
        <motion.div
          style={{ y: yBlurred1, filter: 'blur(8px)' }}
          className="w-48 h-56 rounded-lg overflow-hidden shadow-lg absolute bottom-48 left-[25%] opacity-40"
        >
          <img src="/images/Growth_Navigator.jpg" alt="Blurred Image 1" className="object-cover w-full h-full" />
        </motion.div>
        
        <motion.div
          style={{ y: yBlurred2, filter: 'blur(8px)' }}
          className="rounded-lg overflow-hidden shadow-lg absolute top-32 right-[20%] opacity-40 sm:w-36 sm:h-44 md:w-48 md:h-56 lg:w-64 lg:h-72 xl:w-72 xl:h-80"
          
        >
          <img src="/images/Growth_Navigator.jpg" alt="Blurred Image 2" className="object-cover w-full h-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}
