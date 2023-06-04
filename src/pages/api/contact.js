export default contactRoute;

async function contactRoute(req, res) {
    const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(req.body),
    };

    const response = await fetch(process.env.BACKEND_URL + "wp-json/api/contact", options)
    const data = await response.json()
    console.log('data api/contact', data)
    console.log('response api/contact', response)

    res.send(data);
}