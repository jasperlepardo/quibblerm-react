import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Section1 from '../components/section/section-1'
import Section2 from '../components/section/section-2'
import Section3 from '../components/section/section-3'
import Section4 from '../components/section/section-4'
import Section5 from '../components/section/section-5'


export default function Home() {
  return <Layout>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
    </Layout>
}