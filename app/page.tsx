import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">
      {" "}
      <p>Hello there</p>
      <UserButton />
    </main>
  );
}
