import {
    CREATE_USER_FAIL,
    CREATE_USER_START,
    CREATE_USER_SUCCESS
} from "./constants";

const initialState = {
    users: {},
    error: null,
    loading: false
};

export default (state = initialState, action) => {
    const { type, response, error, randomId } = action;

    switch (type) {
        case CREATE_USER_START:
            return {
                ...state,
                loading: true
            };

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: {
                    ...state.users,
                    [randomId]: {
                        ...state.users[randomId],
                        id: randomId,
                        ...response,
                        loaded: true
                    }
                }
            };

        case CREATE_USER_FAIL:
            return {
                ...state,
                error
            };

        default:
            return state;
    }
};
