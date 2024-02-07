import { NewNoteCard, NoteCard, Search } from "@/components";
import Image from "next/image";
import { Children } from "react";

const data = [
  {
    date: new Date(2024, 1, 4),
    content: "Shalalalal",
  },
  {
    date: new Date(23, 11, 2022),
    content:
      "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem",
  },
];

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
      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        {Children.toArray(data.map((note) => <NoteCard note={note} />))}
      </div>
    </div>
  );
}
