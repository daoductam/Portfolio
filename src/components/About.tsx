import { useEffect, useRef, useState } from "react";
import { Info } from "../User";
// @ts-ignore
import DOTS from "vanta/src/vanta.dots";
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";

const About = () => {
  const [dots, setDots] = useState<any>(null);
  const [trunk, setTrunk] = useState<any>(null);

  useEffect(() => {
    if (!dots) {
      setDots(
        DOTS({
          el: "#bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x64ffda,
          color2: 0x2a20ff,
          backgroundColor: 0x112240,
          size: 2.8,
          showLines: false,
          spacing: 20,
        })
      );
    }
    if (!trunk) {
      setTrunk(
        TRUNK({
          el: "#photo",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color: 0x64ffda,

          scaleMobile: 1.0,
          backgroundColor: 0x112240,
          spacing: 0,
          chaos: 4.0,
        })
      );
    }
    return () => {
      if (dots) dots.destroy();
      if (trunk) trunk.destroy();
    };
  }, []);
  return (
    <div
      className="flex overflow-hidden justify-around items-center font-mono px-16 h-[80vh]"
      id="bg"
    >
      <div className="ml-20 w-3/5 flex flex-col">
        <div className="text-3xl text-primaryColor">Hi, I am</div>
        <div className="text-white text-[4.25rem] font-extrabold">
          {Info.name}
        </div>
        <div className="text-white text-4xl flex font-semibold">
          I'm&nbsp;
          <span className="text-primaryColor">
            <Typewriter
              options={{
                strings: Info.stack,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="text-textColor text-xl w-[90%] font-semibold text-justify my-8">
          {Info.bio}
        </div>
        <Button
          component="a"
          href="https://github.com/daoductam"
          target="_blank"
          className="!text-bgColor !w-fit"
          size="lg"
          variant="filled"
          color="#64FFDA"
        >
          Check Resume
        </Button>
      </div>
      <div
        className="h-[50vh] flex justify-center items-center overflow-hidden rounded-full mr-14 w-[25vw]"
        id="photo"
      >
        <img
          className="w-[85%] rounded-full"
          src="/profile.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default About;
