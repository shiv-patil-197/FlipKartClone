import LoginStyle from "./Login.module.css"
import { useForm } from "react-hook-form"
import Section1_Navbar from "./Section1_Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login() {
    let [login, setLogin]=useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    let SendFormData =async ({user,pass}) => {
        console.log(user,pass);
     try{

        const queryParams = {
            username: user
        };
        let {data:{data}}=await axios.get("http://localhost:5500/getUser",{ params: queryParams });  
        if(!data){
            alert("username not found");
        }else if(pass===data.password){
            alert("user logged in successfully");
            setLogin(true)
        }else{
            alert("wrong password");
        }

     }
     catch(err){
        console.log(err);
     }

    }

    return (
        <>
            <Section1_Navbar />
            <div className={LoginStyle.mainDiv}>
                <div className={LoginStyle.subDiv}>
                    <div className={LoginStyle.subDiv1}>
                        <div className={LoginStyle.innerDiv}>
                            <span className={LoginStyle.LoginTextSpan}>
                                <span>Login</span>
                            </span>
                            <p className={LoginStyle.LoginParaSpan}>
                                <span>
                                    Get access to your Orders, Wishlist and Recommendations
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={LoginStyle.formDiv}>
                        <form onSubmit={handleSubmit(SendFormData)}>
                            <div>
                                <input type="text"  class={LoginStyle.input_field} placeholder="" {...register("user", {
                                    required: { value: true, message: "Username is Mandatory" }, minLength: { value: 6, message: "username should contain atleast 6 charactes" }
                                })} />
                                <label htmlFor="" class={LoginStyle.floating_label}>Enter Mobile Number</label>
                            </div>
                            <div  class={LoginStyle.errorDiv} style={{ color: "red",fontSize:"12px" }}>{errors.user?.message}</div>
                            <div>
                                <input type="text" placeholder=""  class={LoginStyle.input_field}{...register("pass", {
                                    required: { value: true, message: "Password is Mandatory" }, minLength: { value: 8, message: "Password should be at least 8 characters long" },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: "Password should contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long"
                                    }
                                })} />
                                <label htmlFor="" class={LoginStyle.floating_label}>Enter Password</label>
                            </div>
                            <div class={LoginStyle.errorDiv} style={{ color: "red",fontSize:"12px" }}>{errors.pass?.message}</div>
                            <div class={LoginStyle.EpHS0A}>By continuing, you agree to Flipkart's
                                <a class={LoginStyle.c9RDXR} target="_blank" href="/pages/terms"> Terms of Use </a>
                                and <a class={LoginStyle.c9RDXR} target="_blank" href="/pages/privacypolicy"> Privacy Policy</a>.
                            </div>
                            <div>
                                <button type="submit">Login</button>
                            </div>
                            <div class={LoginStyle.ZJ3AS1}><Link class={LoginStyle.azBkHf} to="/login/signup">New to Flipkart? Create an account</Link></div>
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}
export default Login