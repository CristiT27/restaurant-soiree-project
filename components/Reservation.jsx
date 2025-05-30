"use client";

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import ReservationForm from "./ReservationForm";

function Reservation() {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="pt-20 my-12 xl:my-32 xl:h-[1020px] xl:bg-reservation xl:bg-no-repeat xl:flex xl:flex-col xl:justify-end xl:items-end"
      id="reservation"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-black max-w-md md:max-w-lg min-h-[400px] xl:max-w-[868px] min-h-[518px] p-6 sm:p-10 text-center md:p-14 xl:p-16"
      >
        <h2 className="text-white mb-6 text-lg capitalize">Book a table</h2>
        <ReservationForm />
      </motion.div>
    </motion.section>
  );
}

export default Reservation;
