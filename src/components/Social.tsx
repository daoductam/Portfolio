import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { link } from "fs";

const Social = () => {
  const socialLink = [
    { link: "https://github.com/daoductam", icon: IconBrandGithub },
    {
      link: "https://www.linkedin.com/in/t%C3%A2m-%C4%91%E1%BB%A9c-%C4%91%C3%A0o-084a5431b/",
      icon: IconBrandLinkedin,
    },
    {
      link: "https://www.youtube.com/@HocCungTam",
      icon: IconBrandYoutube,
    },
    {
      link: "https://www.facebook.com/tam.ao.368640/",
      icon: IconBrandFacebook,
    },
  ];
  const socialIcons = socialLink.map((socialLink) => {
    return (
      <a
        href={`${socialLink.link}`}
        target="_blank"
        className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out"
      >
        <div data-aos="fade-up-left" data-aos-duration="800" className="">
          <socialLink.icon className="-rotate-90" size={30} />
        </div>
      </a>
    );
  });
  return (
    <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-32 -left-44 rotate-90 ">
      {socialIcons}
      <hr className="border-[2px] w-40 rounded-full bg-textColor border-textColor" />
    </div>
  );
};
export default Social;
