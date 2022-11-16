export async function getEverything(data) {
    return await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=09a2957351bd4253acf8c063f93ca738')
}