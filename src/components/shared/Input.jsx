const Input = ({ label, type = "text", ...rest }) => {
  return (
    <div className="w-full">
      <label className="text-black text-xs md:text-lg font-medium font-noka">
        {label}
      </label>
      <input
        type={type}
        {...rest}
        className="w-full outline-none bg-[#D9D9D980] rounded-[10px] h-[34px] px-4 text-black text-xs md:text-lg font-medium font-noka mt-[5px]"
      />
    </div>
  );
};

export default Input;
