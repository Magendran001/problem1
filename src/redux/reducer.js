import { actionTypes } from "./action";

const initState = { isLoading: false, isError: false, data: [] };

function reducer(state = initState, action) {
    // write code here

    switch (type) {
        case actionTypes.ADD_USER_REQUEST:
            {
                return { ...state, isLoading: true }
            }
        case actionTypes.ADD_USER_SUCCESS:
            {
                return { ...state, isLoading: false, data: [...state.data, payload] }
            }
        case actionTypes.ADD_USER_FAILURE:
            {
                return { ...state, isLoading: false, isError: true }
            }
    }
}

export default reducer;
