import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useMediaPredicate } from "react-media-hook";

import "./processSecton.css";

const ProcessSection = ({ otherClasses }) => {
  const cardsData = [
    {
      heading: "What is Lorem Ipsum?",
      subHeading:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/gift.png",
    },
    {
      heading: "Why do we use it?",
      subHeading:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      image: "/gift2.png",
    },
    {
      heading: "Where does it come from?",
      subHeading:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
      image: "/gift.png",
    },
    {
      heading: "Where can I get some?",
      subHeading:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      image: "/gift2.png",
    },
  ];
  const isDesktop = useMediaPredicate("(min-width: 1024px)");

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  const horizontalSection = useRef();

  useEffect(() => {
    if (isDesktop) {
      const slider = document.querySelector(".horizontal-section");
      let moveAmount = slider.scrollWidth - slider.offsetWidth;
      const ctx = gsap.context(() => {
        gsap.to(slider, {
          x: "-" + moveAmount,
          marginTop: "95px",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: horizontalSection.current,
            pin: true,
            start: "top 5px",
            end: "+=500%",
            scrub: 0.5,
          },
        });
      }, horizontalSection);

      gsap.to(".progress_bar", {
        value: 100,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSection.current,
          start: "top 5px",
          end: "+=450%",
          scrub: 0.3,
        },
      });
      
      return () => ctx.revert();
    }
  }, [isDesktop]);

  const processSectionClasses = clsx(
    otherClasses,
    "w-full bg-gray-50 pb-[80px] pt-[54px] lg:py-20 main_container_process_section relative overflow-x-clip mt-[-60px] sm:mt-[-100px] lg:mt-[-50px] xl:mt-[-90px]"
  );

  return (
    <section
      ref={horizontalSection}
      className={processSectionClasses}
      data-testid="process-section"
    >
      <div className="max-w-[1862px] mx-auto w-full px-5 lg:px-20 lg:pb-20 xl:px-[162px] relative">
        <h1 className="text-primary_heading_color font-DmSerifDisplay font-normal">
          Our <span className="text-primary_teal_600">Recipe</span> for Success
        </h1>
        <p className="opacity-50">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <div className="horizontal-section flex flex-col lg:flex-row mt-16 gap-10 lg:gap-20">
          {cardsData?.map(({ heading, subHeading, image }, index) => {
            return (
              <div key={index} className="lg:flex-[1_0_45%]">
                <img src={image} alt="card-image" />
                <h5 className="mt-6 mb-4 font-DmSans font-bold text-primary_heading_color">
                  {heading}
                </h5>
                <p>{subHeading}</p>
              </div>
            );
          })}
        </div>
        <div className="w-full h-[6px] absolute bottom-0 left-0 lg:px-20 xl:px-[176px] lg:block hidden">
          <progress
            max="100"
            value="0"
            className="w-full progress_bar"
          ></progress>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
