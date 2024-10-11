import { Document, Packer, Paragraph, TextRun } from 'docx'
import { downloadProps } from './downloadType'

export const downloadWord = ({ audioFile, editableText }: downloadProps) => {
  const doc = new Document({
    creator: 'TranscriptionWeb',
    title: audioFile?.name,
    description: 'Transcribed text',
    sections: [
      {
        children: [
          new Paragraph({
            children: [new TextRun(editableText)],
          }),
        ],
      },
    ],
  })

  Packer.toBlob(doc).then((blob) => {
    const downloadLink = document.createElement('a')
    downloadLink.href = URL.createObjectURL(blob)

    // Check if the file name ends in ".mp3"
    let fileName = audioFile?.name
    if (fileName?.endsWith('.mp3')) {
      // If it ends in ".mp3", remove the extension from the file name
      fileName = fileName?.slice(0, -4)
    }

    downloadLink.download = fileName + '.docx'

    document.body.appendChild(downloadLink)
    downloadLink.click()
  })
}
