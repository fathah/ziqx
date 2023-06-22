import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm } from 'formidable';
import sharp from 'sharp';


// dummy storage instace
let storage:any = {}
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function uploadHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  const form = new IncomingForm();
  form.parse(req, async (err:any, fields:any, files:any) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const { file } = files;

    if (!file || !file.path) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    try {
      const filePath = file.path;
      const fileName = file.name;

      // Compress and resize the image
      const image = sharp(filePath);

      const metadata = await image.metadata();
      const { width, height } = metadata;

      let resizedImage: sharp.Sharp;

      if (height! <= 1000) {
        // If height is less than or equal to 1000, keep original dimensions and compress
        resizedImage = image.jpeg({ quality: 80 });
      } else {
        // If height exceeds 1000, adjust width proportionally
        const newWidth = Math.round((width! * 1000) / height!);
        resizedImage = image.resize({ width: newWidth, height: 1000 }).jpeg({ quality: 80 });
      }

      const resizedBuffer = await resizedImage.toBuffer();

      // Upload the processed image to Firestore storage
      const bucket = storage.bucket('your-bucket-name');
      const fileRef = bucket.file(fileName);

      await fileRef.save(resizedBuffer, {
        metadata: {
          contentType: 'image/jpeg', // Adjust the content type based on the image format
        },
      });

      // Get the public URL of the uploaded image
      const publicUrl = await fileRef.getSignedUrl({
        action: 'read',
      });

      res.status(200).json({ imageUrl: publicUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
}
