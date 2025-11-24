'use server'

export async function uploadImage(bytes: ArrayBuffer, fileName: string): Promise<string> {
  const formData = new FormData()
  formData.append('file', new Blob([new Uint8Array(bytes)]), fileName)
  formData.append('fileName', fileName)

  const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${process.env.IMAGEKIT_PRIVATE_KEY}:`).toString("base64")}`,
    },
    body: formData,
  })

  if (!response.ok) {
    throw new Error('Failed to upload image')
  }

  const data = await response.json()
  return data.url
}