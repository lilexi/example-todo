import * as regActions from './../../actions/actionTypes/regTypes'

let authState = {
    user: '',
    loading: 'true',
    error: null
};

const regStart = (state, actions) => {
    const newState = {user: null, error: null, loading: true};
    return newState;
};

const regFailed= (state, action) =>{
    const newState = {user: null, loading: false, error: action.err};
    return newState;
};

const regSuccess= (state, action) => {
    const newState = {user: action.data, loading: false, error: null};
    return newState;
};

const reducer = (state = authState, action) => {
    switch (action.type) {
        case regActions.REG_START:
            return regStart(state,action);
        case regActions.REG_FAILED:
            return regFailed(state,action);
        case regActions.REG_SUCCESS:
            return regSuccess(state,action);
        default: return state;
    }
};

export default reducer;