import { cn } from "../lib/utils";
import logo from "../src/images/logo.svg";

import discord from "../src/images/socials/discord.svg";
import github from "../src/images/socials/github.svg";
import instagram from "../src/images/socials/instagram.svg";
import linkedin from "../src/images/socials/linkedin.svg";
import medium from "../src/images/socials/medium.svg";
import telegram from "../src/images/socials/telegram.svg";
import twitter from "../src/images/socials/twitter.svg";
import youtube from "../src/images/socials/youtube.svg";

const Products = [
  {
    title: "DEX (aeSwap)",
    link: "#",
  },
  {
    title: "Wallet (aeWallet)",
    link: "#",
  },
  {
    title: "Bridge (aeBridge)",
    link: "#",
  },
  {
    title: "Explorer (aeExplorer)",
    link: "#",
  },
  {
    title: "Biometric cold wallet",
    link: "#",
  },
];

const Ressources = [
  {
    title: "Knowledge center",
    link: "#",
  },
  {
    title: "White paper",
    link: "#",
  },
  {
    title: "Technical paper",
    link: "#",
  },
];

const General = [
  {
    title: "Contact Us",
    link: "#",
  },
  {
    title: "Terms of Use",
    link: "#",
  },
  {
    title: "Privacy Policy",
    link: "#",
  },
];

const Socials = [
  {
    title: "Medium",
    link: "https://medium.com/archethic",
    icon: medium,
  },
  {
    title: "Discord",
    link: "https://discord.com/invite/bZv9aHN7bd",
    icon: discord,
  },
  {
    title: "GitHub",
    link: "https://github.com/archethic-foundation",
    icon: github,
  },
  {
    title: "Telegram",
    link: "https://t.me/ArchEthic_ENG",
    icon: telegram,
  },
  {
    title: "Twitter",
    link: "https://x.com/archethic",
    icon: twitter,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/company/archethic-technologies/",
    icon: linkedin,
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com/channel/UCmP7Sg_TdBfbO1_u4EyIKzg",
    icon: youtube,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/the_official_archethic/",
    icon: instagram,
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-[50px] px-[25px] lg:px-[60px] 2xl:px-[80px] py-[32px]">
      <div className=" flex flex-col lg:flex-row gap-[32px] lg:gap-[50px]">
        <div className="flex flex-col  items-center gap-[24px] lg:gap-[14px] lg:w-1/3 lg:items-start">
          <img
            src={logo}
            alt="logo"
            className="w-[181.86px] h-[30px] lg:w-[212.17px] lg:h-[35px]"
          />
          <p className="font-medium text-center lg:text-left text-16 2xl:text-18">
            Access your private keys, your digital identity and your finances
            with the tip of your fingers.
          </p>
        </div>
        <div className="flex flex-col gap-[8px] sm:flex-row lg:w-2/3">
          <FooterLinks className="sm:w-1/3" title="Products" links={Products} />
          <div className="flex gap-[50px] justify-between sm:w-2/3">
            <FooterLinks
              className="flex w-[145px] sm:w-1/2"
              title="Ressources"
              links={Ressources}
            />
            <FooterLinks
              className="flex w-[145px] sm:w-1/2"
              title="General"
              links={General}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[14px]">
        <div className="flex gap-[10px] lg:gap-[14px] justify-center">
          {Socials.map((social, index) => (
            <a href={social.link} key={index} target="_blank">
              <img
                src={social.icon}
                alt={social.title}
                className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px]"
              />
            </a>
          ))}
        </div>
        <p className="text-muted-dark text-center text-16">
          2024 ©Archethic. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export function FooterLinks({
  title,
  links,
  className,
}: {
  title: string;
  links: { title: string; link: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center lg:items-start gap-[9px] col-span-12 p-[10px]",
        className
      )}
    >
      <p className="font-medium text-18 lg:text-22 uppercase">{title}</p>
      {links.map((link, index) => (
        <a
          href={link.link}
          key={index}
          className="text-14 lg:text-16 2xl:text-18  text-muted-dark"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}
