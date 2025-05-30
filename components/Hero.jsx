"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section
      className="bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0"
      id="home"
    >
      <div className="container mx-auto">
        {/* text & img */}
        <div className="flex items-center xl:h-[960px]">
          {/* text */}
          <div className="w-full xl:max-w-[460px] text-center xl:text-left">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-7"
            >
              A taste of local <br /> flavors
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white font-semibold mb-7"
            >
              by: <span className="text-orange">CRT</span>
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-12 max-2-lg mx-auto xl:max-w-none xl:mx-0"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              saepe nulla ex! Impedit eveniet ullam repellat, molestiae
              voluptatibus perferendis dolorem omnis qui. Sit similique veniam
              quidem, beatae impedit sed quia!
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Button>Our menu</Button>
            </motion.div>
          </div>
          {/* plate image */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="hidden xl:flex xl:absolute xl:top-[200px] xl:right-0"
          >
            <Image
              src="/assets/hero/plate.png"
              width={756}
              height={682}
              alt=""
            />
          </motion.div>
        </div>
        {/* coffee image */}
        <motion.div
          variants={fadeIn("down", 1.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="hidden xl:flex xl:relative xl:-top-40"
        >
          <Image
            src="/assets/hero/coffee.png"
            width={486}
            height={504}
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
