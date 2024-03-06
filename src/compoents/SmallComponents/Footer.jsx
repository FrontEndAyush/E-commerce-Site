import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-between flex-wrap px-14 gap-12 mt-5">
        {/* first  */}
        <div>
          <Link to={"/"}>
            <img src="/logo/logo.png" className="mb-4" alt="" />
          </Link>

          <p className=" w-[250px] lg:w-[400px] mb-3">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-3">
            <a
              to="/https://www.google.com/"
              target="blank"
              rel="noreferrer noopener"
            >
              {" "}
              <FaSquareXTwitter />
            </a>

            <FaFacebook />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>

        {/* second  */}
        <div>
          <h1 className="mb-3 font-bold">COMPANY</h1>
          <ul className="flex flex-col mb-2">
            <Link className="mb-2">About</Link>
            <Link className="mb-2">Features</Link>
            <Link className="mb-2">Works</Link>
            <Link className="mb-2">Career</Link>
          </ul>
        </div>
        {/* third  */}
        <div>
          <h1 className="mb-3 font-bold">HELP</h1>
          <ul className="flex flex-col">
            <Link className="mb-2">About</Link>
            <Link className="mb-2">Features</Link>
            <Link className="mb-2">Works</Link>
            <Link className="mb-2">Career</Link>
          </ul>
        </div>
        {/* fourth  */}
        <div>
          <h1 className="mb-3 font-bold">FAQ</h1>
          <ul className="flex flex-col">
            <Link className="mb-2">About</Link>
            <Link className="mb-2">Features</Link>
            <Link className="mb-2">Works</Link>
            <Link className="mb-2">Career</Link>
          </ul>
        </div>
        {/* fifty */}
        <div>
          <h1 className="mb-3  font-bold">RESOURCES</h1>
          <ul className="flex flex-col">
            <Link className="mb-2">About</Link>
            <Link className="mb-2">Features</Link>
            <Link className="mb-2">Works</Link>
            <Link className="mb-2">Career</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
