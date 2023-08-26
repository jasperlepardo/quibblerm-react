import * as React from 'react'
import { Link } from 'gatsby'

import buttonArrow from "../../images/button-arrow.png"


const Section1 = () => {
    return (
        <section className="pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20 pt-[250px] sm:pt-[308px] md:pt[366px] lg:pt-[414px] xl:pt-[490]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-6 lg:col-start-2">
                        <h1 className="text-4xl leading-tight md:text-5xl md:leading-tight font-light mb-10">Deploy Quibble analytics in one day</h1>
                        <p className="font-light leading-normal mb-4"><span className="font-semibold">Operators using our existing PMS partners</span> (including Guesty, Hostfully, and others) <span className="font-semibold">can get</span> <span className="font-semibold text-[#1BA6BF]">near-instant access</span> to our analytics platform to play around with live data. Otherwise, new PMS integrations take 2–4 weeks.</p>
                        <p className="font-light leading-normal mb-4">Customization, price modeling, quality control, and optional on-site training add only 3–4 weeks and require few operator resources.</p>
                        <p className="font-light leading-normal mb-10"><span className="font-semibold">Ultimately, it typically takes 4–8 weeks</span> to move from agreement to complete platform optimization, guided by a dedicated Quibble account manager.</p>
                        <Link className="font-semibold text-center block lg:inline-block px-6 py-3 bg-violet-500 text-white rounded" to="">Ready to talk? <img className="inline-block" src={buttonArrow} alt=""/></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1

