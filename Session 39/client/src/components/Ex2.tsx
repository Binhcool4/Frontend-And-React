import { useState } from "react";
import axios from "axios";

export default function UploadMultiple() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      alert("Vui lòng chọn ít nhất 1 ảnh!");
      return;
    }

    try {
      const uploadPromises = files.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "Huidinne");

        return axios.post(
          `https://api.cloudinary.com/v1_1/dd9h0o4e3/image/upload`,
          formData
        );
      });
      const results = await Promise.all(uploadPromises);

      setUploadedUrls(results.map((res) => res.data.secure_url));
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h3> Nhiều ảnh lên Cloudinary</h3>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} style={{ marginLeft: 10 }}>
        Upload
      </button>

      {uploadedUrls.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {uploadedUrls.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt="uploaded"
                style={{
                  width: 150,
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
