import * as React from 'react'
import { Link } from 'gatsby'


import Flickity from 'react-flickity-component'
import { FlickityOptions } from "react-flickity-component"
import '../styles/flickity.css'

import heroBanner from "../images/hero-banner.png"
import header from "../images/graph.png"
import section from "../images/section-banner.png"
import headerShadow from "../images/graph-shadow.png"
import bigArrow from "../images/big-arrow.png"
import arrow from "../images/arrow.png"
import arrowSplit from "../images/arrow-split.png"
import buttonArrow from "../images/button-arrow.png"
import iconStar from "../images/icon-star.png"
import iconHeart from "../images/icon-heart.png"
import iconRain from "../images/icon-rain.png"
import iconGift from "../images/icon-gift.png"
import caretActive from "../images/caret-active.png"
import caretInactive from "../images/caret-inactive.png"
import logoWhite from "../images/logo-white.png"
import currentMonth from "../images/current-month.png"
import futureMonth from "../images/future-month.png"
import pastMonth from "../images/past-month.png"

import Layout from '../components/layout'


export default function Home() {
  return <Layout>
      <section className="py-20 bg-bottom bg-cover bg-none lg:bg-hero">
        <div className="container mx-auto px-4 lg:relative">
            <h1 className="text-5xl font-light leading-tight mb-10 lg:w-9/12 xl:w-7/12">The only airline-grade revenue platform for <b className="font-bold">enterprise</b> STR operators</h1>
            <div className="grid lg:grid-cols-12 gap-4">
                <div className="lg:col-span-6">
                    <img className="hidden lg:block lg:absolute lg:bottom-[-80px] lg:right-0 lg:w-96" src={header} alt="" />
                    <p className="font-light leading-normal mb-4">Maximize revenue, drive loyalty, and identify targeted listing + property enhancements, all at the scale of your business.</p>
                    <p className="font-light leading-normal mb-4">Our advanced data-science models enable revenue managers to make probabilistic decisions using <b className="font-semibold">millions of option simulations</b> and hundreds of data points to predict and enhance market share and profitability.</p>
                    <p className="font-light leading-normal mb-10">Quibble for Enterprise is designed around the <b className="font-semibold">mass data aggregation</b> and <b className="font-semibold">workflow needs of large operators</b> like you, not the small guys.</p>
                    <Link className="font-quicksand font-semibold text-center block md:inline-block px-6 py-3 bg-violet-500 text-white rounded" to="">Request a demo <img className="inline-block" src={buttonArrow} alt=""/></Link>
                </div>
            </div>
        </div>
      </section>
      <section className="py-20 bg-[#FBF9F3] bg-cover bg-top bg-none lg:bg-section">
        <div className="container relative mx-auto px-4">
            <img className="hidden lg:block lg:absolute lg:top-[-80px] lg:right-0 lg:w-96" src={headerShadow} alt="" />
            <h2 className="leading-tight text-5xl mb-10">Grow your STR <br className="hidden lg:block" /> <b className="font-medium">gap-over-market</b><br className="block lg:hidden" /><img className="inline-block w-28 lg:w-40 lg:-mt-12 lg:-ml-5 lg:-mr-16" src={bigArrow} alt="" /> by <b className="text-7xl font-semibold">18<sup className="-top-[0.25em]">%</sup></b></h2>
            <p className="leading-normal mb-4">PROVEN RESULTS for enterprise STR operators using Quibble:</p>
            <div className="grid grid-cols-12 gap-4 mb-10">
                <div className="lg:col-span-3 sm:col-span-6 col-span-12 p-6 bg-white">
                    <p className="font-quicksand font-semibold text-5xl text-[#1BA6BF]">18<sup className="-top-[0.25em]">%</sup><img className="inline-block" src={arrow} alt="" /></p>
                    <hr className="my-2 border-t-4 border-dotted" />
                    <p className="leading-normal">Revenue increase</p>
                </div>
                <div className="lg:col-span-3 sm:col-span-6 col-span-12 p-6 bg-white">
                    <p className="font-quicksand font-semibold text-5xl text-[#1BA6BF]">8<sup className="-top-[0.25em]">%</sup><img className="inline-block" src={arrow} alt="" /></p>
                    <hr className="my-2 border-t-4 border-dotted" />
                    <p className="leading-normal">Occupancy increase</p>
                </div>
                <div className="lg:col-span-3 sm:col-span-6 col-span-12 p-6 bg-white">
                    <p className="font-quicksand font-semibold text-5xl text-[#1BA6BF]">1.5<small className="text-2xl">page</small><img className="inline-block" src={arrow} alt="" /></p>
                    <hr className="my-2 border-t-4 border-dotted" />
                    <p className="leading-normal">Search rank improvement</p>
                </div>
                <div className="lg:col-span-3 sm:col-span-6 col-span-12 p-6 bg-white">
                    <p className="font-quicksand font-semibold text-5xl text-[#1BA6BF]">9<sup className="-top-[0.25em]">%</sup><img className="inline-block" src={arrow} alt="" /></p>
                    <hr className="my-2 border-t-4 border-dotted" />
                    <p className="leading-normal">RevPAR uplift compared to retail-grade pricing software</p>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-4 justify-end items-center">
                <p className="text-center">Quibble for Enterprise offers actionable insights from 100+ customizable data variables</p>
                <Link className="font-quicksand font-semibold text-center block lg:inline-block  px-6 py-3 bg-violet-500 text-white rounded" to="">Contact us to see the science <img className="inline-block" src={buttonArrow} alt="" /></Link>
            </div>
        </div>
      </section>
      <section className="py-20">
          <div className="container mx-auto px-4">
              <div className="font-light text-center">
                  <h2 className="text-5xl">You’ve seen the <b className="font-semibold">retail-grade pricing tools</b></h2>
                  <p className="font-quicksand text-2xl leading-normal mb-4">(But <span className="font-semibold inline-block px-2 py-1 bg-[#F1BD5B] rounded">do they see you</span> and your enterprise needs?)</p>    
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
                          <h3 className="text-2xl text-white"><img className="inline-block h-16" src={logoWhite} alt="" /> for enterprise</h3>
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
                  <Link className="font-quicksand font-semibold text-center block lg:inline-block px-6 py-3 bg-violet-500 text-white rounded" to="">Reach out to see for yourself <img className="inline-block" src={buttonArrow} alt="" /></Link>
              </div>
          </div>
        </section>    <section className="py-20 pt-40 pb-[190px] sm:pb-[240px] md:pb[290px] lg:pb-[340px] bg-[#283334] relative ">
      <div className="w-0 h-0 border-l-[50vw] border-l-transparent border-t-[80px] border-t-white border-r-[50vw] border-r-transparent top-[-1px] right-0 absolute"></div>
      <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-4">
              <div className="lg:col-span-3">
                  <div className="bg-white grid grid-cols-[1fr,auto,1fr] lg:grid-cols-1 gap-6 p-6 rounded-lg">
                      <div className="p-4 text-center">
                          <img className="inline-block" src={iconStar} alt="" />
                          <p className="font-quicksand font-semibold text-[#1BA6BF]">STARS</p>
                      </div>
                      <div className="border-[1px]"></div>
                      <div className="p-4 text-center">
                          <img className="inline-block"  src={iconGift} alt="" />
                          <p className="font-quicksand font-semibold text-[#A473ED]">UNDERPRICED</p>
                      </div>
                      <div className="border-[1px]"></div>
                      <div className="lg:hidden"></div>
                      <div className="border-[1px] lg:hidden"></div>
                      <div className="p-4 text-center">
                          <img className="inline-block"  src={iconHeart} alt="" />
                          <p className="font-quicksand font-semibold text-[#D79E34]">OVERPRICED</p>
                      </div>
                      <div className="lg:w-auto border-[1px]"></div>
                      <div className="p-4 text-center">
                          <img className="inline-block"  src={iconRain} alt="" />
                          <p className="font-quicksand font-semibold text-[#697273]">PRODUCT ISSUE</p>
                      </div>
                  </div>
              </div>
              <div className="lg:col-span-7 lg:col-start-5">
                  <h1 className="text-4xl font-light leading-tight mb-10 text-white">Quibble’s <span className="font-semibold text-[#F1BD5B]">drill-down dashboards</span> help your CxOs and revenue managers make both <span className="font-semibold text-[#A8E4EB]">strategic decisions</span> and <span className="font-semibold text-[#C0A4EF]">daily tactical moves</span></h1>
                  <h2 className="text-2xl font-light leading-normal mb-10 text-white">Short-Term Rental operator data is intuitively presented in ways to <span className="font-semibold text-[#F1BD5B]">prioritize immediate action</span>, directing your attention from macro concerns to greasy-wheel problems, as needed.</h2>
                  <div className="text-center lg:text-left">
                      <ul className="inline-flex flex-col lg:flex-row items-center">
                          <li className="inline-flex">
                              <div className="text-white text-xl px-6 py-4 rounded border-[1px]">
                                  high-level insights
                              </div>
                          </li>
                          <li className="inline-block p-3">
                              <img className="inline-block rotate-90 lg:rotate-0" src={buttonArrow} alt="" />
                          </li>
                          <li className="inline-flex">
                              <div className="text-white text-xl px-6 py-4 rounded border-[1px]">
                                  regional + city trends
                              </div>
                          </li>
                          <li className="inline-block p-3">
                              <img className="inline-block rotate-90 lg:rotate-0" src={buttonArrow} alt="" />
                          </li>
                          <li className="inline-flex">
                              <div className="text-white text-xl px-6 py-4 rounded border-[1px]">
                                  granular details
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr className="my-10" />
          <h1 className="text-2xl text-center font-light leading-tight mb-10 text-white"><span className="font-semibold text-[#A8E4EB]">Look back</span> or <span className="font-semibold text-[#F1BD5B]">project out forward</span>,<br/>including sandbox scenarios and their effects on portfolio value</h1>
          <p className="font-light text-white text-center mb-10">(*or even limit to a specific geography to model out + drill down)</p>
      </div>




        <Flickity
          className={'carousel -mb-[300px] sm:-mb-[400px] md:-mb[500px] lg:-mb-[600px]'} // default ''
          options={{
            initialIndex: 1
          }}
        >
          <div className="carousel-cell p-4">
              <p className="text-xl text-white text-center mb-4">past month</p>
              <img className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]" src={pastMonth} alt="" />
          </div>
          <div className="carousel-cell p-4">
              <p className="text-xl text-white text-center mb-4">current month</p>
              <img className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]" src={currentMonth} alt="" />
          </div>
          <div className="carousel-cell p-4">
              <p className="text-xl text-white text-center mb-4">future month</p>
              <img className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]" src={futureMonth} alt="" />
          </div>
      </Flickity>



      </section>
      <section className="py-20 pt-[190px] sm:pt-[240px] md:pt[290px] lg:pt-[340px] ">
      <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-4">
              <div className="lg:col-span-6 lg:col-start-2">
                  <h1 className="text-5xl font-light leading-tight mb-10">Deploy Quibble analytics in one day</h1>
                  <p className="font-light leading-normal mb-4"><span className="font-semibold">Operators using our existing PMS partners</span> (including Guesty, Hostfully, and others) <span className="font-semibold">can get</span> <span className="font-semibold text-[#1BA6BF]">near-instant access</span> to our analytics platform to play around with live data. Otherwise, new PMS integrations take 2–4 weeks.</p>
                  <p className="font-light leading-normal mb-4">Customization, price modeling, quality control, and optional on-site training add only 3–4 weeks and require few operator resources.</p>
                  <p className="font-light leading-normal mb-10"><span className="font-semibold">Ultimately, it typically takes 4–8 weeks</span> to move from agreement to complete platform optimization, guided by a dedicated Quibble account manager.</p>
                  <Link className="font-quicksand font-semibold text-center block lg:inline-block px-6 py-3 bg-violet-500 text-white rounded" to="">Ready to talk? <img className="inline-block" src={buttonArrow} alt=""/></Link>
              </div>
          </div>
      </div>
      </section>
    </Layout>
}
