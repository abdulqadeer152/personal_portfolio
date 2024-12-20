"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <div className="parent">
      <div className="child">
        <div className="child-2">
          <h1>
            I'm Abdul Qadeer
            <br />
            <Typewriter
              options={{
                strings: [
                  "Front-End Developer",
                  "UI/UX Designer",
                  "NextJS Expert",
                  "Student At GIAIC",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p>
            Hey, This Is Abdul Qadeer, professional Web Developer With <br />
            Proper Knowladge of SEO Also Develop Many SaaS Product For Clients
          </p>
          <div>
          <Link href={"#contact"}><button className="btn">Contact Now</button></Link>
          </div>
        </div>
        <div className="img">
          <Image
            height={400}
            width={400}
            alt="Qadeer"
            src={require("../../../public/Untitled design (8).png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
