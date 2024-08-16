"use client";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import ContactAnnouncement from "@/components/temp/ContactAnnouncement";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    descrition: "+1 562 000 0000",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    descrition: "haro.j.angel@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Located",
    descrition: "Los Angeles, California ",
  },
];

const Contact: FC = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            {/* form */}
            <div className="lg:h-[54%] lg:w-3/4 order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
                <h3 className="text-4xl text-primary "> Contact me (:</h3>
                <p className="text-white/60">
                  The &quot;Send Message&quot; has not yet been connected to an API. 
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Input type="first_name" placeholder="First Name" />
                  <Input type="last_name" placeholder="Last Name" />
                  <Input type="email" placeholder="Email" />
                  <Input type="phone" placeholder="Phone Number" />
                </div>
                {/* select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel> Select a service</SelectLabel>
                      <SelectItem value="back"> Backend Development</SelectItem>
                      <SelectItem value="front"> Frontend Development</SelectItem>
                      <SelectItem value="spring"> Spring Framework</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* text area */}
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here."
                />
                {/* btn */}
                <Button size="md" className="max-w-40 ">
                  Send Message
                </Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6 ">
                    <div className="w-[52px] h-[52px] xl:w-[72px]xl:h-[72px] bg-[#23232c] text-primary rounded-md flex items-center justify-center">
                      <div className="text-[28px]"> {item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60"> {item.title} </p>
                      <h3 className="text-xl"> {item.descrition} </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

            {/* ANNOUNCEMENT */}
      <ContactAnnouncement/ >
      
      

    </>
  );
};

export default Contact;
