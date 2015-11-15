
export const initialState = {
    status: 'waiting',
};

export function appReducer(state = initialState, action) {
    var { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
}
