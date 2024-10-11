export type DownloadButtonType = {
  nameFunction: string
  downloadFunction: ({
    audioFile,
    editableText,
  }: DownloadButtonArguments) => void
  audioFile: File
  editableText: string
}

type DownloadButtonArguments = {
  audioFile: File
  editableText: string
}
