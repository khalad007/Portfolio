
import html from "../../../assets/html.png"
import css from "../../../assets/css.png"
import react from "../../../assets/react.png"
import javascript from "../../../assets/javascript.png"
import nodejs from "../../../assets/nodejs.png"
import mongodb from "../../../assets/mongodb.png"
import express from "../../../assets/express.png"
import firebase from "../../../assets/firebase.png"
import git from "../../../assets/git.png"
import github from "../../../assets/github.png"
import linux from "../../../assets/linux.svg"
import python from "../../../assets/python.png"
import stripe from "../../../assets/stripe.png"
import jsonfile from "../../../assets/json-file.png"
import tailwind from "../../../assets/tailwind.svg"
import figma from "../../../assets/figma.svg"
import { motion } from "framer-motion"


const Skills = () => {
    return (
        <div>
            <div className="text-center">
                <button className="btn my-10 text-xl font-semibold border-b-4 border-b-black">Skills</button>
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-semibold ">The skills, tools and technologies I am really good at : </h1>
            </div>
            <div className="mt-10 grid lg:grid-cols-8 md:grid-cols-6 lg:ml-10 md:ml-8 ml-14 grid-cols-3 ">
                <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={html} alt="" />
                    <span className=" font-semibold text-lg ml-2 "> HTML</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={css} alt="" />
                    <span className=" font-semibold text-lg ml-3 "> CSS</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={javascript} alt="" />
                    <span className=" font-semibold text-lg  "> JavsScript</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={react} alt="" />
                    <span className=" font-semibold text-lg ml-2 "> React</span>
                </motion.div>
                <div className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={nodejs} alt="" />
                    <span className=" font-semibold text-lg ml-[4px] "> NodeJs</span>
                </div>
                <div className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={mongodb} alt="" />
                    <span className=" font-semibold text-lg  "> mongodb</span>
                </div>
                <div className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={express} alt="" />
                    <span className=" font-semibold text-lg ml-2 "> Express</span>
                </div>
                <div className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={git} alt="" />
                    <span className=" font-semibold text-lg ml-2 "> Git</span>
                </div>
                <div className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={github} alt="" />
                    <span className=" font-semibold text-lg ml-2 "> Github</span>
                </div>
                <div className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={firebase} alt="" />
                    <span className=" font-semibold text-lg  "> Firebase</span>
                </div>
                <div className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={python} alt="" />
                    <span className=" font-semibold text-lg ml-2 "> Python</span>
                </div>
                <div className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={linux} alt="" />
                    <span className=" font-semibold text-lg ml-2 "> Linux</span>
                </div>
                <div className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={tailwind} alt="" />
                    <span className=" font-semibold text-lg  "> Tailwind</span>
                </div>
                <div className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={stripe} alt="" />
                    <span className=" font-semibold text-lg ml-2 "> HTML</span>
                </div>
                <div className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={figma} alt="" />
                    <span className=" font-semibold text-lg ml-2 "> Figma</span>
                </div>
                <div className="flex flex-col justify-center mb-10">
                    <img className="h-16 w-16 mb-2" src={jsonfile} alt="" />
                    <span className=" font-semibold text-lg "> JsonFile</span>
                </div>


            </div>
        </div>
    );
};

export default Skills;