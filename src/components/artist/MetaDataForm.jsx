"use client";

import { useEffect, useState } from "react";
import UnderlinedInput from "../shared/UnderlinedInput";
import Button from "../shared/Button";
import { useRouter } from "next/navigation";
import { CdIcon, ImageIcon } from "@/app/assets/icons";

const MetaDataForm = () => {
  const router = useRouter();
  const [releaseType, setReleaseType] = useState("single");
  const [image, setImage] = useState(null);
  const [song, setSong] = useState(null);
  const [formData, setFormData] = useState({
    releaseType: "",
    songTitle: "",
    songDescription: "",
    genre: "",
    producer: "",
    songWriter: "",
    engineer: "",
    copyrightHolder: "",
    musicMetadataVersion: "",
    song,
    image,
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  console.log("formData", formData);

  const handleNext = () => {
    router.push("/artist/packages");
  };

  useEffect(() => {
    setFormData({ ...formData, image, song });
  }, [image, song]);
  return (
    <form className="mt-[42px] flex flex-col gap-5 lg:gap-[54px]">
      {/* releas type */}
      <div>
        <Label label="Select Release Type" />
        <ReleaseType
          formData={formData}
          setFormData={setFormData}
          releaseType={releaseType}
          setReleaseType={setReleaseType}
        />
      </div>
      <div>
        <Label label="Upload Image (JPG, PNG, GIF, MP4 - 1x1 Ratio)" />
        <UploadBox
          label="Drag & Drop Or Click To Upload"
          acceptedTypes={["image/*"]}
          icon={<ImageIcon />}
          file={image}
          setFile={setImage}
        />
      </div>
      <div>
        <Label label="Upload Music" />
        <UploadBox
          label="Drag & Drop Or Click To Upload"
          acceptedTypes={["audio/*"]}
          icon={<CdIcon />}
          file={song}
          setFile={setSong}
        />
      </div>
      <UnderlinedInput
        label="Song Title"
        name="songTitle"
        onChange={(e) => handleFormChange(e)}
      />
      <UnderlinedInput
        label="Song Description"
        name="songDescription"
        onChange={(e) => handleFormChange(e)}
      />
      <UnderlinedInput
        label="Genre"
        name="genre"
        onChange={(e) => handleFormChange(e)}
      />
      <UnderlinedInput
        label="Producer"
        name="producer"
        onChange={(e) => handleFormChange(e)}
      />
      <UnderlinedInput
        label="Songwriter"
        name="songWriter"
        onChange={(e) => handleFormChange(e)}
      />
      <UnderlinedInput
        label="Engineer"
        name="engineer"
        onChange={(e) => handleFormChange(e)}
      />
      <UnderlinedInput
        label="Copyright Holder"
        name="copyrightHolder"
        onChange={(e) => handleFormChange(e)}
      />
      <UnderlinedInput
        label="Music Metadata Version"
        name="musicMetadataVersion"
        onChange={(e) => handleFormChange(e)}
      />
      <div>
        <Button
          type="button"
          text="Next"
          onClick={handleNext}
          color="text-black"
          img="/images/default/view-border.png"
        />
      </div>
    </form>
  );
};

export default MetaDataForm;

const ReleaseType = ({
  releaseType,
  setReleaseType,
  formData,
  setFormData,
}) => {
  return (
    <div className="mt-1 flex gap-1">
      {["single", "album"].map((type, i) => (
        <div
          key={i}
          className={`px-4 py-[5px] md:py-[10px] capitalize cursor-pointer flex items-center justify-center gap-[10px] rounded-[10px] ${
            releaseType === type ? "bg-primary" : "bg-[#FF000033]"
          }`}
          onClick={() => {
            setReleaseType(type);
            setFormData({ ...formData, releaseType: type });
          }}
        >
          <div
            className={`size-[15px] rounded-[3px] border border-white ${
              releaseType === type ? "bg-white" : "bg-transparent"
            }`}
          ></div>
          <p
            className={`text-xs md:text-lg font-medium font-noka leading-none ${
              releaseType === type ? "text-white" : "text-textColor"
            }`}
          >
            {type}
          </p>
        </div>
      ))}
    </div>
  );
};

const Label = ({ label }) => (
  <label className="text-black text-xs md:text-lg font-medium font-noka">
    {label}
  </label>
);

const UploadBox = ({ label, acceptedTypes, icon, file, setFile }) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="w-full">
      <div
        className="mt-1 flex items-center justify-between px-4 py-[5px] md:py-[10px] rounded-[10px] bg-red-600 text-white cursor-pointer relative"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {file ? (
          <div className="flex items-center gap-3">
            {acceptedTypes.includes("image") && (
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="w-10 h-10 object-cover rounded-md"
              />
            )}
            <p className="text-white text-xs md:text-lg font-medium font-noka">
              {file.name}
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-3 w-full">
            {icon}
            <span className="text-white text-xs md:text-lg font-medium font-noka">
              Drag & Drop Or Click To Upload
            </span>
          </div>
        )}
        <input
          type="file"
          accept={
            Array.isArray(acceptedTypes)
              ? acceptedTypes.join(", ")
              : acceptedTypes
          }
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
        <UploadIcon />
      </div>
    </div>
  );
};

const UploadIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_18488)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.492 10.172L8.992 13.236L8.255 12.559L11.992 8L15.745 12.585L14.992 13.25L12.492 10.174V18H11.492V10.172ZM18.5 20H5.5C3.019 20 1 17.982 1 15.5C1 13.322 2.555 11.462 4.698 11.076L5.477 10.936L5.52 10.147C5.705 6.699 8.551 4 12 4C15.449 4 18.295 6.699 18.478 10.147L18.522 10.936L19.302 11.076C21.444 11.462 23 13.322 23 15.5C23 17.982 20.981 20 18.5 20ZM19.478 10.092C19.266 6.141 16.006 3 12 3C7.994 3 4.733 6.141 4.521 10.092C1.951 10.555 0 12.798 0 15.5C0 18.537 2.463 21 5.5 21H18.5C21.537 21 24 18.537 24 15.5C24 12.798 22.049 10.555 19.478 10.092Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_18488">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
