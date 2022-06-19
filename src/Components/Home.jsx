import React from 'react'
//  import styled from 'styled-components'
import './Home.css'
const Home = () => {
  return (
    <div className='head'>
        <div className='head-img-container'>
            <div className='head-img1'>
            <h1>Chef cooked, healthy meals delivered to you.</h1>
            <h3>See meals available in your area!</h3>
            <form action="">
                <div>
                <div className='email-input'><label htmlFor="email">Email</label>
                <input type="text"/></div>
                <div className='pin-code-input'><label htmlFor="Postal-code">Postal Code</label>
                <input type="text" /></div>
                <button className='button-first'>explore meals</button>
                </div>
                <p>By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a> & will receive emails from Freshly.</p>
            </form>
            </div>
            <div className='head-img2'>
            <img src="" alt="" />
            </div>
        </div>
        <div className='first-container'>
           <div className="first-container-cards"></div>
           <div className="first-container-cards"></div>
           <div className="first-container-cards"></div>
           <div className="first-container-cards"></div>
        </div>
        <div className='second-div'>
            <div className='menu'>
                <h1></h1>
                <div className='menu-items'>
                    <div className='menu-flex'>
                    <div className="items">
                        <img src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg" alt="" />
                        <h3>steak popcorn</h3>
                        <p> 500cal | Gluten Free | Single-Service</p>
                    </div>
                    <div className="items">2</div>
                    <div className="items">3</div>
                    </div>
                    <div className='menu-flex'>
                    <div className="items">4</div>
                    <div className="items">5</div>
                    <div className="items">6</div>
                    </div>
                    <div className='menu-flex'>
                    <div className="items">7</div>
                    <div className="items">8</div>
                    <div className="items">9</div>
                    </div>
                    <button className='menu-btn'>
                        View Plans And Menu
                    </button>
                </div>
            </div>
        </div>
        <div className='third-div'>
            <div className="img-heading"></div>
            <div className="heading-third">
                <h1>Flexible plans that fit your life</h1>
                <p>
                    
We offer anywhere from 4–12 meals per week, with meals as low as $8.99 each. The bigger your box, the more you’ll save—and you can always pause, cancel, or change your plan at any time.
                </p>
            </div>
            <div className="third-item-container">
                <div className="third-items"></div>
                <div className="third-items"></div>
                <div className="third-items"></div>
                <div className="third-items"></div>
                <div className="third-items"></div>
            </div>
            <div className="items-third">
                <p>Shipping and tax added at checkout
Sign Up Now</p>
            </div>
            <button className='third-btn'>Sign Up Now</button>
        </div>

        <div className='last-container'>
        <div className="btm-div">
            <div className="div1">
                <div className="div1-sub">
                    <div className="sub2">
                    <div className="text-matter">
                        <h2>GET YOURSELF A WATCH THAT REFLECTS YOUR STYLE! INTRODUCING FASTRACK REFLEX VOX! NOW AVAILABLE</h2>
                        <div className="f-img">
                            
                            <img src="" alt="" />
                        </div>
                       
                    </div>
                    <div className="small-text"><h5>Know More</h5></div>

                    </div>
                    
                </div>
            <h1 className="heading">GET YOURSELF A WATCH THAT REFLECTS YOUR STYLE! INTRODUCING FASTRACK REFLEX VOX! NOW AVAILABLE</h1>
            <h5 className="lit-head">Know More</h5>
            </div>

        </div>

            </div>
        </div>
  )
 
}
export default Home;