import React from 'react'

import { Helmet } from 'react-helmet'
import login from '../components/login'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  
} from 'react-router-dom'
import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './home.css'
import createcharger from '../components/createcharger'
import deletecharger from '../components/deletecharger'
import getcharger from '../components/getcharger'
import listchargers from '../components/listchargers'
import updatecharger from '../components/updatecharger'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Plug In & Go</title>
        <meta property="og:title" content="Indelible Hasty Elephant" />
      </Helmet>
      <div className="home-header">
        <header
          data-thq="thq-navbar"
          className="home-navbar-interactive navbarContainer"
        >
          <span className="home-logo logo">Plug In & Go</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links"></nav>
            <div className="home-buttons">
          

              <Router>
              <Link to="/">
              <button className="home-hero-button1 buttonFilled">
                Home
                </button>
              </Link>
       
              <NavLink to="/create">
              <button className="home-hero-button1 buttonFilled">
                Create
                </button>
              </NavLink>

             

              <Link to="/delete/id">
              <button className="home-hero-button1 buttonFilled">
                Delete charger
                </button>
              </Link>

              <Link to="/update/:id">
              <button className="home-hero-button1 buttonFilled">
                Update charger
                </button>
              </Link>

              <Link to="/getcharger/id">
              <button className="home-hero-button1 buttonFilled">
                Get charger
                </button>
              </Link>
               
              <Route path="/login" component={login} />
              
              <Route path="/" element={<Home />} />
            

              <Route path="/create" component={createcharger} />
              
              <Route path="/delete/:id" component={deletecharger} />
              <Route path="/getcharger/:id" component={getcharger} />
              <Route path="/update/:id" component={updatecharger} />
              </Router>
            </div>
          </div>
          
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">CHARGEUP</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav12 bodySmall">Home</span>
                <span className="home-nav22 bodySmall">Charging Stations</span>
                <span className="home-nav32 bodySmall">Pricing</span>
                <span className="home-nav42 bodySmall">FAQ</span>
                <span className="home-nav52 bodySmall">Contact</span>
              </nav>
              <div className="home-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1 heroContainer">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">Power Up Your Ride</h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span> EV Charging Stations</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <Router>
              <Link to={{ pathname: '/getallchargers', target: '_blank' }}>
        <button className="home-hero-button1 buttonFilled">
          Find nearby Chargers
        </button>
      </Link>
              <Route path="/getallchargers" component={listchargers} />
              </Router>
              
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Find the nearest EV charging station near you
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Key features provided by us
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                heading="Fast Charging"
                subHeading="Get your EV charged quickly."
              ></FeatureCard>
              <FeatureCard
                heading="Compatibility"
                subHeading="Find compatible charger for your vehicle"
              ></FeatureCard>
              <FeatureCard
                heading="User-Friendly Interface"
                subHeading="Easily navigate  charging stations with our intuitive user interface."
              ></FeatureCard>
              <FeatureCard
                heading="Transparent Pricing"
                subHeading="Know exactly how much you'll pay for charging with our transparent pricing system."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="pricingContainer">
          <div className="home-container04">
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
               
              </span>
            </span>
          </div>
          <div className="home-container05">
            
            
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Charge Your EV with Ease
          </h1>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Our EV charging stations are designed to provide fast and
                  reliable charging for all electric vehicles. With our network
                  of stations, you can easily find a convenient location to
                  power up your EV on the go. Explore our pricing options and
                  compatibility details below.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container21">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text62 heading2">Common questions</h2>
              <span className="home-text63 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container22">
              <Question1
                answer=" EV charging stations are compatible with all electric vehicles, including plug-in hybrids and fully electric models."
                question="What types of vehicles are compatible with your EV charging stations?"
              ></Question1>
              <Question1
                answer="The cost of charging a vehicle at the stations varies depending on the location and the charging speed selected. Please refer to the pricing information on our website for specific rates."
                question="How much does it cost to charge a vehicle at your charging stations?"
            
          
              ></Question1>
             
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container23">
            <span className="logo">Plug In & Go</span>
            <nav className="home-nav1">
              <span className="bodySmall">Home</span>
              <span className="home-nav221 bodySmall">Charging Stations</span>
              <span className="home-nav321 bodySmall">Pricing</span>
              <span className="home-nav421 bodySmall">FAQ</span>
              <span className="home-nav521 bodySmall">Contact</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container24">
            <span className="bodySmall home-text66">
            
            </span>
          
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
