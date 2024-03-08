import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <>
      <Image
        className="swiper-image"
        src="/carousel-image.png"
        width={254}
        height={243}
        alt="caoruselimg"
      />
    </>
  );
};

export default Card;
