export type TextareaProps = {
  editableText: string
  handleTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  setText: (text: string) => void
  setAudioFile: (file: File | null) => void
}
