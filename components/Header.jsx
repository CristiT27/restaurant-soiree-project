"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";

function Header() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        // Detect scroll
        setActive(window.scrollY > 100);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        active ? "bg-black py-4" : "bg-none py-8"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        {/* logo, nav, btn */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/">
            <Image
              src="/assets/hero/logo.svg"
              width={140}
              height={95}
              alt="Logo"
            />
          </Link>
          {/* nav */}
          <Nav
            containerStyles="hidden xl:flex gap-x-12 text-white"
            linkStyles={"capitalize"}
          />
          {/* btn */}
          <ScrollLink to="reservation" smooth={true}>
            <Button variant="orange" size="sm">
              Book a table
            </Button>
          </ScrollLink>

          {/* mobile nav */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
