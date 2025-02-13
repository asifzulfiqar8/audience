import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  Youtube,
} from "@/app/assets/icons";
import Paragraph from "../shared/Paragraph";
import Link from "next/link";
import Image from "next/image";
import Form from "./Form";

const socialLinks = [
  { url: "", icon: <Youtube /> },
  { url: "", icon: <FacebookIcon /> },
  { url: "", icon: <TelegramIcon /> },
  { url: "", icon: <InstagramIcon /> },
];

const GetInTouch = () => {
  return (
    <section className="w-full bg-white">
      <section className="container mx-auto px-10 pt-[30px] pb-[60px] lg:py-[120px] grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="order-2 lg:order-1 mt-[60px] lg:mt-0 lg:col-span-5">
          <div className="p-10 rounded-[20px] bg-[url('/images/contact/form-bg.png')] bg-no-repeat bg-cover bg-center">
            <Paragraph text="Have questions, feedback, or want to learn more about how Audience can support your music journey? We’d love to hear from you! Whether you’re an artist looking to distribute your music, a fan curious about our platform, or a partner interested in collaboration, our team is here to help. Reach out today, and let’s create something incredible together." />
            <div className="mt-[42px] flex items-center justify-center md:justify-start gap-4 social-links">
              {socialLinks.map((link, i) => (
                <SocialLink key={i} link={link} />
              ))}
            </div>
          </div>
          <div className="mt-[44px] hidden lg:block">
            <Image
              src="/images/contact/available-now.png"
              width={501}
              height={273}
              className="w-full h-auto"
              alt="image"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-7">
          <Form />
        </div>
      </section>
    </section>
  );
};

export default GetInTouch;

const SocialLink = ({ link }) => {
  return <Link href={link.url}>{link.icon}</Link>;
};
