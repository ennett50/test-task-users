import {
    CREATE_USER_FAIL,
    CREATE_USER_START,
    CREATE_USER_SUCCESS
} from "./constants";

export function createUser(data) {
    console.log(data);

    return (dispatch) => {
        dispatch({
            type: CREATE_USER_START
        });

        // use fetch for side effects, now only example with setTimeout
        const simulationFetch = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("result from API");
            }, 3000);
        });

        simulationFetch
            .then(() => {
                dispatch({
                    type: CREATE_USER_SUCCESS,
                    generateId: true,
                    response: data
                });
            })
            .catch((error) =>
                dispatch({
                    type: CREATE_USER_FAIL,
                    error
                })
            );
    };
}
