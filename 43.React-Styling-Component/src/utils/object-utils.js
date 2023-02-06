export const isObjEmpty = obj => {
    return Object.keys(obj).length === 0;
}

export const deepClone = obj => {
    console.log('Main obj - ', obj);
    console.log('deepClone - ', JSON.parse(JSON.stringify(obj)));
    return JSON.parse(JSON.stringify(obj));
}