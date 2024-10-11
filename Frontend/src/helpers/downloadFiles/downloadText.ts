import { downloadProps } from './downloadType'

export const downloadText = ({ audioFile, editableText }: downloadProps) => {
  const element = document.createElement('a')

  const maxLengthPerLine = 80

  let lines = []
  for (let i = 0; i < editableText.length; i += maxLengthPerLine) {
    lines.push(editableText.substring(i, i + maxLengthPerLine))
  }

  const formattedText = lines.join('\n')

  const file = new Blob([formattedText], { type: 'text/plain' })

  // Check if the file name ends in ".mp3"
  let fileName = audioFile?.name
  if (fileName?.endsWith('.mp3')) {
    // If it ends in ".mp3", remove the extension from the file name
    fileName = fileName?.slice(0, -4)
  }

  element.href = URL.createObjectURL(file)
  element.download = fileName + '.txt'
  document.body.appendChild(element)
  element.click()
}
