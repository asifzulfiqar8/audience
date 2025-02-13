const UnderlinedInput = ({ label, labelCenter, type = "text", ...rest }) => {
  return (
    <div className="w-full">
      <label
        className={`text-black text-xs md:text-lg font-medium font-noka ${
          labelCenter && "text-center block md:text-left"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        {...rest}
        className="w-full outline-none bg-transparent h-[34px] text-black text-xs md:text-lg font-medium font-noka mt-[5px] border-b border-black"
      />
    </div>
  );
};

export default UnderlinedInput;
