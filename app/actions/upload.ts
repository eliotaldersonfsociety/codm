'use server'

export async function uploadImage(bytes: ArrayBuffer, fileName: string): Promise<string> {
  const formData = new FormData()
  formData.append('file', new Blob([new Uint8Array(bytes)]), fileName)
  formData.append('fileName', fileName)

  if (!process.env.IMAGEKIT_PRIVATE_KEY) {
    throw new Error('IMAGEKIT_PRIVATE_KEY not configured')
  }

  const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${process.env.IMAGEKIT_PRIVATE_KEY}:`).toString('base64')}`,
    },
    body: formData,
  })

  if (!response.ok) {
    const text = await response.text().catch(() => '')
    console.error('Upload failed response:', response.status, text)
    throw new Error('Failed to upload image')
  }

  const data = await response.json()
  return data.url
}