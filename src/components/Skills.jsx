import React from 'react'
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import AWS from "../assets/aws.png"
import GitHub from "../assets/github.png"
import Tailwind from "../assets/tailwind.png"
import Mongo from "../assets/mongo.png"



const Skills = () => {
    return (
        <div name="skills" className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bond inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>//There are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={HTML} art='HTML icon' />
                        <p className='my-4'>HTML</p>
                    </div>
                    {/* 2 */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={CSS} art='HTML icon' />
                        <p className='my-4'>CSS</p>
                    </div>
                    {/* 3 */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Javascript} art='HTML icon' />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    {/* 4 */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={ReactImg} art='HTML icon' />
                        <p className='my-4'>React</p>
                    </div>
                    {/* 5 */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={GitHub} art='HTML icon' />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    {/* 6 */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Node} art='HTML icon' />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    {/* 7 */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Mongo} art='HTML icon' />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    {/* 8 */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={AWS} art='HTML icon' />
                        <p className='my-4'>AWS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
