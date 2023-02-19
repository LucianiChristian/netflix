import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

function SignUp() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    function handleSubmit(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then(userCredential => console.log(userCredential))
            .catch(err => console.log(err));
    }

    return (  
        <>
            <h2>Create Your Account</h2>
            <form className="entrance__form" onSubmit={ handleSubmit }>
                <input ref={ emailRef } type="email" placeholder="Email"/>
                <input ref={ passwordRef } type="password" placeholder="Password"/>
                <button className="btn">Sign Up</button>
            </form>
        </>
    );
}

export default SignUp;