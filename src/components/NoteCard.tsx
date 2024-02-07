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
  note: {
    date: Date;
    content: string;
  };
}

export const NoteCard = ({ note }: NoteCardProps) => {
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
          <div className="flex flex-col gap-4 flex-1">
            <CardHeader>
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </CardHeader>
            <CardDescription>{note.content}</CardDescription>
          </div>
          <Button type="button">
            Deseja <span className="text-red-600">apagar essa nota?</span>
          </Button>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
