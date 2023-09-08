import * as React from 'react'
import { Link } from 'gatsby'

import header from "../../images/graph.png"
import buttonArrow from "../../images/button-arrow.png"


const Section1 = () => {
    return (
        <section className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-top lg:bg-bottom bg-cover lg:bg-cover bg-hero2">
            <div className="container mx-auto px-6 lg:relative">
                <h1 className="text-4xl leading-tight md:text-5xl md:leading-tight mb-10 lg:w-9/12 xl:w-7/12">The only airline-grade revenue platform for <b className="font-bold">enterprise</b> STR operators</h1>
                <div className="grid lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-6">
                        <img className="hidden lg:block absolute md:-bottom-14 lg:-bottom-16 xl:-bottom-20 lg:right-0 lg:w-96" src={header} alt="" />
                        <p className="font-light leading-normal mb-4">Maximize revenue, drive loyalty, and identify targeted listing + property enhancements, all at the scale of your business.</p>
                        <p className="font-light leading-normal mb-4">Our advanced data-science models enable revenue managers to make probabilistic decisions using <b className="font-semibold">millions of option simulations</b> and hundreds of data points to predict and enhance market share and profitability.</p>
                        <p className="font-light leading-normal mb-10">Quibble for Enterprise is designed around the <b className="font-semibold">mass data aggregation</b> and <b className="font-semibold">workflow needs of large operators</b> like you, not the small guys.</p>
                        <Link className="font-semibold text-center block md:inline-block px-6 py-3 bg-violet-500 text-white rounded" to="">Request a demo <img className="inline-block" src={buttonArrow} alt=""/></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1

