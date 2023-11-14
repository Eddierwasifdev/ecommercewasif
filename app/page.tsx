import Hero from "./components/hero";
import Newest from "./components/Newest";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Newest />
    </div>
  );
}
