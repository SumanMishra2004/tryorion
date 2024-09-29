import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Home1 from "@/components/Home/Home1";
import { MarqueeDemo } from "@/components/Home/Maquee";
import Home2 from "@/components/Home/Home2";
import Home3 from "@/components/Home/Home3";
import Home4 from "@/components/Home/Home4";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Home1/>
      <MarqueeDemo/>
      <Home2/>
      <Home3/>
      <Home4/>
    </div>
  );
}
