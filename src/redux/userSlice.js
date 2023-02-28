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
        
        docs.forEach(doc => {
            const data = doc.data();

            const startDate = new Date(data.current_period_start.seconds * 1000).toLocaleDateString();
            const endDate = new Date(data.current_period_end.seconds * 1000).toLocaleDateString();

            activeSubscriptionsResult.push({
                plan: data.role,
                startDate,
                endDate,
            })}
        );

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