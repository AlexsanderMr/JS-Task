const repeat = (str = '', n = 2) => {
    let String = '';
    for (let i = 0; i < n; i++) {
        String += str;
    }
    return String;
};