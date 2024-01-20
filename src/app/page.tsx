
import Image from 'next/image'
import { CiCreditCard1 } from "react-icons/ci";
import { GoProjectRoadmap, GoQuestion } from "react-icons/go";
import { PiStack } from "react-icons/pi";
import "./App.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bodyContainer">
      <div className="main-container">
        <nav className="header">
          <div className='headerLogo'>
            <a href="#">CreIT</a>
          </div>
          <ul className='navList'>
            <li className='navItem'>
              <Link href="#benefits" className='navLinks'>
                <span><GoProjectRoadmap /></span>  Benefits</Link>
            </li>
            <li className='navItem'>
              <Link href="#pricing" className='navLinks'><span><CiCreditCard1 /></span>  Pricing</Link></li>
            <li className='navItem'>
              <Link href="#faqs" className='navLinks'><span><GoQuestion /></span>  FAQs</Link></li>
          </ul>
        </nav>
        <section className='hero'>
          <h1>The better way to get Development Done</h1>
          <p>Development as a Service for startups, scale-ups, enterprises and agencies. Just join, create some asks, and we deliver.</p>
          <Link href="#pricing"><button>See plans</button></Link>
        </section>
        <section className='benefits' id="benefits">
          <div className="engineerWorks">
            <h3>Created by teams at</h3>
            <div className="companiesLogo">
              <span><Image src="/assets/images/adobe.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/amazon.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/google.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/salesforce.png" alt="Adobe" width={100} height={100} /></span>
              <span><Image src="/assets/images/tinder.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/darwinbox.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/gojek.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/guardian.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/happay.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/linkedin.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/myntra.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/wallmart.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/oyo.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/phonepe.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/target.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/xoxoday.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/zomato.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/goldmann.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/naukri.png" alt="Adobe" width={150} height={100} /></span>
              <span><Image src="/assets/images/vedantu.png" alt="Adobe" width={150} height={100} /></span>
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
        <section className='proto'>
          <div className='protoCard'>
            <p>Add unlimited users</p>
            <Image src="/assets/images/card1.png" alt="card1" width={500} height={500} />
          </div>
          <div className='protoCard'>
            <p>Easily check on progress</p>
            <Image src="/assets/images/card2.png" alt="card2" width={500} height={500} />
          </div>
          <div className='protoCard'>
            <p>Get results, super fast</p>
            <Image src="/assets/images/card3.png" alt="card3" width={500} height={500} />
          </div>
          <div className='protoCard'>
            <p>Pay for what you use</p>
            <Image src="/assets/images/card4.png" alt="card4" width={500} height={500} />
          </div>
        </section>
        <section className='pricing' id="pricing">
          <h3 className='pricingHeader'>Membership levels</h3>
          <p className='pricingDescription'>We offer a simple pricing structure that is easy to understand and easy to budget for.</p>
          <div className='pricingCards'>
            <div className='pricingCard'>
              <h3>Monthly</h3>
              <h2>$ 4000/m</h2>
              <Link href="https://calendly.com/paarthg"><button>Get Started</button></Link>
              <ul className='pricingCardFeatures'>
                <p>This includes:</p>
                <li>Unlimited requests</li>
                <li>Unlimited projects</li>
                <li>Unlimited users</li>
                <li>Senior, in-house talent</li>
                <li>Slack support</li>
                <li>Pause or cancel anytime</li>
              </ul>
              <Link href="https://calendly.com/paarthg">Book a call</Link>
            </div>
            <div className='pricingCard'>
              <h3>Annually</h3>
              <h2>$ 42000/yr</h2>
              <Link href="https://calendly.com/paarthg"><button>Get Started</button></Link>
              <ul className='pricingCardFeatures'>
                <p>This includes:</p>
                <li>Unlimited requests</li>
                <li>Unlimited projects</li>
                <li>Unlimited users</li>
                <li>Senior, in-house talent</li>
                <li>Slack support</li>
                <li>Pause or cancel anytime</li>
              </ul>
              <Link href="https://calendly.com/paarthg">Book a call</Link>
            </div>
            <div className='fullStackCard'>
              <span><PiStack /></span>
              <h3>Full Stack Development</h3>
              <p>
                {`From crafting sleek front-end experiences to seamlessly weaving the intricate threads of Node.js for powerful back-end support, we've got your Full Stack needs covered. Let us handle the API development magic that brings your UI 
                to life!`}
              </p>
              <Link href="https://calendly.com/paarthg">Contact Us</Link>
            </div>
          </div>
        </section>
        <section className='extraCard'>
          <h1>See if we are right for you.</h1>
          <p>Get a guided tour through creIT Labs, and find out how you and your team can benefit from having a full stack development subscription.</p>
          <Link href="https://calendly.com/paarthg"><button>Get Started</button></Link>
        </section>
        <section className='testimonials'>
          <h4>7,500 requests completed for 30+ customers</h4>
          <div className='testimonialsCards'>
            <div className='testimonialsCard'>
              <p>
                {`I love working with this team. They are fun, reliable, and incredibly efficient.`}
              </p>
              <span className="name">Shashank Kumar</span>
              <span className="Logo">
                <Image src="/assets/images/salesforce.png" alt="salesforce" width={75} height={75} />
              </span>
            </div>
            <div className='testimonialsCard'>
              <p>
                {`I highly recommend them every time. They are wonderful!`}
              </p>
              <span className="name">Shivam Sharma</span>
              <span className="Logo">
                <Image src="/assets/images/amazon.png" alt="amazon" width={75} height={75} />
              </span>
            </div>
            <div className='testimonialsCard'>
              <p>
                {`A fantastic, professional, and super dedicated development team. They care about your product as if it were their own. I couldn't recommend a better group of people to work with.`}
              </p>
              <span className="name">Rishabh Baisoya</span>
              <span className="Logo">
                <Image src="/assets/images/happay.png" alt="happay" width={75} height={75} />
              </span>
            </div>
            <div className='testimonialsCard'>
              <p>
                {`They are diligent, organized, and produce high-quality work at startup speed. They seamlessly integrate into your team, work methodically, and never compromise on quality. Every entrepreneur would be fortunate to have such a partner.`}
              </p>
              <span className="name">Aniket Kumar</span>
              <span className="Logo">
                <Image src="/assets/images/darwinbox.png" alt="darwinbox" width={75} height={75} />
              </span>
            </div>
            <div className='testimonialsCard'>
              <p>
                {`When it comes to tackling challenging tasks, they can truly work wonders. They are reliable, approachable, and always there for their customers.`}
              </p>
              <span className="name">Vikas Singh</span>
              <span className="Logo">
                <Image src="/assets/images/xoxoday.png" alt="xoxoday" width={75} height={75} />
              </span>
            </div>
            <div className='testimonialsCard'>
              <p>
                {`They are the best.`}
              </p>
              <span className="name">Amarjeet Singh</span>
              <span className="Logo">
                <Image src="/assets/images/tinder.png" alt="tinder" width={75} height={75} />
              </span>
            </div>
          </div>
        </section>
      </div>
      <section className='faq' id="faqs">
        <h3>FAQs</h3>
        <div className='faqCards'>
          <div className='faqCard'>
            <h4>How does it work?</h4>
            <p>
              {`We have a team of engineers who are ready to work on your requests. You can submit requests through our dashboard, and we will get to work. We will keep you updated on the progress of your requests, and you can always reach out to us through Slack.`}
            </p>
          </div>
          <div className='faqCard'>
            <h4>How many requests can I make?</h4>
            <p>
              {`You can make unlimited requests. We will work on one request at a time, and we will not start a new request until the previous one is completed. We will keep you updated on the progress of your requests, and you can always reach out to us through Slack.`}
            </p>
          </div>
          <div className='faqCard'>
            <h4>How many users can I add?</h4>
            <p>
              {`You can add unlimited users to your account. You can also add unlimited projects to your account. We will work on one project at a time, and we will not start a new project until the previous one is completed.`}
            </p>
          </div>
          <div className='faqCard'>
            <h4>What if I need more than one request at a time?</h4>
            <p>
              {`You can add unlimited users to your account. You can also add unlimited projects to your account. We will work on one project at a time, and we will not start a new project until the previous one is completed.`}
            </p>
          </div>
          <div className='faqCard'>
            <h4>What if I need more than one project at a time?</h4>
            <p>
              {`You can add unlimited users to your account. You can also add unlimited projects to your account. We will work on one project at a time, and we will not start a new project until the previous one is completed.`}
            </p>
          </div>
          <div className='faqCard'>
            <h4>What if I need to pause or cancel my subscription?</h4>
            <p>
              {`You can add unlimited users to your account. You can also add unlimited projects to your account. We will work on one project at a time, and we will not start a new project until the previous one is completed.`}
            </p>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <div className='addresses'>
          <address>India:<br />Cyber Hub, Gurugram<br />Zip Code: 122002</address>
          <address>USA:<br />635 w 42nd st, New York,<br />Zip Code: 10036</address>
        </div>
        <br />
        <br />
        <p>Copyright © 2023. All rights reserved.</p>
      </footer>
    </main>
  )
}
