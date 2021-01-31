import React from 'react';
import { Frame } from 'framer';
import './style.css';
import mobile from "../assets/smartphone.png";
import at from "../assets/at.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";


export const Contact = () => {
    const backgroundColor = "linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)"

    return (
      <>
        <Frame
          height="80%"
          width="80%"
          top="15%"
          backgroundColor="#00"
        >
          <p className="contact-title-text">Stay connected:</p>
          <table align="center">
            <tr>
              <th><img src={mobile} height="50" width="50"alt=""/></th>
              <th>(+48) 782 449 281</th>
            </tr>
            <tr>
              <th><img src={at} height="50" width="50" alt=""/></th>
              <th>adam.rukowicz@gmail.com</th>
            </tr>
            <tr>
              <th> <img src={github} height="50" width="50" alt=""/></th>
              <th>
                <a href="https://github.com/adamlitz"
                   target="_blank"
                   rel="noreferrer"
                >
                  github.com/adamlitz
                </a>
              </th>
            </tr>
            <tr>
              <th> <img src={linkedin} height="50" width="50" alt=""/></th>
              <th>
                <a href="https://www.linkedin.com/in/adam-rukowicz-a59ba8142/"
                   target="_blank"
                   rel="noreferrer"
                >
                  linkedin.com/in/adam-rukowicz-a59ba8142/
                </a>
              </th>
            </tr>
          </table>
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
