"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import { Editor } from "./Editor";
import { Recording } from "./Recording";
import {
  Card,
  CardDescription,
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "./ui";

interface NewNoteCardProps {
  onNoteCreated: (content: string) => void;
}

let speechRecognition: SpeechRecognition | null = null;

export const NewNoteCard = ({ onNoteCreated }: NewNoteCardProps) => {
  const [shouldShowOnboarding, setShouldShowOnboarding] =
    useState<boolean>(true);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");

  const handleStartEditor = () => {
    setShouldShowOnboarding(false);
    setIsRecording(false);
  };

  const handleContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);

    if (e.target.value === "") {
      setShouldShowOnboarding(true);
    }
  };

  const handleSaveNote = (e: FormEvent) => {
    e.preventDefault();

    if (content.trim() === "") return;

    onNoteCreated(content);
    setShouldShowOnboarding(true);
    setContent("");

    toast.success("Nota salva com sucesso!");
  };

  const handleStartRecording = () => {
    const isSpeechRecognitionAvailable =
      "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

    if (!isSpeechRecognitionAvailable) {
      toast.error("Sem suporte ao reconhecimento de fala.");
      return;
    }

    setIsRecording(true);
    setShouldShowOnboarding(false);

    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    speechRecognition = new SpeechRecognitionAPI();

    speechRecognition.lang = "pt-BR";
    speechRecognition.continuous = true;
    speechRecognition.maxAlternatives = 1;
    speechRecognition.interimResults = true;

    speechRecognition.onresult = (event) => {
      const transcription = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript);
      }, "");

      setContent(transcription);
    };

    speechRecognition.onerror = (error) => {
      console.error(error);
    };

    speechRecognition.start();
  };

  const handleStopRecording = () => {
    if (speechRecognition !== null) {
      speechRecognition.stop();
    }

    setIsRecording(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card>
          <h4>Criar uma nova nota.</h4>
          <CardDescription>
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </CardDescription>
        </Card>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <form className="flex flex-1 gap-4 flex-col">
            <Editor
              handleStartRecording={handleStartRecording}
              handleStartEditor={handleStartEditor}
              handleContentChanged={handleContentChanged}
              shouldShowOnboarding={shouldShowOnboarding}
              content={content}
            />

            <Recording
              handleSaveNote={handleSaveNote}
              handleStopRecording={handleStopRecording}
              isRecording={isRecording}
            />
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
