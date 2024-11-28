import { useRouter } from "next/router";
import whatWeDo from "@/app/landing_page/NewAboutUs";

const AboutUsItem = () => {
  const router = useRouter();
  const { title } = router.query;

  const item = whatWeDo.find((i) => i.title === title);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <main>
        <h1>{item.title}</h1>
        <p>{item.text}</p>
      </main>
    </div>
  );
};

export default AboutUsItem;
