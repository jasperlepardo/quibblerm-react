import * as React from 'react' 

import Flickity from 'react-flickity-component'
import { FlickityOptions } from "react-flickity-component"
import '../../styles/flickity.css'

import buttonArrow from "../../images/button-arrow.png"
import iconStar from "../../images/icon-star.png"
import iconHeart from "../../images/icon-heart.png"
import iconRain from "../../images/icon-rain.png"
import iconGift from "../../images/icon-gift.png"
import currentMonth from "../../images/current-month.png"
import futureMonth from "../../images/future-month.png"
import pastMonth from "../../images/past-month.png"

const Section1 = () => {
    return (
        <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-40 pb-[250px] sm:pb-[308px] md:pb[366px] lg:pb-[414px] xl:pb-[490px] bg-[#283334] relative ">
            <div className="w-0 h-0 border-l-[50vw] border-l-transparent border-t-[20px] sm:border-t-[48px] md:border-t-[56px] lg:border-t-[64px] xl:border-t-[80px] border-t-white border-r-[50vw] border-r-transparent top-[-1px] right-0 absolute"></div>
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-3">
                        <div className="bg-white grid grid-cols-[1fr,auto,1fr] lg:grid-cols-1 gap-2 p-2 sm:gap-3 sm:p-3 md:gap-4 md:p-4 lg:gap-5 lg:p-6 xl:gap-6 xl:p-6 rounded-lg">
                            <div className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 text-center">
                                <img className="inline-block" src={iconStar} alt="" />
                                <p className="font-semibold text-[#1BA6BF]">STARS</p>
                            </div>
                            <div className="border-[1px]"></div>
                            <div className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 text-center">
                                <img className="inline-block"  src={iconGift} alt="" />
                                <p className="font-semibold text-[#A473ED]">UNDERPRICED</p>
                            </div>
                            <div className="border-[1px]"></div>
                            <div className="lg:hidden"></div>
                            <div className="border-[1px] lg:hidden"></div>
                            <div className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 text-center">
                                <img className="inline-block"  src={iconHeart} alt="" />
                                <p className="font-semibold text-[#D79E34]">OVERPRICED</p>
                            </div>
                            <div className="lg:w-auto border-[1px]"></div>
                            <div className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 text-center">
                                <img className="inline-block"  src={iconRain} alt="" />
                                <p className="font-semibold text-[#697273]">PRODUCT ISSUE</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 lg:col-start-5">
                        <h1 className="text-3xl leading-tight md:text-4xl md:leading-tight font-light mb-10 text-white">Quibble’s <span className="font-semibold text-[#F1BD5B]">drill-down dashboards</span> help your CxOs and revenue managers make both <span className="font-semibold text-[#A8E4EB]">strategic decisions</span> and <span className="font-semibold text-[#C0A4EF]">daily tactical moves</span></h1>
                        <h2 className="text-xl leading-normal md:text-2xl lg:leading-normal font-light mb-10 text-white">Short-Term Rental operator data is intuitively presented in ways to <span className="font-semibold text-[#F1BD5B]">prioritize immediate action</span>, directing your attention from macro concerns to greasy-wheel problems, as needed.</h2>
                        <div className="text-center lg:text-left">
                            <ul className="inline-flex flex-col lg:flex-row items-center">
                                <li className="inline-flex">
                                    <div className="text-white px-6 py-4 rounded border-[1px]">
                                        high-level insights
                                    </div>
                                </li>
                                <li className="inline-block p-3">
                                    <img className="inline-block rotate-90 lg:rotate-0" src={buttonArrow} alt="" />
                                </li>
                                <li className="inline-flex">
                                    <div className="text-white px-6 py-4 rounded border-[1px]">
                                        regional + city trends
                                    </div>
                                </li>
                                <li className="inline-block p-3">
                                    <img className="inline-block rotate-90 lg:rotate-0" src={buttonArrow} alt="" />
                                </li>
                                <li className="inline-flex">
                                    <div className="text-white px-6 py-4 rounded border-[1px]">
                                        granular details
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-10" />
                <h1 className="text-xl leading-normal md:text-2xl lg:leading-normal text-center font-light mb-10 text-white"><span className="font-semibold text-[#A8E4EB]">Look back</span> or <span className="font-semibold text-[#F1BD5B]">project out forward</span>,<br/>including sandbox scenarios and their effects on portfolio value</h1>
                <p className="font-light text-white text-center mb-10">(*or even limit to a specific geography to model out + drill down)</p>
            </div>
            <Flickity className={'carousel -mb-[420px] sm:-mb-[520px] md:-mb[620px] lg:-mb-[720px] xl:-mb-[820px]'} options={{initialIndex: 1}}>
                <div className="carousel-cell p-4">
                    <p className="text-xl text-white text-center mb-4">past month</p>
                    <img className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]" src={pastMonth} alt="" />
                </div>
                <div className="carousel-cell p-4">
                    <p className="text-xl text-white text-center mb-4">current month</p>
                    <img className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]" src={currentMonth} alt="" />
                </div>
                <div className="carousel-cell p-4">
                    <p className="text-xl text-white text-center mb-4">future month</p>
                    <img className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]" src={futureMonth} alt="" />
                </div>
            </Flickity>
        </section>
    )
}

export default Section1

