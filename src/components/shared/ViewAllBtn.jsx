import Image from "next/image";
import Link from "next/link";

const ViewAllBtn = ({ url, color, text = "View All" }) => {
  return (
    <Link
      href={url}
      className={`uppercase text-xs md:text-lg font-noka font-bold relative w-full block text-center ${
        color ? color : "text-textColor"
      }`}
    >
      {text}
      <Image
        src="/images/default/merch-viewall-border.png"
        width={1500}
        height={9}
        className="absolute -bottom-[4px] left-0"
        alt="button-border-img w-full"
      />
    </Link>
  );
};

export default ViewAllBtn;
