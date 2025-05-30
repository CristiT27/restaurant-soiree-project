"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "next/image";
import { Button } from "./ui/button";

function About() {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center"
      id="about"
    >
      {/* text */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="xl:pl-[135px] pt-16 px-4 sm:px-8"
      >
        <h1 className="mb-9">About Soirée..</h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          consequatur eveniet quisquam ipsa ea nam quos, ratione officiis est
          tempore enim! Deleniti quam, ipsam suscipit odio esse ducimus ratione
          quisquam, tempore veritatis excepturi, adipisci harum!
        </p>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          aspernatur unde accusamus iste a, quia cum beatae consectetur,
          doloribus earum incidunt nostrum est tenetur aliquid delectus natus
          ratione, assumenda non fugiat amet.
        </p>
        <Button>Read more</Button>
      </motion.div>
      {/* image */}
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/assets/about/kitchen.png"
          width={705}
          height={771}
          alt=""
          className="hidden xl:flex"
        />
      </motion.div>
    </section>
  );
}

export default About;
