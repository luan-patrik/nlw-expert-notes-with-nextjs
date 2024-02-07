import { Card, CardDescription, CardHeader } from "./ui";

export const NoteCard = () => {
  return (
    <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
      <Card className="bg-slate-700">
        <CardHeader className="text-slate-200">Adicionar nota</CardHeader>
        <CardDescription>
          Grave uma nota de áudio que será convertida para texto
          automaticamente.
        </CardDescription>
      </Card>
      <Card>
        <CardHeader>há 2 dias</CardHeader>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          facilis assumenda corporis debitis vel, beatae porro consequatur
          obcaecati. Aut tenetur tempore debitis eveniet cum blanditiis dolor
          dicta, culpa repudiandae officia. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Omnis facilis assumenda corporis
          debitis vel, beatae porro consequatur obcaecati. Aut tenetur tempore
          debitis eveniet cum blanditiis dolor dicta, culpa repudiandae officia.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          facilis assumenda corporis debitis vel, beatae porro consequatur
          obcaecati. Aut tenetur tempore debitis eveniet cum blanditiis dolor
          dicta, culpa repudiandae officia.
        </CardDescription>
      </Card>
      <Card>
        <CardHeader>há 4 dias</CardHeader>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab
          cumque quo aliquid nihil rerum, unde nesciunt temporibus! Nihil cum
          cupiditate qui repellat a vero quisquam corrupti voluptates porro
          corporis!
        </CardDescription>
      </Card>
    </div>
  );
};
