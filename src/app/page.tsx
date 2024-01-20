
import Image from 'next/image'
import { CiCreditCard1 } from "react-icons/ci";
import { GoProjectRoadmap, GoQuestion } from "react-icons/go";

import "./App.css";

export default function Home() {
  return (
    <div className="bodyContainer">
      <main className="main-container">
        <nav className="header">
          <div className='headerLogo'>
            <a href="#">CreIT</a>
          </div>
          <ul className='navList'>
            <li className='navItem'><a href="#" className='navLinks'><span><GoProjectRoadmap /></span>  Benefits</a></li>
            <li className='navItem'><a href="#" className='navLinks'><span><CiCreditCard1 /></span>  Pricing</a></li>
            <li className='navItem'><a href="#" className='navLinks'><span><GoQuestion /></span>  FAQs</a></li>
          </ul>
        </nav>
        <section className='hero'>
          <h1>The better way to get Development Done</h1>
          <p>Development as a Service for startups, scaleups, enterprises and agencies. Just join, create some asks, and we deliver.</p>
          <button>See plans</button>
        </section>
        <section className='benefits'>
          <div className="engineerWorks">
            <h3>Trusted By teams at</h3>
            <div className="companiesLogo">
              {/* <Image src="/images/creit-engineer-works.png" alt="CreIT Engineer Works" width={100} height={100} /> */}
            </div>
          </div>
          <div className='techStack'>
            <h2>Variety of capabilities from the top 1% of engineering talent around the world ✨</h2>
            <div className='techStackCards'>
              <span>React</span>
              <span>Vue</span>
              <span>Angular</span>
              <span>Next.Js</span>
              <span>Nest.Js</span>
              <span>Node.Js</span>
              <span>Express</span>
              <span>Django</span>
              <span>React Native</span>
              <span>Flutter</span>
              <span>Swift</span>
              <span>Kotlin</span>
              <span>AWS</span>
              <span>Azure</span>
              <span>GCP</span>
              <span>Kubernetes</span>
              <span>Docker</span>
              <span>UI/UX</span>
              <span>Figma</span>
              <span>Sketch</span>
              <span>Adobe XD</span>
              <span>Selenium</span>
              <span>Cypress</span>
              <span>Solidity</span>
              <span>Web3.js</span>
              <span>TensorFlow</span>
              <span>PyTorch</span>
              <span>Keras</span>
            </div>
          </div>
        </section>
        <section className='pricing'>
          <h3 className='pricingHeader'>Membership levels</h3>
          <p className='pricingDescription'>We offer a simple pricing structure that is easy to understand and easy to budget for.</p>
          <div className='pricingCards'>
            <div className='pricingCard'>
            </div>
          </div>
        </section>
        <section className='testimonials'></section>
        <section className='faq'></section>
        <section className='extraCard'>
          <h1>See if we are right for you.</h1>
          <p>Get a guided tour through creIT Labs, and find out how you and your team can benefit from having a full stack development subscription.</p>
          <button>Get Started</button>
        </section>
        <footer className='footer'>
          Copyright © 2023. All rights reserved.
        </footer>
      </main>
    </div>
  )
}
