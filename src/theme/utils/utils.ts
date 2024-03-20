export const pixleToEm = (px: number, withEM : boolean) => {
    if(withEM){
        return `${px / 16}em`;
    }
    return px / 16;
}
export const emToPixle = (em: number) => {
    return em * 16;
}