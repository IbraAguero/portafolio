import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="h-screen flex gap-2 items-center justify-between">
        <div className="border h-full w-full"></div>
        <div className="border h-full w-full"></div>
      </section>
    </div>
  );
}
