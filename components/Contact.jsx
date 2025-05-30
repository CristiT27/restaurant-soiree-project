"use client";
import { motion } from "framer-motion";
import { FaPhone, FaMapPin, FaEnvelope } from "react-icons/fa";

const experience = {
  boxes: [
    {
      item: FaPhone,
      value: "+0123456789",
    },
    {
      item: FaEnvelope,
      value: "soireecuisine@abcdemail.com",
    },
    {
      item: FaMapPin,
      value: "Country, City, Street, 123",
    },
  ],
};

function Contact() {
  return (
    <section id="contact">
      <motion.div>
        <div className="w-full bg-white p-8 rounded-2xl shadow-lg text-black flex flex-col items-center">
          <h3 className="text-4xl font-bold mb-6 text-center">Contact Us</h3>
          <ul className="space-y-6 w-full max-w-[600px]">
            {experience.boxes.map((box, index) => (
              <li key={index} className="flex items-center gap-4 text-left">
                <div className="text-black text-3xl">
                  <box.item />
                </div>
                <span className="text-lg text-black/80">{box.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
