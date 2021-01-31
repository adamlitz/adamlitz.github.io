import React from 'react';
import { Frame } from 'framer';
import './style.css';

export const Home = () => {
    const backgroundColor = "linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)"

    return (
        <>
            <Frame
                size={200}
                background={backgroundColor}
                animate={{
                    scale: 1.5,
                    rotate: [0, 160]
                }}
                transition={{ duration: 0.5 }}
                radius={30}
                top={5}
                right={15}
                overflow="visible"
                drag={true}
                whileHover={{scale: 1.75}}
            />
            <Frame
                size={250}
                background={backgroundColor}
                animate={{
                    scale: 1.5,
                    rotate: [45, 345],
                }}
                transition={{ duration: 1.5 }}
                radius={30}
                bottom={15}
                left={10}
                overflow="visible"
                drag={true}
                whileHover={{scale: 1.75}}
            />
            <Frame
                size={75}
                background={backgroundColor}
                animate={{
                    scale: 1.5,
                    rotate: [0, 90, 180, 270, 300]
                }}
                transition={{ duration: 2.5 }}
                radius={10}
                bottom={350}
                right={350}
                overflow="visible"
                drag={true}
                whileHover={{scale: 1.75}}
            />
            <Frame
                size={45}
                background={backgroundColor}
                animate={{
                    scale: 1.5,
                    rotate: [180, 270, 320]
                }}
                transition={{ duration: 2.5 }}
                radius={10}
                bottom={250}
                left={500}
                overflow="visible"
                drag={true}
                whileHover={{scale: 1.75}}
            >
                Drag me!
            </Frame>
            <Frame
                size={85}
                background={backgroundColor}
                animate={{
                    scale: 1.5,
                    rotate: [180, 270, 320]
                }}
                transition={{ duration: 2.5 }}
                radius={10}
                top={150}
                left={50}
                overflow="visible"
                drag={true}
                whileHover={{scale: 1.75}}
            />
            <Frame
                size={175}
                background={backgroundColor}
                animate={{
                    scale: 1.5,
                    rotate: [0, 90, 180, 270, 300]
                }}
                transition={{ duration: 2.5 }}
                radius={10}
                top={-150}
                left={350}
                overflow="visible"
                drag={true}
                whileHover={{scale: 1.75}}
            />
            <Frame
                size={250}
                background={backgroundColor}
                animate={{
                    scale: 1.5,
                    rotate: [45, 115]
                }}
                transition={{ duration: 2.5 }}
                radius={30}
                bottom={-150}
                right={450}
                overflow="visible"
                drag={true}
                whileHover={{scale: 1.75}}
            />
            <div className="introduction-text">
                <p className="title">Hi, I am</p>
                <br></br>
                <p className="name">Adam Rukowicz</p>
                <br></br>
                <p className="title">Python Web Developer</p>
            </div>
        </>
    );
  }
