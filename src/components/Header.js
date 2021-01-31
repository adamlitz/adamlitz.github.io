import React from 'react';
import { Link } from 'react-router-dom';
import { Frame, Stack } from 'framer';
import { motion } from 'framer-motion';

export const Header = () => {
    return (
        <>
            <Stack
                height={100}
                width={400}
                top="5%"
                right="30%"
                gap={-65}
                direction="horizontal"
            >
            <Frame
                whileHover={{scale: 1.05}}
                background="transparent"
            >
                <Link to="/">
                    <motion.button className="links-nav">
                        Home
                    </motion.button>
                </Link>
            </Frame>
            <Frame
                whileHover={{scale: 1.05}}
                background="transparent"
            >
                <Link to="/projects">
                    <motion.button className="links-nav">
                        Projects
                    </motion.button>
                </Link>
            </Frame>
            <Frame
                whileHover={{scale: 1.05}}
                background="transparent"
            >
                <Link to="/about">
                    <motion.button className="links-nav">
                        About
                    </motion.button>
                </Link>
            </Frame>
            <Frame
                whileHover={{scale: 1.05}}
                background="transparent"
            >
                <Link to="/contact">
                    <motion.button className="links-nav">
                        Contact
                    </motion.button>
                </Link>
            </Frame>
        </Stack>
        </>
    );
}
