import * as React from "react";
import Image from "next/image";

import Layout from "../components/Layout";

export default function About() {
  return (
    <div>
      <Layout navbarType={2}>
        <div className="page-header flex h-40 mb-16">
          <h2 className="text-white m-auto text-3xl uppercase">About</h2>
        </div>

        <div id="side-padding" className="flex flex-col gap-4">
          <p className="font-light">
            My Name is Sandra Mago. I'm the person behind the creative universe
            - MagoMade - which I started back in the summer of 2021. However I
            have been crocheting since the first corona-lockdown in 2020. I have
            an education in multimedia design and communication and I'm
            currently finishing my bachelors degree in web developement. The
            last year MagoMade has simply been a little side project but as I
            had to do an internship on my last semester and here got the
            opportunity to be an intern in my own company, it came very
            naturally that I started putting my time and effort into my small
            and growing business. The dream is to make my hobby a career one
            day.
          </p>
          <p className="font-light">
            MagoMade takes inspiration from my Filipino roots, which is also
            where the name Mago originates from. Although I grew up in Denmark,
            Filipino culture has alway been a big part of my everyday life
            thanks to my mama, who was born and raised in the festive and
            culturally rich country. My brand is greatly based on my love for
            flashy and wild colours which can be seen in the majority of my
            creations. This love arose all the way back from visits to my family
            in the Philippines as a child - visits to my lola's (grandmother in
            Cebuano) colorful home with a flashy pink facade, turquoise garden
            chairs and the azure sea almost right in the backyard.
          </p>
        </div>

        <div
          id="padding"
          className="flex flex-col justify-between gap-4 md:flex-row"
        >
          <Image
            src="/crochet-bucket-hat-mini-bag.jpg"
            alt="Crochet Bucket Hat & Mini Bag"
            width={300}
            height={300}
            className="w-full"
          />
          <Image
            src="/lola's-house.jpg"
            alt="Lola Mago's House Porch"
            width={300}
            height={300}
            className="w-full"
          />
        </div>

        <div id="side-padding" className="flex flex-col gap-4">
          <p className="font-light">
            I primarily make crochet patterns and guides with the goal of making
            crochet easier and more accessible to everyone - whether you are a
            complete beginner or experienced. My recipes are modern and
            contemporary. It is clear that many of the crochet patterns
            available online today are aimed at an older audience, and there is
            a lack of designs and patterns aimed at a younger generation. My
            goal is to fill this gap.
          </p>
          <p className="font-light">
            It's important to me that my recipes and guides are easy to
            understand and are described in detail. Crochet patterns can often
            be a struggle to read and understand with all the abbreviations and
            diagrams that they can contain, especially as a beginner. Therefore,
            my recipes contain both a detailed and a simplified guide or
            step-by-step pictures so that everyone can follow along.
          </p>
          <p className="font-light">
            In addition to being contemporary, my recipes are also simple and
            easily adaptable in the sense that you can use the recipe to create
            a piece of clothing in exactly the colors you like, in a carefully
            selected yarn type and in a adaptable pattern in the hopes that it
            can give the clothes a longer life and break with the
            use-and-throw-away culture. At the same time, my recipes are easy
            and easy to understand, which means that you can enjoy the process
            of crocheting your own clothes without major problems.
          </p>
        </div>

        <div id="padding" className="flex flex-col justify-between gap-8">
          <h4 className="text-xl m-auto">With love,</h4>
          <Image
            src="/magomade-logo-about.png"
            alt="MagoMade Logo"
            width={500}
            height={500}
            className="w-1/3 m-auto"
          />
        </div>
      </Layout>
    </div>
  );
}


