import jsPDF from 'jspdf'
import { downloadProps } from './downloadType'

export const downloadPdf = ({ audioFile, editableText }: downloadProps) => {
  const pdf = new jsPDF()

  pdf.setFontSize(12)
  pdf.setFont('times', 'normal')

  const lines = editableText.match(/.{1,110}/g)

  lines?.forEach((line, index) => {
    pdf.text(line, 10, 10 + index * 10)
  })

  // Check if the file name ends in ".mp3"
  let fileName = audioFile?.name
  if (fileName?.endsWith('.mp3')) {
    // If it ends in ".mp3", remove the extension from the file name
    fileName = fileName?.slice(0, -4)
  }

  pdf.save(fileName + '.pdf')
}
