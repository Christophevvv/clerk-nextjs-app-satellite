import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Home Page</div>
      <Link href="/prefetch">Prefetch</Link>
    </div>
  );
}
