"use client";

import { FormEvent } from "react";
import { Button } from "./ui";

interface RecordingProps {
  isRecording?: boolean;
  handleStopRecording: () => void;
  handleSaveNote: (e: FormEvent) => void;
}

export const Recording = ({
  isRecording,
  handleStopRecording,
  handleSaveNote,
}: RecordingProps) => {
  return (
    <>
      {isRecording ? (
        <Button
          type="button"
          onClick={handleStopRecording}
          className="bg-background inline-flex items-center justify-center gap-4"
        >
          <span className="block size-2 animate-pulse rounded-full bg-red-600 duration-100"></span>{" "}
          Gravando (clique para interromper)
        </Button>
      ) : (
        <Button
          type="button"
          onClick={handleSaveNote}
          className="bg-lime-600 hover:bg-lime-700 ring-lime-700 focus-visible:bg-lime-700 text-lime-50"
        >
          Salvar nota
        </Button>
      )}
    </>
  );
};
