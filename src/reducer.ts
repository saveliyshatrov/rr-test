export const reducer = (state:any = 0, action:any) => {
    switch(action.type){
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        case 'RND':
            return state + action.value
        case 'ZERO':
            return 0
        default:
            return 0
    }
}
