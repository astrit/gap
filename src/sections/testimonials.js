import React from "react";
import { Box } from "theme-ui";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlockTitle from "components/block-title";
import TestimonialsCard from "components/cards/testimonial-card";
import testimonialsImage1 from "assets/testimonial-1-1.png";
import testimonialsImage2 from "assets/testimonial-1-2.png";
import testimonialsImage3 from "assets/testimonial-1-3.png";
import testimonialsImage4 from "assets/testimonial-1-4.png";
import testimonialsImage5 from "assets/testimonial-1-5.png";
import testimonialsImage6 from "assets/testimonial-1-6.png";

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      // image: testimonialsImage1,
      text: "Ich bin mega zfriede mit de Reinigungsdienstleischtig vo TET. Sie händ min Wohnig gründlich und professionell glänze lah. Ich empfähl euch uf jede Fall witer. Danke TET!",
      username: "@simon.müller",
      name: "Simon Müller",
    },
    {
      // image: testimonialsImage2,
      text: "Ich bin sehr positiv überrascht gsi vo de Reinigungsdienstleischtig vo TET. Sie händ mis Büro gründlich glänze lah und es gseht jetzt viel besser us. Ich werdet euch uf jede Fall wieder beauftrage.",
      username: "@sabine.schmid",
      name: "Sabine Schmid",
    },
    {
      // image: testimonialsImage3,
      text: "Ich bin mega zfriede mit de Reinigungsdienstleischtig vo TET. Sie händ mis Huus gründlich glänze lah und es gseht jetzt wie neu us. Ich empfähl euch uf jede Fall witer.",
      username: "@andreas.brunner",
      name: "Andreas Brunner",
    },
    {
      // image: testimonialsImage4,
      text: "Ich bin sehr beeindruckt gsi vo de Reinigungsdienstleischtig vo TET. Sie händ min Wohnig gründlich und professionell glänze lah. Ich werdet euch uf jede Fall wieder beauftrage.",
      username: "@julia.schneider",
      name: "Julia Schneider",
    },
    {
      // image: testimonialsImage5,
      text: "Ich bin mega zfriede mit de Reinigungsdienstleischtig vo TET. Sie händ mis Büro gründlich glänze lah und es gseht jetzt viel besser us. Ich empfähl euch uf jede Fall witer.",
      username: "@thomas.fischer",
      name: "Thomas Fischer",
    },
    {
      // image: testimonialsImage6,
      text: "Ich bin sehr beeindruckt gsi vo de Reinigungsdienstleischtig vo TET. Sie händ mis Huus gründlich glänze lah und es gseht jetzt wie neu us. Ich werdet euch uf jede Fall wieder beauftrage.",
      username: "@sandra.meier",
      name: "Sandra Meier",
    },
    {
      // image: testimonialsImage7,
      text: "Ich bin mega zfriede mit de Reinigungsdienstleischtig vo TET. Sie händ min Wohnig gründlich und professionell glänze lah. Ich empfähl euch uf jede Fall witer.",
      username: "@peter.schweizer",
      name: "Peter Schweizer",
    },
    {
      // image: testimonialsImage8,
      text: "Ich bin sehr beeindruckt gsi vo de Reinigungsdienstleischtig vo TET. Sie händ mis Büro gründlich glänze lah und es gseht jetzt viel besser us. Ich werdet euch uf jede Fall wieder beauftrage.",
      username: "@katrin.huber",
      name: "Katrin Huber",
    },
  ],
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    speed: 1000,
    centeredSlides: false,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <BlockTitle
        title="What client say about us"
        text="Customer testimonial"
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, text, name, username }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
                username={username}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: "#F4F4F6",
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["60px", null, null, null, "80px", null, "120px"],
  },
};
