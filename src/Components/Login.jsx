import "./Login.css"
export const Login = () => {
    return(
        <div id="main">
                <div id="main_sub">
                    <div id="main_sub1">
                        <div id="main_sub2">
                            <a id="one" href="">Plans & Menu</a>
                            <a id="two" href="">About</a>
                            <a id="three" href="">For Business</a>
                            <a id="four" href="">Gifts</a>
                            <div id="norm"><h1 id="h">freshly</h1></div>

                            <a id="five" href="">Get $30</a>
                            <a id="six" href="">Help</a>
                            <a id="seven" href="">Log In</a>
                            <a id="eight" href="">Sign Up</a>
                        </div>
                    </div>
                </div>


                <div id="as">
                    <div id="asch">
                        <h1 id="header">Log In</h1>

                        <div id="head-below">


                            <div id="sub-below">
                                <label id="label">Email</label>
                               <input id="form" type="text" placeholder="you@domain.com" />
                            </div>

                            <div id="sub-below">
                                <label id="label">Password</label>
                               <input id="form" type="text" placeholder="enter password" />
                            </div>

                            <button id="btn">Log In</button>
                        </div>

                        <div id="last">
                            <a id="ancher">Forgot Password?</a>
                            <div id="dk">
                                <a id="anch">Don't have an account?</a>
                                <a id="ancher">Get Started</a>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    )
}