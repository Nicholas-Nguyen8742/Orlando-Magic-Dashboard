export const API_URL = 'http://localhost:8080';

export const percentConvert = (decimal) => {
    const int = ((decimal) * 100).toFixed(0);
    return int;
}