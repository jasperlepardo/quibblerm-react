import * as React from 'react'
import { Link } from 'gatsby'

import arrowSplit from "../../images/arrow-split.png"
import buttonArrow from "../../images/button-arrow.png"
import caretActive from "../../images/caret-active.png"
import caretInactive from "../../images/caret-inactive.png"
import logoWhite from "../../images/logo-white.png"

const Section3 = () => {
    return (
        <section className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-200">
            <div className="container mx-auto px-6">
                <div className="font-light text-center">
                    <h2 className="text-4xl md:text-5xl mb-6">You’ve seen the <b className="font-semibold">retail-grade pricing tools</b></h2>
                    <p className="text-xl md:text-2xl leading-normal mb-4">(But <span className="font-semibold inline-block px-2 py-1 bg-[#F1BD5B] rounded">do they see you</span> and your enterprise needs?)</p>    
                </div>
                <img className="hidden md:block mx-auto -mb-10" src={arrowSplit} alt="" />
                <div className="grid md:grid-cols-12 gap-4 mb-10">
                    <div className="md:col-span-5 hidden md:flex flex-col gap-5 text-right">
                        <div className="py-3 px-6 bg-[#E8E8E8] rounded-lg">
                            <h3 className="text-2xl"><b className="font-semibold">Retail-grade</b> <br/ >STR pricing software</h3>
                        </div>
                    </div>
                    <div className="md:col-span-5 md:col-start-8 flex flex-col gap-5">
                        <div className="py-3 px-6 bg-[#4DCADA] rounded-lg">
                            <h3 className="text-2xl text-white"><img className="inline-block h-16" src={logoWhite} alt="" /> <br className='block lg:hidden'/>for enterprise</h3>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-4 mb-4">
                    <div className="md:col-span-5 hidden md:flex flex-col gap-4 justify-end text-right">
                        <div className="py-2 border-b-[3px] border-dotted  border-b-[#BCBCBC]">
                            <p className="text-lg leading-normal font-light text-[#697273]">Minimal enterprise features</p>
                        </div>
                    </div>
                    <div className="md:col-span-5 md:col-start-8 flex flex-col gap-4">
                        <div className="px-2 py-1 bg-[#F1BD5B] rounded">
                            <h4 className="text-xl font-semibold">Enterprise management</h4>
                        </div>
                        <div className="py-2 border-t-[3px] border-b-[3px] border-dotted  border-t-[#4DCADA] border-b-[#4DCADA]">
                            <p className="text-lg leading-normal"><b className="font-medium">Advanced features</b><br />specially designed for larger operators</p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-4 mb-10">
                    <input type="checkbox" id="minimal-features" className="peer hidden" />
                    <div className="md:col-span-5 text-right peer-checked:hidden">
                        <div className="hidden md:block">
                            <ul className="flex flex-col gap-4 mb-4">
                                <li>Standard KPIs</li>
                            </ul>
                            <label for="minimal-features" className="text-[#4DCADA] underline">collapse <img className="inline-block"  src={caretActive} /></label>
                        </div>
                    </div>
                    <div className="md:col-span-5 text-right peer-checked:block hidden">
                        <label for="minimal-features">see details <img className="inline-block" src={caretInactive} alt="" /></label>
                    </div>
                    <div className="md:col-span-5 md:col-start-8 peer-checked:hidden">
                        <ul className="flex flex-col gap-4 mb-4">
                            <li>Custom KPIs</li>
                            <li>Forecast-vs-budget analysis</li>
                            <li>Owner reports for distribution</li>
                        </ul>
                        <label for="minimal-features" className="peer-checked:hidden text-[#4DCADA] underline">collapse <img className="inline-block"  src={caretActive} /></label>
                    </div>
                    <div className="md:col-span-5 md:col-start-8 peer-checked:block hidden">
                        <label for="minimal-features">see details <img className="inline-block" src={caretInactive} alt="" /></label>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-4 mb-4">
                    <div className="md:col-span-5 hidden md:flex flex-col gap-5 justify-end text-right">
                        <div className="py-2 border-b-[3px] border-dotted  border-b-[#BCBCBC]">
                            <p className="text-lg leading-normal font-light text-[#697273]">2–3 basic data points</p>
                        </div>
                    </div>
                    <div className="md:col-span-5 md:col-start-8 flex flex-col gap-5">
                        <div className="px-2 py-1 bg-[#F1BD5B] rounded">
                            <h4 className="text-xl font-semibold">Expert-level automated pricing</h4>
                        </div>
                        <div className="py-2 border-t-[3px] border-b-[3px] border-dotted  border-t-[#4DCADA] border-b-[#4DCADA]">
                            <p className="text-lg leading-normal"><b className="font-medium">100+ customizable data points</b><br/>and growing</p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-4 mb-10">
                    <input type="checkbox" id="data-points" className="peer hidden" />
                    <div className="md:col-span-5 text-right peer-checked:hidden">
                        <div className="hidden md:block">
                            <ul className="flex flex-col gap-4 mb-4">
                                <li>Pricing</li>
                                <li>Radius location</li>
                                <li>Bedroom count</li>
                            </ul>
                            <label for="data-points" className="text-[#4DCADA] underline">collapse <img className="inline-block"  src={caretActive}/></label>
                        </div>
                    </div>
                    <div className="md:col-span-5 text-right peer-checked:block hidden">
                        <label for="data-points">see details <img className="inline-block" src={caretInactive} alt="" /></label>
                    </div>
                    <div className="md:col-span-5 md:col-start-8 peer-checked:hidden">
                        <ul className="flex flex-col gap-4 mb-4">
                            <li>Pricing + ancillary fees</li>
                            <li>Radius location</li>
                            <li>Bedroom count</li>
                            <li>Static property features<br/><span className="text-[#697273]">(views, pools, bunk beds)</span></li>
                            <li>Changeable property features<br/><span className="text-[#697273]">(jacuzzis, parking)</span></li>
                            <li>Listing features<br/><span className="text-[#697273]">(title + description, review counts, days since update)</span></li>
                            <li>Host features<br/><span className="text-[#697273]">(host ratings, response rate)</span></li>
                            <li>Photos<br/><span className="text-[#697273]">(AI rating)</span></li>
                            <li>Stay length availability</li>
                        </ul>
                        <label for="data-points" className="peer-checked:hidden text-[#4DCADA] underline">collapse <img className="inline-block"  src={caretActive}/></label>
                    </div>
                    <div className="md:col-span-5 md:col-start-8 peer-checked:block hidden">
                        <label for="data-points">see details <img className="inline-block" src={caretInactive} alt="" /></label>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-4 mb-4">
                    <div className="md:col-span-5 hidden md:flex flex-col gap-5 justify-end text-right">
                        <div className="py-2 border-b-[3px] border-dotted  border-b-[#BCBCBC]">
                            <p className="text-lg leading-normal font-light text-[#697273]">(not offered)</p>
                        </div>
                    </div>
                    <div className="md:col-span-5 md:col-start-8 flex flex-col gap-5">
                        <div className="px-2 py-1 bg-[#F1BD5B] rounded">
                            <h4 className="text-xl font-semibold">Scenario modeling</h4>
                        </div>
                        <div className="py-2 border-t-[3px] border-b-[3px] border-dotted  border-t-[#4DCADA] border-b-[#4DCADA]">
                            <p className="text-lg leading-normal"><b className="font-medium">Hypothetical listing + property enhancement testing</b><br/>based on millions of option simulations</p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 gap-4 mb-10">
                    <input type="checkbox" id="scenario-modeling" className="peer hidden" />
                    <div className="md:col-span-5 md:col-start-8 peer-checked:hidden">
                        <ul className="flex flex-col gap-4 mb-4">
                            <li>Price</li>
                            <li>Ancillary fees</li>
                            <li>Bedroom count</li>
                            <li>Property features<br/><span className="text-[#697273]">(jacuzzis, parking)</span></li>
                            <li>Listing features<br/><span className="text-[#697273]">(title + description, review counts, days since update)</span></li>
                            <li>Host features<br/><span className="text-[#697273]">(host ratings, response rate)</span></li>
                            <li>AI photo-analysis ratings</li>
                        </ul>
                        <label for="scenario-modeling" className="peer-checked:hidden text-[#4DCADA] underline">collapse <img className="inline-block"  src={caretActive}/></label>
                    </div>
                    <div className="md:col-span-5 md:col-start-8 peer-checked:block hidden">
                        <label for="scenario-modeling">see details <img className="inline-block" src={caretInactive} alt="" /></label>
                    </div>
                </div>
                <div className="text-center">
                    <Link className="font-semibold text-center block lg:inline-block px-6 py-3 bg-violet-500 text-white rounded" to="">Reach out to see for yourself <img className="inline-block" src={buttonArrow} alt="" /></Link>
                </div>
            </div>
        </section> 
    )
}

export default Section3

