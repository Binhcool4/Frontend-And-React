import { useState } from "react";
import axios from "axios";

export default function UploadSingle() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Chọn file trước!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Huidinne");

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/dd9h0o4e3/image/upload`,
        formData
      );
      setUploadedUrl(res.data.secure_url);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h3> 1 ảnh lên Cloudinary</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: 10 }}>
        Upload
      </button>
      {uploadedUrl && (
        <div style={{ marginTop: 20 }}>
          <img
            src={uploadedUrl}
            alt="uploaded"
            style={{ maxWidth: 300, borderRadius: 8 }}
          />
        </div>
      )}
    </div>
  );
}
