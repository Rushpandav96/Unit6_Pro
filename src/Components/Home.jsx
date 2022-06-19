import React from 'react'
//  import styled from 'styled-components'
import './Home.css'
const Home = () => {
  return (
    <div className='head'>
        <div id='head-img-container'>
            <div id='head-img1'>
            <h1>Chef cooked, healthy meals delivered to you.</h1>
            <h3>See meals available in your area!</h3>
            <form action="">
                <div>
                <div id='email-input'><label htmlFor="email">Email</label>
                <input type="text"/></div>
                <div id='pin-code-input'><label htmlFor="Postal-code">Postal Code</label>
                <input type="text" /></div>
                <button id='button-first'>explore meals</button>
                </div>
                <p>By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a> & will receive emails from Freshly.</p>
            </form>
            </div>
            <div id='head-img2'>
            <img src="" alt="" />
            </div>
        </div>
        <div id='first-container'>
           <div id="first-container-cards"></div>
           <div id="first-container-cards"></div>
           <div id="first-container-cards"></div>
           <div id="first-container-cards"></div>
        </div>
        <div id='second-div'>
            <div id='menu'>
                <h1></h1>
                <div id='menu-items'>
                    <div id='menu-flex'>
                    <div id="items">
                        <img src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg" alt="" />
                        <h3>steak popcorn</h3>
                        <p> 500cal | Gluten Free | Single-Service</p>
                    </div>
                    <div id="items">2</div>
                    <div id="items">3</div>
                    </div>
                    <div id='menu-flex'>
                    <div id="items">4</div>
                    <div id="items">5</div>
                    <div id="items">6</div>
                    </div>
                    <div id='menu-flex'>
                    <div id="items">7</div>
                    <div id="items">8</div>
                    <div id="items">9</div>
                    </div>
                    <button id='menu-btn'>
                        View Plans And Menu
                    </button>
                </div>
            </div>
        </div>
        <div id='third-div'>
            <div id="img-heading"></div>
            <div id="heading-third">
                <h1>Flexible plans that fit your life</h1>
                <p>
                    
We offer anywhere from 4–12 meals per week, with meals as low as $8.99 each. The bigger your box, the more you’ll save—and you can always pause, cancel, or change your plan at any time.
                </p>
            </div>
            <div id="third-item-container">
                <div id="third-items"></div>
                <div id="third-items"></div>
                <div id="third-items"></div>
                <div id="third-items"></div>
                <div id="third-items"></div>
            </div>
            <div id="items-third">
                <p>Shipping and tax added at checkout
Sign Up Now</p>
            </div>
            <button id='third-btn'>Sign Up Now</button>
        </div>

        <div id='last-container'>
        <div id="btm-div">
            <div id="div1">
                <div id="div1-sub">
                    <div id="sub2">
                    <div id="text-matter">
                        <h2>GET YOURSELF A WATCH THAT REFLECTS YOUR STYLE! INTRODUCING FASTRACK REFLEX VOX! NOW AVAILABLE</h2>
                        <div id="f-img">
                            
                            <img src="" alt="" />
                        </div>
                       
                    </div>
                    <div id="small-text"><h5>Know More</h5></div>

                    </div>
                    
                </div>
            <h1 id="heading">GET YOURSELF A WATCH THAT REFLECTS YOUR STYLE! INTRODUCING FASTRACK REFLEX VOX! NOW AVAILABLE</h1>
            <h5 id="lit-head">Know More</h5>
            </div>

        </div>

            </div>
        </div>
  )
 
}
export default Home;
