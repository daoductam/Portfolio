import { Button, em } from "@mantine/core";
import FloatingInpit from "./FloatingInput";
import { useState } from "react";
import { ReportHandler } from "web-vitals";
import { IconArrowRight } from "@tabler/icons-react";

const Contact = () => {
  const form = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(form);
  const handleChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="800"
      className=" px-16 mx-20 my-10  font-mono"
      id="Contact"
    >
      <h1 className="text-4xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">05.&nbsp;</span>Contact
      </h1>
      <div className="w-[70%] shadow-[0_0_10px_0_#64FFDA50] m-auto border flex flex-col gap-6 border-primaryColor p-8 rounded-3xl">
        <div className=" text-3xl text-white font-semibold">Let's connect</div>
        <FloatingInpit
          id="name"
          name="Name"
          value={formData.name}
          handleChange={handleChange}
        />
        <FloatingInpit
          id="email"
          name="Email"
          value={formData.email}
          handleChange={handleChange}
        />

        <FloatingInpit
          id="phone"
          name="Phone Number"
          value={formData.phone}
          handleChange={handleChange}
        />

        <FloatingInpit
          id="message"
          name="Message"
          value={formData.message}
          handleChange={handleChange}
        />

        <Button
          className="!text-bgColor !font-bold text-2xl"
          fullWidth
          variant="filled"
          size="lg"
          radius="lg"
          rightSection={<IconArrowRight size={20} />}
          color="#64FFDA"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Contact;
