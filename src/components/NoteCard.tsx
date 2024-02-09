import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Button,
  Card,
  CardDescription,
  CardHeader,
  CardOverlay,
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "./ui";

interface NoteCardProps {
  handleDeleteNote: (id: string) => void;
  note: {
    id: string;
    date: Date;
    content: string;
  };
}

export const NoteCard = ({ handleDeleteNote, note }: NoteCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card>
          <CardOverlay />
          <CardHeader>
            {formatDistanceToNow(note.date, {
              locale: ptBR,
              addSuffix: true,
            })}
          </CardHeader>
          <CardDescription>{note.content}</CardDescription>
        </Card>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose />
          <div className="flex flex-col gap-4 h-full">
            <CardHeader>
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </CardHeader>
            <CardDescription className="overflow-y-auto">
              {note.content}
            </CardDescription>
            <Button onClick={() => handleDeleteNote(note.id)} type="button">
              Deseja <span className="text-red-600">apagar essa nota?</span>
            </Button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
