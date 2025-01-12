import Image from "next/image";
import { siteConfig } from "@/data/site-config";

const Logo = () => {
  return <Image src={siteConfig.logo} alt="logo" width={32} height={32} />;
};

export default Logo;
