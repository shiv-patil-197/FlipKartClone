import SignupStyle from "./Signup.module.css"
import Section1_Navbar from "./Section1_Navbar"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
    const { register, handleSubmit, formState: { errors },watch } = useForm();
    let NavigateToLoginPage = useNavigate()

    let SendFormData = async (data) => {
    //   e.preventDefault();
    // console.log(data);

    try{

        const queryParams = {
            number:number,
            email:email
        };
        let {data:{data}}=await axios.get("http://localhost:5500/getUser",{ params: queryParams });  
        if(data){
            alert(" not found");
        }else{
            await axios.post("http://localhost:5500/addUser", data)  
        }

     }
     catch(error){
      console.log(error);
     }
    }
    const password = watch("password", ""); // Watch the password field to compare with confirmPassword
    // console.log(errors);
    let NavigateToLogin = () => {
        NavigateToLoginPage("/login")
    }
    return (
        <>
            <Section1_Navbar />
            <div className={SignupStyle.mainDiv}>
                <div className={SignupStyle.subDiv}>
                    <div className={SignupStyle.subDiv1}>
                        <div className={SignupStyle.innerDiv}>
                            <span className={SignupStyle.LoginTextSpan}>
                                <span>Looks like you're new here!</span>
                            </span>
                            <p className={SignupStyle.LoginParaSpan}>
                                <span>
                                    Sign up with your mobile number to get started
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={SignupStyle.formDiv}>
                        <form onSubmit={handleSubmit(SendFormData)}>
                            <div>
                                <input  type="text" placeholder="Enter FirstName" {...register("fn", {
                                    required: { value: true, message: "FirstName is Mandatory" }, minLength: { value:2, message: "username should contain atleast 2 charactes" }, maxLength: { value:10, message: "username should not contain more than 10 char" }, pattern: {
                                        value: /^[A-Za-z]+$/,
                                        message: "FirstName should contain only alphabatic characters"
                                    }
                                })} />
                            </div>
                            <div style={{ color: "red",fontSize:"12px"}}>{errors.fn?.message}</div>
                            <div>
                                <input  type="text" placeholder="Enter LastName" {...register("ln", { pattern: {
                                        value: /^[A-Za-z]+$/,
                                        message: "LastName should contain only alphabatic characters"
                                    }
                                })} />
                            </div>
                            <div style={{ color: "red", fontSize:"10px"}}>{errors.ln?.message}</div>
                            <div>
                                <input  type="tel" placeholder="Enter Number" {...register("number", {
                                    required: { value: true, message: "Number is Mandatory" }, pattern: {
                                        value: /^[6-9]\d{9}$/,
                                        message: "Number should only contain Numeric characters and should conatin 10 digits and should start with 6/7/8/9"
                                    } 
                                })} />
                            </div>
                            <div style={{ color: "red", fontSize:"10px" }}>{errors.number?.message}</div>
                            <div>
                                <input  type="email" placeholder="Enter Email" {...register("email", {
                                    required: { value: true, message: "Email is Mandatory" },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid Email format"
                                    }
                                })} />
                            </div>
                            <div style={{ color: "red", fontSize:"10px" }}>{errors.email?.message}</div>
                            <div>
                                <input  type="password" placeholder="Enter Password" {...register("password", {
                                    required: { value: true, message: "Password is Mandatory" }, minLength: { value: 8, message: "Password should be at least 8 characters long" },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: "Password should contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long"
                                    }
                                })} />
                            </div>
                            <div style={{ color: "red", fontSize:"10px" }}>{errors.password?.message}</div>
                            <div>
                                <input  type="password" placeholder="Enter confirmPassword" {...register("confirmPassword", {
                                    required: { value: true, message: "confirmPassword is Mandatory" }, 
                                    validate: (value) => value === password || "The passwords do not match"
                                })} />
                            </div>
                            <div style={{ color: "red", fontSize:"10px" }}>{errors.confirmPassword?.message}</div>
                            <div class={SignupStyle.EpHS0A} >By continuing, you agree to Flipkart's
                                <a class={SignupStyle.c9RDXR} target="_blank" href="/pages/terms"> Terms of Use </a>
                                and <a class={SignupStyle.c9RDXR} target="_blank" href="/pages/privacypolicy"> Privacy Policy</a>.
                            </div>
                            <div>
                                <button type="submit">CONTINUE</button>
                            </div>
                            <div>
                                <button class={SignupStyle.toLogin} onClick={NavigateToLogin}>Existing User? Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signup