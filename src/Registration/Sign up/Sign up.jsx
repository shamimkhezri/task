import Back from "../img/pic1.png";
function Signup() {
    return (
        <>
            <div className="flex items-center ">
                <div>
                    <img src={Back} />
                </div>
                <div className="p-3">
                    <h1 className="text-blue-700 font-extrabold text-4xl py-5">Login</h1>
                    <p>please enter your login detail to sign in</p>
                    <input className="border" type="text " placeholder="Full name"/>
                    <input className="border" type="text" placeholder="Email address" />
                    <input className="border" type="Number" placeholder="Password" />
                    <button>Sign up</button>
                    <p>Dont have an account? Log in</p>
                    <p>or continue with</p>
                </div>
            </div>
        </>
    )
}
export default Signup;