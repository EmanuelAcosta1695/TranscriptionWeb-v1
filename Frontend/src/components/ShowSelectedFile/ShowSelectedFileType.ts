export type showSelectFileProps = {
  clearFileAndNotification: () => void
  audioFile: File
  setAudioFile: (file: File | null) => void
}
