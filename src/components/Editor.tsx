import { ChangeEvent } from "react";

interface EditorProps {
  handleStartRecording: () => void;
  handleStartEditor: () => void;
  handleContentChanged: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  shouldShowOnboarding: boolean;
  content: string;
}

export const Editor = ({
  shouldShowOnboarding,
  handleStartRecording,
  handleContentChanged,
  handleStartEditor,
  content,
}: EditorProps) => {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h4>Adicionar nota</h4>
      {shouldShowOnboarding ? (
        <p>
          Comece{" "}
          <button
            type="button"
            onClick={handleStartRecording}
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
          value={content}
          onChange={handleContentChanged}
          autoFocus
          className="text-sm leading-6 bg-transparent outline-none resize-none flex-1 ring-2 p-2 rounded-md ring-background"
        />
      )}
    </div>
  );
};
