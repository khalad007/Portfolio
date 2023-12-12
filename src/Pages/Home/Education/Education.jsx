import React from 'react';

const Education = () => {
    return (
        <div>

            <div className="text-center">
                <button className="btn my-14 text-xl font-semibold border-b-4 border-b-black">Education</button>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2018</time>
                        <div className="text-lg font-black">Secondary School Certificate (Voc)</div>
                        I completed my Secondary School Certificate in vocational education at the Bangladesh Korea Technical Training Center. My specialized field of study was General Electronics, and I successfully achieved Level 1 proficiency in this subject.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2019-2023</time>
                        <div className="text-lg font-black">Diploma In CSE</div>
                        Following the completion of my Secondary School Certificate in vocational education in 2018, I enrolled in a Diploma Engineering program with a focus on Computer Science.
                    </div>
                    <hr />
                </li>



            </ul>
        </div>
    );
};

export default Education;