import Link from "next/link";
import { volumes } from "@/resources/lib/data";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
