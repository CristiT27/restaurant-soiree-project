"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const menu = [
  {
    img: "/assets/menu/gourmet_plate.jpg",
    title: "Lobster, carrot purée, caviar and buttermilk purée",
    price: "35€",
  },
  {
    img: "/assets/menu/seafood.jpg",
    title: "Seafood Specials",
    price: "23€",
  },
  {
    img: "/assets/menu/beef.jpg",
    title: "Beef Tenderloin with Red Wine Sauce",
    price: "27€",
  },
  {
    img: "/assets/menu/crumble_mousse.jpg",
    title: "Chocolate Mousse with Biscuit Crumble and Raspberry",
    price: "10€",
  },
];

function Menu() {
  return (
    <section className="relative py-16 xl:py-24" id="menu">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-[570px] mx-auto text-center xl:text-right"
        >
          <h2 className=" mb-3">Favorite Menu</h2>
          <Link
            href="/"
            className="text-green flex justify-center xl:justify-end items-center mb-16"
          >
            View All
            <IoIosArrowRoundForward className="text-3xl" />
          </Link>
        </motion.div>
        {/* menu grid */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4"
        >
          {menu.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[270px] bg-white shadow-primary mx-auto xl:mx-0 group"
              >
                {/* images */}
                <div className="overflow-hidden">
                  <Image
                    src={item.img}
                    width={270}
                    height={270}
                    alt=""
                    className="group-hover:scale-110 transition-all duration-300"
                  />
                </div>

                {/* title & price*/}

                <div className="pt-[20px] pb-[28px] px-[30px] xl:flex xl:flex-col xl:justify-between xl:h-[200px]">
                  <Link href="/">
                    <h3 className="font-poppins text-black mb-[14px]">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="text-xl font-poppins font-semibold text-orange">
                    {item.price}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Menu;
