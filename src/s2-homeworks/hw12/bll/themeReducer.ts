const initState = {
    themeId: 1,
}
type ChangeThemeActionType = {
    type: 'SET_THEME_ID'
    id:number
}

export const themeReducer = (state = initState, action: ChangeThemeActionType): typeof initState => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
        return {...state, themeId: Number(action.id)}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any
