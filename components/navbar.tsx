'use client'

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "@/config/auth/firebaseConfig";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState<null | User>(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("signUp successfully", user);

      router.push("/blog");
    } catch (error) {
      console.error(error);
    }
  };
  const signOut = async () => {
    try {
      await auth.signOut();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <NextUINavbar maxWidth="2xl" position="sticky" className="h-[5rem] dark:bg-gray-950 bg-gray-200 shadow-md   shadow-slate-400 dark:shadow-slate-800">
      <NavbarContent>

        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-3" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full " justify="center">

        <ul className="hidden md:flex w-full justify-around ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium text-lg",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
          

        </NavbarItem>
        
        {
            user && user.photoURL && (
              <Image alt="User Photo" src={user.photoURL} width={40} height={40} className="rounded-full" />
            )
          }

        
        <NavbarItem className="hidden sm:flex gap-2">
          {
            user ? (
              <Button variant="shadow" onClick={signOut}>
                Logout
              </Button>
            ) : (
              <Button variant="shadow" onClick={signIn}>
                Login
              </Button>
            )
          }
        </NavbarItem>

      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        {
            user && user.photoURL && (
              <Image alt="User Photo" src={user.photoURL} width={40} height={40} className="rounded-full" />
            )
          }

        <NavbarItem >
          {
            user ? (
              <Button variant="shadow" onClick={signOut}>
                Logout
              </Button>
            ) : (
              <Button variant="shadow" onClick={signIn}>
                Login
              </Button>
            )
          }
        </NavbarItem>

        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    :  "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
         
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
