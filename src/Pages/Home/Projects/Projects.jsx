import errorImg from "../../../assets/error.png"
import eeverse from "../../../assets/eeverse.png"
import food from "../../../assets/food.png"
import { AnimatePresence, motion } from "framer-motion"

const Projects = () => {
    return (
        <AnimatePresence>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                    ease: 'anticipate',
                    duration: '0.3'
                }}>
                <div className="text-center">
                    <button className="btn my-10 text-xl font-semibold border-b-4 border-b-black">Projects</button>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="h-64 w-full" src={errorImg} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Error Byte
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p> A dynamic online learning platform designed to facilitate seamless interaction between students, teachers,
                                and administrators.
                            </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">ReactJS</div>
                                <div className="badge badge-outline">JS</div>
                                <div className="badge badge-outline">NodeJS</div>
                                <div className="badge badge-outline">ExpressJS</div>
                                <div className="badge badge-outline">Tailwind</div>
                                <div className="badge badge-outline">Firebase</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">React Rating</div>
                                <div className="badge badge-outline">SwiperJS</div>
                                <div className="badge badge-outline">JWT</div>
                                <div className="badge badge-outline">Stripe</div>
                                <div className="badge badge-outline">React Hook Form</div>
                            </div>
                            <div className="flex justify-between my-5">
                                <a href="https://twelfthassignment.firebaseapp.com/"> <button className="btn btn-neutral">Live Link</button> </a>
                                <a href="https://github.com/khalad007/Error-Byte-Client"> <button className="btn btn-neutral">GitHub</button> </a>
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className="h-64 w-full" src={eeverse} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                EE Verse
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p> EE Verse your go-to destination for all things electronics ! Our
                                platform is designed to provide a seamless and enjoyable experience for tech enthusiasts, shoppers, and readers alike
                            </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">ReactJS</div>
                                <div className="badge badge-outline">JS</div>
                                <div className="badge badge-outline">NodeJS</div>
                                <div className="badge badge-outline">ExpressJS</div>
                                <div className="badge badge-outline">Tailwind</div>
                                <div className="badge badge-outline">Firebase</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">DaisyUI</div>

                            </div>
                            <div className="flex justify-between my-5">
                                <a href="https://tenth-assignment-75a23.firebaseapp.com/"> <button className="btn btn-neutral">Live Link</button> </a>
                                <a href="https://github.com/khalad007/EE-Verse"> <button className="btn btn-neutral">GitHub</button> </a>

                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="h-64 w-full" src={food} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Q Food
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p> This innovative project aims to address the critical issues of food waste and scarcity by fostering a
                                collaborative and community-driven approach.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">ReactJS</div>
                                <div className="badge badge-outline">JS</div>
                                <div className="badge badge-outline">NodeJS</div>
                                <div className="badge badge-outline">ExpressJS</div>
                                <div className="badge badge-outline">Tailwind</div>
                                <div className="badge badge-outline">Firebase</div>
                                <div className="badge badge-outline">MongoDB</div>
                                <div className="badge badge-outline">JWT</div>
                                <div className="badge badge-outline">React Hook Form</div>
                            </div>
                            <div className="flex justify-between my-5">
                                <a href="https://eleven-assignment-993a2.firebaseapp.com/"> <button className="btn btn-neutral">Live Link</button> </a>
                                <a href="https://github.com/khalad007/Q-Food"> <button className="btn btn-neutral">GitHub</button> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Projects;