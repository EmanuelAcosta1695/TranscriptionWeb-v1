import { traslateTextType } from './traslateTextType'
import { languagesObject } from './languagesObject'

export const translateText = async ({
  text,
  targetLanguage,
  language,
}: traslateTextType): Promise<string | null> => {
  const sourceLangCode = languagesObject[language] || 'auto'
  const targetLangCode = languagesObject[targetLanguage] || 'auto'

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLangCode}&tl=${targetLangCode}&dt=t&q=${encodeURI(
    text
  )}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log('Response data:', data)

    if (
      Array.isArray(data) &&
      Array.isArray(data[0]) &&
      Array.isArray(data[0][0])
    ) {
      return data[0][0][0]
    } else {
      console.error('Unexpected response format:', data)
      return null
    }
  } catch (error) {
    console.error('Error al traducir el texto:', error)
    return null
  }
}
