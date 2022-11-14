const authReducer = (state= { data:null}, action) => {
    switch (action.type) {
        case 'AUTH':
            //we store data in local storage , json.stringify converts json data into string 
            //?. is a optional operator, if data exist it select that data from actions folder's auth.js

            //{ ...action?.data} this data we are getting from backend
            localStorage.setItem('Profile', JSON.stringify({ ...action?.data}))
            return { ...state, data: action?.data }
        case 'LOGOUT':
            localStorage.clear();
            return { ...state, data: null };
        default:
            return state;
    }
}

export default authReducer