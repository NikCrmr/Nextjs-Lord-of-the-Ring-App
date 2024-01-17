import { volumes } from "../../../resources/lib/data.js";
import Link from "next/link";
import Image from "next/image";
import coverRing from "/public/the-fellowship-of-the-ring.png";

export default function Ring() {
  const ring = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Link href="/">Back to all Volumes</Link>
      <h1>{ring.title}</h1>
      <p>{ring.description}</p>
      <ul>
        <li>
          {volumes[0].books[0].ordinal} - {volumes[1].books[0].title}{" "}
        </li>
        <li>
          {volumes[0].books[1].ordinal} - {volumes[1].books[1].title}
        </li>
      </ul>
      <Image
        src={coverRing}
        height={230}
        width={140}
        alt="the fellowship of the king cover"
      />
      <br />
      <Link href="/volumes/the-two-towers">Next Volume</Link>
    </>
  );
}
