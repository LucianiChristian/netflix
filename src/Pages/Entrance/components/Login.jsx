import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";

function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
    }

    const user = useSelector(state => state.user.user);

    const navigate = useNavigate();
    useEffect(() => {
        if(user) {
            navigate("/browse");
        }
    })

    return (  
        <>
            <h2>Sign In</h2>
            <form className="entrance__form" onSubmit={ handleSubmit }>
                <input ref={ emailRef } type="email" placeholder="Email"/>
                <input ref={ passwordRef } type="password" placeholder="Password"/>
                <button className="btn">Sign In</button>
            </form>
            <p className="entrance__signUp">
                New to Netflix? <Link to="/signUp">Sign Up Now.</Link>
            </p>
        </>
    );
}

export default Login;