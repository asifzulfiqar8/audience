"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../shared/Button";
import UnderlinedInput from "../shared/UnderlinedInput";
import useWindowWidth from "@/hooks/useWindowWidth";
import { socialLinks } from "@/data/data";

const MetadataFormForAlbum = () => {
  const isMobile = useWindowWidth(991);
  const router = useRouter();
  const [formData, setFormData] = useState({
    contributingArtists: "",
    series: "",
    set: "",
    collection: "",
    mood: "",
    specialThanks: "",
    virtualArtist: "",
    distributor: "",
    releaseDate: "",
    publicationDate: "",
    catalogueNumber: "",
    bitrate: "",
    masteringEngineering: "",
    producer: "",
    featuredArtist: "",
    recordingEngineer: "",
    coproducer: "",
    releaseVersion: "",
    parentalAdvisory: "",
    isrc: "",
    metadataLanguage: "",
    countryOfOrigin: "",
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  console.log("formData", formData);

  const handleNext = () => {
    router.push("/artist/packages");
  };

  return (
    <>
      <div className="mt-[42px]">
        <Label label="Social Links" />
        <div className="mt-2 flex flex-col gap-[5px]">
          {socialLinks.map((link, i) => (
            <SocialLink link={link} key={i} />
          ))}
        </div>
      </div>
      <form
        className="mt-[42px] grid grid-cols-1 lg:grid-cols-2 gap-6"
        style={{ rowGap: isMobile ? "20px" : "54px" }}
      >
        {/* Social Links */}
        <UnderlinedInput
          label="Contributing Artists"
          name="contributingArtists"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Series"
          name="series"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Set"
          name="set"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Collection"
          name="collection"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Mood"
          name="mood"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Special Thanks"
          name="specialThanks"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Virtual Artist"
          name="virtualArtist"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Distributor"
          name="distributor"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Release Date"
          name="releaseDate"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Publication Date"
          name="publicationDate"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Catalogue Number"
          name="catalogueNumber"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Bitrate"
          name="bitrate"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Mix/Mastering Engineering"
          name="masteringEngineering"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Producer"
          name="producer"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Featured Artist"
          name="featuredArtist"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Recording Engineer"
          name="recordingEngineer"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Co-Producer"
          name="coproducer"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Release Version"
          name="releaseVersion"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Parental Advisory"
          name="parentalAdvisory"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="ISRC"
          name="isrc"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Metadata Language"
          name="metadataLanguage"
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Country of Origin"
          name="countryOfOrigin"
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
    </>
  );
};

export default MetadataFormForAlbum;

const Label = ({ label }) => (
  <label className="text-black text-xs md:text-lg font-medium font-noka">
    {label}
  </label>
);

const SocialLink = ({ link }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    let newValue = e.target.value;
    newValue = newValue.replace(/^https?:\/\//, "");
    setInput(newValue);
  };
  return (
    <div className="bg-primary py-[10px] px-4 rounded-[10px] flex items-center justify-between gap-4">
      <div className="flex-1 flex items-center gap-[10px]">
        {link.icon}
        <h6 className="text-white text-xs lg:text-lg font-medium font-noka">
          {link.title}
        </h6>
        <input
          name="socialLink"
          value={`https://${input}`}
          onChange={handleChange}
          type="text"
          className="text-white text-xs font-medium font-noka bg-transparent outline-none flex-1 px-1"
        />
      </div>
      <Button
        type="button"
        text="Add"
        img="/images/default/add-white-border.png"
      />
    </div>
  );
};
