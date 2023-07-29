import { json } from '@sveltejs/kit'
import { CLOUDINARY_URL, CLOUDINARY_UPLOAD_PRESET } from '$env/static/private'

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const data = await request.formData()
  const file = data.get('file')

  const body = new FormData()
  body.append('file', file)
  body.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

  const res = await fetch(CLOUDINARY_URL, {
    method: 'POST',
    body
  })

  if (res.ok) {
    const data = await res.json()
    return json({ imageSrc: data.secure_url })
  }
}
