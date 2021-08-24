import React, {
  ReactNode,
  isValidElement,
  cloneElement,
  useEffect,
  useState,
} from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
};
function Card({ children }: CardProps) {
  if (!isValidElement(children)) return <></>;

  return cloneElement(children, {
    style: {
      backgroundColor: "var(--background-color)",
    },
    className: clsx(
      "w-full h-full min-h-[12rem] p-8 rounded-lg shadow",
      children.props.className
    ),
  });
}

type AvatarProps = {
  image: string;
  name: string;
};
function Avatar({ image, name }: AvatarProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-10 rounded-full overflow-hidden border-2"
        style={{
          borderColor: "var(--border-color)",
        }}
      >
        <img src={image} alt={`${name}'s avatar`} />
      </div>

      <div className="flex flex-col justify-center">
        <span>{name}</span>

        <span className="opacity-50 text-xs">Verified Graduate</span>
      </div>
    </div>
  );
}

interface Review {
  user: {
    name: string;
    avatar: string;
  };
  title: string;
  content: string;
}

function App() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json() as Promise<Review[]>)
      .then(setReviews);
  }, [setReviews]);

  return (
    <main className="min-h-screen grid place-content-center max-w-screen-xl mx-auto px-6 py-16">
      <h1 className="sr-only">Testimonials Grid Section</h1>

      <ul
        className="flex flex-col lg:grid gap-6 card-group"
        style={{
          gridTemplateAreas: `
            "A A B E"
            "C D D E"
          `,
        }}
      >
        {reviews.map((review, index) => (
          <li
            key={review.user.name}
            style={{ gridArea: `${String.fromCodePoint(65 + index)}` }}
          >
            <Card>
              <article>
                <header className="mb-10 flex flex-col gap-5">
                  <Avatar image={review.user.avatar} name={review.user.name} />

                  <h2 className="font-semibold text-xl">{review.title}</h2>
                </header>

                <p className="opacity-70">“ {review.content} ”</p>
              </article>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
