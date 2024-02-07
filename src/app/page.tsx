import { NoteCard, Search } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container space-y-6">
      <Image
        src={"/assets/logo.svg"}
        alt="NLW Expert"
        priority
        width={120}
        height={23}
      />
      <Search />
      <div className="h-px bg-slate-700" />
      <NoteCard />
    </div>
  );
}
