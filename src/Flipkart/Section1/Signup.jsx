import "./Login.css"
import Section1_Navbar from "./Section1_Navbar"
import { useForm } from "react-hook-form"

function Signup(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    let SendFormData = (data) => {
        console.log(data);
    }
    console.log(errors);

return(
    <>
            <Section1_Navbar />
            <div className="mainDiv">
                <div className="subDiv">
                    <div className="subDiv1">
                        <div className="innerDiv">
                            <span className="LoginTextSpan">
                                <span>Looks like you're new here!</span>
                            </span>
                            <p className="LoginParaSpan">
                                <span>
                                Sign up with your mobile number to get started
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="formDiv">
                        <form onSubmit={handleSubmit(SendFormData)}>
                            <div>
                                <input type="text" placeholder="Enter Username" {...register("user", {
                                    required: { value: true, message: "Username is Mandatory" }, minLength: { value: 6, message: "username should contain atleast 6 charactes" }, maxLength: { value: 10, message: "username should not contain more than 10 char" }, pattern: {
                                        value: /^[A-Za-z0-9]+$/,
                                        message: "Username should only contain alphanumeric characters"
                                    }
                                })} />
                            </div>
                            <div style={{ color: "red" }}>{errors.user?.message}</div>
                            <div>
                                <input type="text" placeholder="Enter Password" {...register("pass", {
                                    required: { value: true, message: "Password is Mandatory" }, minLength: { value: 8, message: "Password should be at least 8 characters long" },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: "Password should contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long"
                                    }
                                })} />
                            </div>
                            <div style={{ color: "red" }}>{errors.pass?.message}</div>
                            <div class="EpHS0A">By continuing, you agree to Flipkart's
                                <a class="c9RDXR" target="_blank" href="/pages/terms"> Terms of Use </a>
                                and <a class="c9RDXR" target="_blank" href="/pages/privacypolicy"> Privacy Policy</a>.
                            </div>
                            <div>
                                <button type="submit">Login</button>
                            </div>
                            <div class="ZJ3AS1"><a class="azBkHf" to="/login/signup">New to Flipkart? Create an account</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
)
}
export default Signup