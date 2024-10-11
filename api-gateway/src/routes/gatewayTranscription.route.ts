import { Router } from 'express'
import type { Request, Response } from 'express'
import axios from 'axios'
import multer from 'multer'
import FormData from 'form-data'

const gatewayTranscriptionRoute = Router()
const upload = multer() // Configura multer para manejar la carga de archivos

gatewayTranscriptionRoute.get('/', (req: Request, res: Response) => {
  try {
    const response = {
      message: 'transcription web',
    }
    return res.status(200).json(response)
  } catch (error: any) {
    return res.status(500).json({ error: error.message })
  }
})

gatewayTranscriptionRoute.post(
  '/',
  upload.single('audiofile'),
  async (req: Request, res: Response) => {
    try {
      const url = 'http://127.0.0.1:8000/transcription' // URL del backend FastAPI

      const formData = new FormData()
      if (req.file) {
        formData.append('audiofile', req.file.buffer, req.file.originalname)
      }
      formData.append('language', req.body.language)
      formData.append('filename', req.body.filename)

      // Enviar solicitud POST al backend FastAPI usando axios
      const response = await axios.post(url, formData, {
        headers: {
          ...formData.getHeaders(), // Configura los encabezados para `multipart/form-data`
        },
      })

      // Enviar respuesta de vuelta al cliente
      res.status(response.status).json(response.data)
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
  }
)

export default gatewayTranscriptionRoute

// gatewayTranscriptionRoute.get('/', (req: Request, res: Response) => {
//   try {
//     const response = {
//       message: 'transcription web',
//     }
//     return res.status(200).json(response)
//   } catch (error: any) {
//     return res.status(500).json({ error: error.message })
//   }
// })

// router.get('/:id', getUsers);

// // /api/users
// router.post('/', createUser)

// // Get: List of all Authors
// authorRouter.get('/', async (request: Request, response: Response) => {
//   try {
//     const authors = await AuthorService.listAuthors()
//     return response.status(200).json(authors)
//   } catch (error: any) {
//     return response.status(500).json(error.message)
//   }
// })

// // GET: A single author
// authorRouter.get('/:id', async (request: Request, response: Response) => {
//   const id: number = parseInt(request.params.id, 10)
//   try {
//     const author = await AuthorService.getAuthor(id)
//     if (author) {
//       return response.status(200).json(author)
//     }
//     return response.status(404).json('Author could not be found')
//   } catch (error: any) {
//     return response.status(500).json(error.message)
//   }
// })

// // estos body('') pueden ser cambiados similar a como haciamos en nextjs
// // POST: Create a Author
// // Params: firstName, lastName
// authorRouter.post(
//   '/',
//   body('firstName').isString(),
//   body('lastName').isString(),
//   async (request: Request, response: Response) => {
//     const errors = validationResult(request)
//     if (!errors.isEmpty()) {
//       return response.status(400).json({ errors: errors.array() })
//     }
//     try {
//       const author = request.body
//       const newAuthor = await AuthorService.createAuthor(author)

//       // HTTP status code 201 means "Created"
//       return response.status(201).json(newAuthor)
//     } catch (error: any) {
//       return response.status(500).json(error.message)
//     }
//   }
// )

// // estos body('') pueden ser cambiados similar a como haciamos en nextjs
// // PUT: Updating an Author
// // Params: firstName, lastName
// authorRouter.put(
//   '/:id',
//   body('firstName').isString(),
//   body('lastName').isString(),
//   async (request: Request, response: Response) => {
//     const errors = validationResult(request)
//     if (!errors.isEmpty()) {
//       return response.status(400).json({ errors: errors.array() })
//     }
//     const id: number = parseInt(request.params.id, 10)
//     try {
//       const author = request.body
//       const updatedAuthor = await AuthorService.updateAuthor(author, id)
//       return response.status(200).json(updatedAuthor)
//     } catch (error: any) {
//       return response.status(500).json(error.message)
//     }
//   }
// )

// // DELETE: Delete an author based on the id
// authorRouter.delete('/:id', async (request: Request, response: Response) => {
//   const id: number = parseInt(request.params.id, 10)
//   try {
//     await AuthorService.deleteAuthor(id)
//     return response.status(204).json('Author has been successfully deleted')
//   } catch (error: any) {
//     return response.status(500).json(error.message)
//   }
// })
