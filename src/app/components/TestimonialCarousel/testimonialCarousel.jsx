
import EmblaCarousel from './EmblaCarousel'
import './embla.css'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const testimonials = [
      {
        text: "As a female founder, I've found working with Kakushin to be refreshingly empowering. Their innovative approach and steadfast support have taken my brand to new heights. Kakushin values the voices of female founders, making the collaboration both inspiring and empowering. Partnering with them has been a truly exceptional experience.",
        name: "Aisha",
      },
      {
        text: "Working with Kakushin was like embarking on a creative adventure. Their cool ideas and artsy vibes gave our brand a fresh new look, making it super relatable. The support they gave us throughout was solid, showing they're all about surpassing expectations.",
        name: "Ramneek",
      },
      {
        text: "Kakushin's approach is refreshingly client-focused. They totally got what our brand was all about, and the rebrand they pulled off really hit home with our audience. The smart ideas they tossed our way made the whole process a breeze.",
        name: "Ali",
      },
      {
        text: "My tenure as a full-stack developer with Kakushin is marked by a profound dedication to excellence. Across diverse projects encompassing app, extension, and website development, Kakushin upholds rigorous standards of innovation and precision.",
        name: "Zeeshan",
      },
      {
        text: "Kakushin's work was next level. Every design they did was spot-on, and their strategic guidance was smart. Their support team was just a message away, always there to guide us through the rebranding journey.",
        name: "Waseem",
      },
      {
        text: "The Kakushin squad put us first. They really listened to what we needed, and their support was super personalized. Their creative skills are off the charts, and our new brand identity is the coolest.",
        name: "James",
      },
      {
        text: "Kakushin isn't just about making things look good – they're all about crafting a brand story. Their consistent support and client-first approach made us feel valued. The quality of their work has set a new standard for us.",
        name: "Nick",
      },
      {
        text: "Working alongside Kakushin on our brand makeover was akin to embarking on a creative odyssey. Their innovative thinking and artistic approach breathed new life into our brand, making it more relevant and engaging. The support we received throughout the journey was steadfast, showcasing their dedication to not just meet, but exceed client expectations.",
        name: "Andreas",
      },
      {
        text: "Kakushin's client-centric approach was a breath of fresh air. They delved into the essence of our brand, engaged with our vision, and delivered a rebranding that resonates profoundly with our target audience. Their unwavering support and insightful suggestions made the process seamless and rewarding.",
        name: "Jenifer",
      },
      {
        text: "The quality of work delivered by Kakushin was unmatched. Every design element was meticulously crafted, and the strategic direction provided was insightful. Their support team was always on hand to provide guidance, making the rebranding journey an enlightening experience.",
        name: "Emma",
      },
      {
        text: "Our experience with Kakushin was a testament to their ability to bridge visions with reality. Their creativity was not just about aesthetic appeal but about crafting a brand narrative that speaks volumes. The continual support and customer-focused approach made us feel valued, and the quality of the deliverables has set a new benchmark for us.",
        name: "Antonio",
      },
    ];
  

const TestimonialCarousel = () => (
    <>
      {/* Pass the socials data as a prop */}
      <EmblaCarousel testimonials={testimonials} options={OPTIONS} />
    </>
  );
  
  export default TestimonialCarousel;