import { useEffect, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SignUp() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const prevEmail = useLocation().state;

    const user = useSelector(state => state.user.user);

    function handleSubmit(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then(navigate("/profile"))
            .catch(err => alert(err));
    }

    useEffect(() => {
        if(user) {
            navigate("/browse");
        }
    })

    return (  
        <>
            <h2>Create Your Account</h2>
            <form className="entrance__form" onSubmit={ handleSubmit }>
                <input ref={ emailRef } defaultValue={prevEmail} type="email" placeholder="Email"/>
                <input ref={ passwordRef } type="password" placeholder="Password"/>
                <button className="btn">Sign Up</button>
            </form>
        </>
    );
}

export default SignUp;