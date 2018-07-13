export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        // const serializedState = cookie.load('state')
        if (serializedState === null) {
            return undefined;
        }
        return (JSON.parse(serializedState));
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        // cookie.save('state', serializedState)
        localStorage.setItem('state', serializedState);
    } catch (err) {
        //Ignore write errors
    }
}

export const cleanState = (state) => {
    try {
        const serializedState = JSON.stringify({});
        localStorage.setItem('state', serializedState);
    } catch (err) {
        //Ignore write errors
    }
}
