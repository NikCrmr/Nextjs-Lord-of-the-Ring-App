import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";
//import cover from "/public/the-fellowship-of-the-ring.png";
import { useRouter } from "next/router.js";
import Navigation from "@/components/Navigation";

export default function Ring() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", router.query);

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }
  const { books, title, description, cover } = currentVolume;

  return (
    <>
      <Link href="/">Back to all Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.ordinal}>
              <h3>{book.ordinal}</h3>
              <p>{book.title}</p>
            </li>
          );
        })}
      </ul>
      <br />
      <Image src={cover} height={230} width={140} alt={title} />
      <br />
      <Navigation book={currentVolume} />
    </>
  );
}
