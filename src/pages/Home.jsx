import Container from '../common/Container'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <Container className="overflow-hidden flex h-screen">
            <div className="w-full h-[94.5vh] m-5" >
                <div className=" h-full bg-cover bg-bottom rounded-[32px] relative md:px-16 px-4" style={{ backgroundImage: "url('../images/bannerBg.svg')" }}>
                    <div className="pt-6">
                        <div className="flex justify-between items-center w-full">

                            <div className='flex items-center'>
                                <p className='   text-2xl text-white font-semibold'>
                                    OPEN
                                </p>
                                <img
                                    src="../images/logo.jpg"
                                    alt="Logo"
                                    className="h-12  cursor-pointer"
                                />
                            </div>


                            <div className="hidden md:block">
                                <Link to="/signin" className="bg-black py-4 px-10 rounded-[8px] text-white">
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 lg:mt-8 ">
                        <h1 className="uppercase  font-bold sm:leading-[80px] leading-[70px] md:leading-[150px] xl:leading-[170.98px] text-white  text-[50px]   
                      sm:text-[80px] lg:tracking-wide md:text-[150px] xl:text-[170px] py-2">
                            POST YOUR JOB
                        </h1>
                        <div className="max-w-[750px] mt-6 lg:mt-0">
                            <p className="text-white font-libre font-medium lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] leading-[26.66px]">
                                Let's hire your next great candidate fast. Our streamlined process connects you with top talent in no time, ensuring you fill positions quickly and efficiently.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 items-center mt-8">
                            <div className="block md:hidden w-full">
                                <Link to="/login">
                                    <button className="w-full bg-black py-[18px] px-8 rounded-[8px] text-white">
                                        Sign in
                                    </button>
                                </Link>
                            </div>
                            <button className="bg-[#5494DC] text-[18px] py-4 px-8 rounded-[8px] text-white">
                                Post a shift
                            </button>
                            <button className="bg-transparent border border-[#5494DC] text-[18px] py-4 px-8 rounded-[8px] text-[#5494DC]">
                                Post a job
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block absolute bottom-10 right-1 flex justify-end items-end">
                        <img
                            src="/images/girlSitting.svg"
                            alt="Girl Sitting Illustration"
                            className="max-h-[500px] w-auto"
                        />
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default Home