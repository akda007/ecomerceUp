import app from "./app.js"

(async () => {
    
    const port = 8080

    app.listen(port, () => { console.log(`Server started at: http://localhost:${port}/`)})
})()