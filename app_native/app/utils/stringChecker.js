export const stringCheck = ( value ) =>{
    return value === null || value.trim() === "" ? "No Data Found" : value;
}

export const stringCheckTextInput = ( value ) =>{
    return value === null || value.trim() === "" || value=== "No data found"? "" : value
}