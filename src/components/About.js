import React from 'react';
import { Frame } from 'framer';
import { motion } from 'framer-motion';
import './style.css';

import me from "../assets/me.jpg";

export const About = () => {
    const backgroundColor = "linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)"

    const spring = {
      type: "spring",
      damping: 10,
      stiffness: 100
    }

    const opacityArray = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

    return (
      <>
        <motion.img
          className="img-my-photo"
          src={me}
          height="50%"
          transition={spring}
          animate={{scale: 1.25}}
          whileHover={{ scale: 1.3 }}
        >
          </motion.img>
          <Frame
            width="40%"
            height="70%"
            right="15%"
            top="15%"
            backgroundColor="#00"
            animate={{
              opacity: opacityArray,
              transition: { duration: 0.1 }
            }}
          >
            <p className="title">
              Hi, nice to see you on my website.
            </p>
            <p className="about-text">
              This is my very first portfolio web page.
            </p>
            <p className="about-text">
              I'm currently learning modern techniques of creating UI's.
              When it comes to backend, Python is my first choice, but I'm also enthusiastic about Node.JS.
              Along with frameworks like Django/DRF I managed to create my first apps at job and at my free time.
            </p>
            <p className="about-text">
              Other facts about me: I have recently graduated with BSc degree in Computer Science
              and I'm hungry of knowledge about web development.
            </p>
            <p className="about-text">
              After work, I pursue my passions such as motorization and Formula 1.
            </p>
          </Frame>
          <Frame
            size={150}
            background={backgroundColor}
            animate={{
                scale: 1.5,
                rotate: [90, 105]
            }}
            transition={{ duration: 0.1 }}
            radius={30}
            bottom={15}
            left={10}
            overflow="visible"
            drag={true}
            whileHover={{scale: 1.75}}
          />
          <Frame
            size={200}
            background={backgroundColor}
            animate={{
                scale: 1.5,
                rotate: [90, 105]
            }}
            transition={{ duration: 0.1 }}
            radius={30}
            bottom={15}
            right={10}
            overflow="visible"
            drag={true}
            whileHover={{scale: 1.75}}
          />
          <Frame
            size={50}
            background={backgroundColor}
            animate={{
                scale: 1.5,
                rotate: [90, 105]
            }}
            transition={{ duration: 0.1 }}
            radius={10}
            bottom={55}
            right="40%"
            overflow="visible"
            drag={true}
            whileHover={{scale: 1.75}}
          />
          <Frame
            size={50}
            background={backgroundColor}
            animate={{
                scale: 1.5,
                rotate: [90, 105]
            }}
            transition={{ duration: 0.1 }}
            radius={10}
            top={75}
            right="10%"
            overflow="visible"
            drag={true}
            whileHover={{scale: 1.75}}
          />
           <Frame
            size={50}
            background={backgroundColor}
            animate={{
                scale: 1.5,
                rotate: [90, 155]
            }}
            transition={{ duration: 0.1 }}
            radius={10}
            top={75}
            left="10%"
            overflow="visible"
            drag={true}
            whileHover={{scale: 1.75}}
          />
      </>
    );
};
