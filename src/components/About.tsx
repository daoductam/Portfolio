import { useEffect, useRef, useState } from "react";
import { Info } from "../User";
// @ts-ignore
import DOTS from "vanta/src/vanta.dots";
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./magicui/Particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const About = () => {
  // const [dots, setDots] = useState<any>(null);
  // const [trunk, setTrunk] = useState<any>(null);
  const [opened, { open, close }] = useDisclosure(false);

  // useEffect(() => {
  //   if (!dots) {
  //     setDots(
  //       DOTS({
  //         el: "#bg",
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         color: 0x64ffda,
  //         color2: 0x2a20ff,
  //         backgroundColor: 0x112240,
  //         size: 2.8,
  //         showLines: false,
  //         spacing: 20,
  //       })
  //     );
  //   }
  //   if (!trunk) {
  //     setTrunk(
  //       TRUNK({
  //         el: "#photo",
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         color: 0x64ffda,

  //         scaleMobile: 1.0,
  //         backgroundColor: 0x112240,
  //         spacing: 0,
  //         chaos: 4.0,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (dots) dots.destroy();
  //     if (trunk) trunk.destroy();
  //   };
  // }, []);
  return (
    <>
      <div
        className="flex relative overflow-hidden justify-around items-center font-mono px-16 h-[85vh]"
        id="bg"
      >
        <Particles
          className="absolute inset-0 -z-20"
          quantity={1000}
          ease={80}
          vx={0.1}
          vy={0.1}
          color="#64FFDA"
          refresh
        />
        <div className="ml-20 w-3/5 flex flex-col">
          <div className="text-3xl text-primaryColor">Hi, I am</div>
          <div className="text-white text-[4.25rem] font-extrabold">
            {Info.name}
          </div>
          <div className="text-white text-4xl flex font-semibold">
            I'm a&nbsp;
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
          <div className=" flex gap-3">
            <Button
              onClick={open}
              className="!text-bgColor !w-fit"
              size="lg"
              variant="filled"
              color="#64FFDA"
            >
              Check Resume
            </Button>
            <Button
              component="a"
              href="/cv.pdf"
              download={Info.name}
              className="!text-primaryColor !w-fit"
              size="lg"
              variant="outline"
              color="#64FFDA"
              rightSection={<IconDownload size={20} />}
            >
              Download
            </Button>
          </div>
        </div>
        <div
          className="h-fit flex justify-center items-center rounded-full mr-14 w-fit"
          id="photo"
        >
          <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
            <img
              className="w-full h-full rounded-full"
              src="/profile.png"
              alt="profile"
            />
          </NeonGradientCard>
        </div>
      </div>
      <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default About;
