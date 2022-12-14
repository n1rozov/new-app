const apiUrl = 'https://newsapi.org';

export async function getEverything(data) {
    const params = new URLSearchParams({
        ...data,
        apiKey: process.env.REACT_APP_API_KEY,
    });
    console.log('params' , params.toString());
    return await fetch(`${apiUrl}/v2/everything?${params}`)
}