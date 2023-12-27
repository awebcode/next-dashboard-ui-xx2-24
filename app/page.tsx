import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Image alt="Asikur" src="/fiver_banner.png" height={400} width={400} />
      <h2 className="text-white text-4xl md:text-9xl text-center">Programmer</h2>
      <button className="m-6">Hello World</button>
    </div>
  );
}
