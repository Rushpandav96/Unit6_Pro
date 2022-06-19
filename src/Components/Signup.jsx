import "./Signup.css"
export const Signup = () => {
    return (
        <div id="main">

        <div id="nav">
            <div id="nav1">
                <div id="sub1">
                    <h1 className="title">freshly</h1>
                </div>
            </div>


            <div id="nav2">
                <div id="sub2">
                    <div className="min1">Plans</div>

                    <div className="min2"> Day </div>


                    <div className="min3">Meals</div>


                    <div className="min4">Checkout</div>
                </div>
            </div>


            <div id="nav3">
                <div id="sub3">
                    <a id="no">
                        <span id="noo">Cutomer Support</span>
                    </a>
                </div>
            </div>
            

        </div>
        
       <div id="main2">
            <img id="img" src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932"/>
            <div id="mi">
                <p id="head">Dinner's ready!</p>
                <p id="onemore">Chef-prepared, healthy meals delivered weekly</p>
                <div id="box">
                    <input id="in" type="text" placeholder="Email" />
                    <input id="put" type="text" placeholder="Zip" />
                    <button id="btn">Continue</button>
                </div>
                <p id="p">Already have an acoount?<a id="pt" href="Login.jsx">Log in</a></p>
                <p id="mp">By continuing, you agree to our <a id="pta">Terms</a> and <a id="ptag">Privacy Policy</a> & will receive emails from Freshly.</p>

            </div>
            <div id="dn">
            <div id="div">
                <h3 id="subd">Common Questions</h3>
            </div>
            
                <div id="ano">
                    <div id="an">
                        <div id="ky">
                        <span id="ky1">How many servings are your meals?</span>
                        
                        </div>
                        <hr />
                        <div id="ky">
                        <span id="ky1">Do you accommodate dietary preferences?</span>
                        </div>
                        <hr />
                        <div id="ky">
                        <span id="ky1">How long do the meals last?</span>
                        </div>
                        <hr />
                        <div id="ky">
                        <span id="ky1">How do I heat up my meals?</span>
                        </div>
                        <hr />
                        <div id="ky">
                        <span id="ky1">How does shipping work?</span>
                        </div>
                        <hr />
                        <div id="ky">
                        <span id="ky1">How does the subscription work?</span>
                        </div>

                    </div>
                </div>
                </div>
            
       </div>

        </div>

        
    )


}