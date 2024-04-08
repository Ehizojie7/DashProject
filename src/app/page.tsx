import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";

export default function Home() {
  return (
    <main className="min-h-screen w-screen lg:max-w-[1240px]">
    <div className="mx-14 mt-4">
      <Navbar />
        <Body />
      </div>
    </main>
  );
}
