"use client";
import { useState } from "react";
import Button from "../shared/Button";
import UnderlinedInput from "../shared/UnderlinedInput";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("formData", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <form
      className="border border-[#00071D] rounded-[20px] w-full p-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h4 className="text-[20px] md:text-[50px] lg:text-[80px] font-bold font-noka text-black">
        Get In Touch
      </h4>
      <div className="mt-8 flex flex-col gap-8">
        <UnderlinedInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={(e) => handleFormChange(e)}
        />
        <UnderlinedInput
          label="Email"
          type="Email"
          name="email"
          value={formData.email}
          onChange={(e) => handleFormChange(e)}
        />
        <div className="w-full">
          <label className="text-black text-xs md:text-lg font-medium font-noka">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) => handleFormChange(e)}
            className="w-full outline-none bg-transparent h-[34px] text-black text-xs md:text-lg font-medium font-noka mt-[5px] border-b border-black"
            rows={4}
            columns={12}
          />
        </div>
        <div>
          <Button
            text="Submit"
            img="/images/default/submit-border.png"
            color="text-black"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
