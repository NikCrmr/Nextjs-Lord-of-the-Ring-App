import { volumes } from "../../../resources/lib/data.js";
import Link from "next/link";
import Image from "next/image";
import coverTower from "/public/the-two-towers.png";

export default function Towers() {
  const towers = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Link href="/">Back to all Volumes</Link>
      <h1>{towers.title}</h1>
      <p>{towers.description}</p>
      <ul>
        <li>
          {volumes[1].books[0].ordinal} - {volumes[1].books[0].title}{" "}
        </li>
        <li>
          {volumes[1].books[1].ordinal} - {volumes[1].books[1].title}
        </li>
      </ul>
      <Image src={coverTower} height={230} width={140} alt="cover" />
      <br />

      <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>
      <span> - </span>
      <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
    </>
  );
}
