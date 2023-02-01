export default async function handler(req, res) {
    let token = localStorage.getItem('tkn')
    const response = await fetch(`https://payments-nple.onrender.com/apiFlow/result`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(dt) // body data type must match "Content-Type" header
    });
    const data = await response.json();
    console.log(data);
    res.redirect(307, "/result");
    return data;
}