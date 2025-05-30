"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

//leaflet css
import "leaflet/dist/leaflet.css";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const markers = [
  {
    position: [45.484544, 25.565746],
    title: "Location 1",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates inventore alias molestiae",
    image: "/assets/map/restaurant1.png",
  },
  {
    position: [45.806151, 21.136213],
    title: "Location 2",
    subtitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates inventore alias molestiae",
    image: "/assets/map/restaurant2.png",
  },
];

const customIcon = new Icon({
  iconUrl: "/assets/map/pin.svg",
  iconSize: [40, 40],
});

function Map() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <motion.section
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      id="contact"
      className="relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20"
    >
      <MapContainer
        center={[46.024017, 24.982321]}
        zoom={isMobile ? 6 : 7}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* markers */}

        {markers.map((marker, index) => {
          return (
            <Marker key={index} position={marker.position} icon={customIcon}>
              <Popup>
                <div className="flex gap-x-[30px]">
                  <div className="flex-1">
                    <h3>{marker.title}</h3>
                    <p className="leading-snug">{marker.subtitle}</p>
                  </div>
                  <div className="flex-1">
                    <Image src={marker.image} width={130} height={160} alt="" />
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </motion.section>
  );
}

export default Map;
