"use client";
import { UploadIcon } from "@/app/assets/icons";
import { useRef, useState } from "react";

const UploadImage = ({ imagePreview, setImagePreview }) => {
  const imgRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      previewImage(selectedFile);
    }
  };

  // Handle drag over
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragActive(true);
  };

  // Handle drag leave
  const handleDragLeave = () => {
    setDragActive(false);
  };

  // Handle drop
  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      previewImage(droppedFile);
    }
  };

  // Preview image
  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

  return (
    <div
      className={`w-full h-[400px] bg-[url('/images/artist/signup.png')] bg-center bg-cover bg-no-repeat rounded-[20px] relative border-2 ${
        dragActive ? "border-blue-400 bg-blue-100" : "border-gray-300"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => imgRef.current.click()}
    >
      <div className="absolute inset-0 size-full grid place-items-center cursor-pointer">
        <div>
          <span className="text-center text-white text-[10px] font-medium font-noka">
            Upload Profile Image (JPG, PNG, GIF, MP4 - 1x1 Ratio)
          </span>
          <h6 className="text-white text-center text-xs md:text-lg font-medium font-noka">
            Drag & Drop Or Click To Upload <br />
            Your Profile Image
          </h6>
          <div className="mt-5 flex justify-center">
            <UploadIcon />
          </div>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        ref={imgRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadImage;
