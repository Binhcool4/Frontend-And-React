import axios from 'axios';

export async function uploadImageFromUrl(sourceUrl: string): Promise<string> {
  const cloudName = "dd9h0o4e3";
  const uploadPreset = "Huidinne";
  const formData = new FormData();
  formData.append("file", sourceUrl.trim());
  formData.append("upload_preset", uploadPreset);

  try {
    const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData);
    const data = res.data;
    if (!data.secure_url) {
      const msg = data.error.message || "Upload failed";
      throw new Error(msg);
    }
    return data.secure_url as string;
  } catch (err: any) {
    const msg = err.response.data.error.message || err.message || 'Upload failed';
    throw new Error(msg);
  }
}
