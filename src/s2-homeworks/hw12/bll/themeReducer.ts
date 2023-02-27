const initState = {
    id: 1,
}
type ChangeThemeActionType = {
    type: 'SET_THEME_ID'
    id:number
}
type StateType = {
    id: number
}

export const themeReducer = (state = initState, action: ChangeThemeActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
        return {...state, id: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any
