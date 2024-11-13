import Link from "next/link";
import { FaLinkedin, FaGithub, FaItchIo } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/hualiang-zhao-87b076228/",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/HualiangZ",
  },
  {
    icon: <FaItchIo />,
    path: "https://hualiangz.itch.io",
  },
];

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
        return (
            <Link href={item.path} key={index} className={iconStyles} target="_blank">
                <span>{item.icon}</span>
            </Link>
        )
    })}
  </div>;
};

export default Socials;
