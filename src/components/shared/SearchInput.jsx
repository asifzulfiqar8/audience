import { SearchIcon } from "@/app/assets/icons";

const SearchInput = ({ ...rest }) => {
  return (
    <div className="flex items-center gap-1 bg-white rounded-[5px] w-[310px] sm:w-[459px] h-[32px] px-3">
      <input
        type="search"
        {...rest}
        className="bg-transparent outline-none w-full text-textColor text-sm font-medium font-noka"
      />
      <SearchIcon />
    </div>
  );
};

export default SearchInput;
