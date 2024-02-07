"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import {
  Button,
  Card,
  CardDescription,
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "./ui";

export const NewNoteCard = () => {
  const [shouldShowOnboarding, setShouldShowOnboarding] =
    useState<boolean>(true);
  const [content, setContent] = useState<string>("");

  const handleStartEditor = () => {
    setShouldShowOnboarding(false);
  };

  const handleContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);

    if (e.target.value === "") {
      setShouldShowOnboarding(true);
    }
  };

  const handleSaveNote = (e: FormEvent) => {
    e.preventDefault();

    toast.success("Nota salva com sucesso!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card>
          <h4>Criar uma nova nota.</h4>
          <CardDescription></CardDescription>
        </Card>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <form
            onSubmit={handleSaveNote}
            className="flex flex-1 gap-4 p-4 flex-col"
          >
            <div className="flex flex-1 flex-col gap-4">
              <h4>Adicionar nota</h4>
              {shouldShowOnboarding ? (
                <p>
                  Comece{" "}
                  <button
                    type="button"
                    className="hover:underline text-lime-600 underline-offset-2"
                  >
                    gravando uma nota com áudio
                  </button>{" "}
                  ou se preferir{" "}
                  <button
                    type="button"
                    onClick={handleStartEditor}
                    className="hover:underline text-lime-600 underline-offset-2"
                  >
                    utilize apenas texto
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  onChange={handleContentChanged}
                  autoFocus
                  className="text-sm leading-6 bg-transparent outline-none resize-none flex-1 ring-2 p-2 rounded-md ring-background"
                />
              )}
            </div>
            <Button
              type="submit"
              className="bg-lime-600 hover:bg-lime-700 ring-lime-700 focus-visible:bg-lime-700 text-lime-50"
            >
              Salvar nota
            </Button>
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
