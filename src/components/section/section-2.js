import * as React from 'react'
import { Link } from 'gatsby'

import buttonArrow from "../../images/button-arrow.png"
import headerShadow from "../../images/graph-shadow.png"
import bigArrow from "../../images/big-arrow.png"
import arrow from "../../images/arrow.png"

const Section2 = () => {
    return (
        <section className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-[#FBF9F3] bg-cover bg-top bg-none lg:bg-section">
            <div className="container relative mx-auto px-6">
                <img className="hidden lg:block lg:absolute lg:top-[-80px] lg:right-0 lg:w-96" src={headerShadow} alt="" />
                <h2 className="text-4xl md:text-5xl mb-10">Grow your STR <br className="hidden md:block" /> <b className="font-medium">gap-over-market</b><br className="block md:hidden" /><img className="inline-block w-20 md:w-28 lg:w-40 lg:-mt-12 lg:-ml-5 lg:-mr-16" src={bigArrow} alt="" /> by <b className="text-6xl md:text-7xl font-semibold">18<sup className="-top-[0.25em]">%</sup></b></h2>
                <p className="text-xl md:text-2xl mb-10">PROVEN RESULTS for enterprise STR operators using Quibble:</p>
                <div className="grid grid-cols-12 gap-4 mb-10">
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12 p-6 bg-white">
                        <p className="font-semibold text-5xl text-[#1BA6BF]">18<sup className="-top-[0.25em]">%</sup><img className="inline-block" src={arrow} alt="" /></p>
                        <hr className="my-2 border-t-4 border-dotted" />
                        <p className="leading-normal">Revenue increase</p>
                    </div>
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12 p-6 bg-white">
                        <p className="font-semibold text-5xl text-[#1BA6BF]">8<sup className="-top-[0.25em]">%</sup><img className="inline-block" src={arrow} alt="" /></p>
                        <hr className="my-2 border-t-4 border-dotted" />
                        <p className="leading-normal">Occupancy increase</p>
                    </div>
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12 p-6 bg-white">
                        <p className="font-semibold text-5xl text-[#1BA6BF]">1.5<small className="text-2xl">page</small><img className="inline-block" src={arrow} alt="" /></p>
                        <hr className="my-2 border-t-4 border-dotted" />
                        <p className="leading-normal">Search rank improvement</p>
                    </div>
                    <div className="lg:col-span-3 sm:col-span-6 col-span-12 p-6 bg-white">
                        <p className="font-semibold text-5xl text-[#1BA6BF]">9<sup className="-top-[0.25em]">%</sup><img className="inline-block" src={arrow} alt="" /></p>
                        <hr className="my-2 border-t-4 border-dotted" />
                        <p className="leading-normal">RevPAR uplift compared to retail-grade pricing software</p>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-4 justify-end items-center">
                    <p className="text-center">Quibble for Enterprise offers actionable insights from 100+ customizable data variables</p>
                    <Link className="font-semibold text-center block lg:inline-block  px-6 py-3 bg-violet-500 text-white rounded" to="">Contact us to see the science <img className="inline-block" src={buttonArrow} alt="" /></Link>
                </div>
            </div>
        </section>
    )
}

export default Section2

