import { volumes } from "../../../resources/lib/data.js";
import Link from "next/link";
import Image from "next/image";
import coverKing from "/public/the-return-of-the-king.png";

export default function King() {
  const king = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <Link href="/">Back to all Volumes</Link>
      <h1>{king.title}</h1>
      <p>{king.description}</p>
      <ul>
        <li>
          {volumes[2].books[0].ordinal} - {volumes[2].books[0].title}{" "}
        </li>
        <li>
          {volumes[2].books[1].ordinal} - {volumes[2].books[1].title}
        </li>
      </ul>
      <Image src={coverKing} height={230} width={140} alt="cover" />
      <br />

      <Link href="/volumes/the-two-towers">Previous Volume</Link>
    </>
  );
}
