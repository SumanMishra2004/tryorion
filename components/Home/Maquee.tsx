import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const reviews = [
  
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/img1.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img2.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img3.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img4.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img5.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <img src={img} className="h-full w-auto"/>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s] gap-32">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review}  />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
