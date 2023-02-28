import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const userSlice = createSlice({
    name: "user",
    initialState: { user: null },
    reducers: {
        login: (state, action) => { state.user = action.payload }, 
        logout: (state) => { state.user = null },
    }
})

function loginAsync(uid, email) {
    return async (dispatch) => {
        const subscriptionsRef = collection(db, `customers/${uid}/subscriptions`);

        const q = query(subscriptionsRef, where("status", "==", "active"));
        const docs = await getDocs(q);
        
        const activeSubscriptionsResult = [];
        
        docs.forEach(doc => activeSubscriptionsResult.push(doc.data().role));

        dispatch(login({
            uid: uid,
            email: email,
            subscription: activeSubscriptionsResult[0] || null,  
        }));
    }
}

const { login, logout } = userSlice.actions;

export default userSlice.reducer;
export { login, logout, loginAsync };