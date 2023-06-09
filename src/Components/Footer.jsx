import React from "react";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col py-10 text-center sm:text-left">
      <section className="py-10 mx-5 md:mx-30 lg:mx-60">
        <div className="flex flex-col gap-10 md:flex-row">
          <div style={{ flex: 2 }} className="flex  flex-col">
            <h2 className="text-xl my-5">About Us</h2>
            <span>
              <p className="text-[14px]   font-rob my-5">
                Fents Luxury Hotel has been elegantly crafted and prearranged to
                achieve a measure of comfortable luxury to satisfy the senses of
                every guest from all over the world. Ideally situated in a quiet
                area of the city of Ilorin, Nigeria.
              </p>
            </span>
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="text-xl my-5">Navigation</h2>

            <div className="flex flex-col">
              <Link className="text-[14px]   font-rob my-2" to="/">
                HOME
              </Link>
              <Link className="text-[14px]   font-rob my-2" to="/rooms">
                ROOMS
              </Link>

              <Link className="text-[14px]   font-rob my-2" to="/about">
                ABOUT US
              </Link>
              <Link className="text-[14px]   font-rob my-2" to="/contact">
                CONTACT
              </Link>
            </div>
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="text-xl my-5">Address</h2>
            <span>
              <p className="text-[14px]   font-rob my-2">
                16, Irabon street, fate-tanke, Ilorin, Kwara state, Nigeria.
              </p>
            </span>
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="text-xl my-5">Telephone</h2>
            <span>
              <p className="text-[14px]   font-rob my-2">+234 810 395 1449</p>
              {/* <p className="text-[14px]   font-rob my-2">+1 234 5678 910</p> */}
            </span>
          </div>
        </div>
      </section>

      {/* <section className=" flex flex-col-reverse gap-10 md:gap-1 md:flex-row justify-between items-center py-5 mx-5 md:mx-30 lg:mx-60">
        <div className="">
          <p className="font-rob text-[14px]  ">
            Developed by{" "}
            <span>
              <a
                className="text-[#ff4c2d]"
                href="https://ibrahimkolabalogun.web.app/"
              >
                Ibrahim
              </a>
            </span>
          </p>
        </div>
        <div className="flex gap-6">
          <a href="" className="bg-black rounded-full p-3">
            <FaFacebookF className="h-4 w-4 text-white" />
          </a>
          <a href="" className="bg-black rounded-full p-3">
            <ImTwitter className="h-4 w-4 text-white" />
          </a>
          <a href="" className="bg-black rounded-full p-3">
            <FaInstagram className="h-4 w-4 text-white" />
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default Footer;
