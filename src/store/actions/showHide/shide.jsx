import * as hideType from "../actionsType/hideTypes"

const showRegister = () => {
    return {
        type: hideType.SHOW_REGISTER
    }
}

const hideRegister = () => {
    return {
        type: hideType.HIDE_REGISTER
    }
}

const showLogin = () => {
    return {
        type: hideType.SHOW_LOGIN
    }
}

const hideLogin = () => {
    return {
        type: hideType.HIDE_LOGIN
    }
}

export const showR = () => {
    return dispatch => {
        dispatch(showRegister());
    }
}

export const hideR = () => {
    return dispatch => {
        dispatch(hideRegister());
    }
}

export const showL = () => {
    return dispatch => {
        dispatch(showLogin());
    }
}

export const hideL = () => {
    return dispatch => {
        dispatch(hideLogin());
    }
}
// export const hideR = () => {
//     return dispatch => {
//         dispatch(hideRegister());
//     }
// }