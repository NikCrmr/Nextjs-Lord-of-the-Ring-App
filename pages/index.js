import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

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
      <button
        type="button"
        onClick={() => {
          router.push(
            `/volumes/${
              volumes[Math.floor(Math.random() * volumes.length)].slug
            }`
          );
        }}
      >
        View Random Book
      </button>
    </div>
  );
}
