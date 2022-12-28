const express = require('express')
const app = express()

app.set("views", __dirname, "ejs")

app.get("/", function (req, res) {
    const items = [
        { 
            title: "D",
            message: "esenvolver aplicações de forma fácil."
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML."
        },
        {
            title: "M",
            message: "uito fácil de usar."
        },
        {
            title: "A",
            message: "morzinho."
        },
        {
            title: "I",
            message: "nstall EJS."
        },
        {
            title: "S",
            message: "intaxe simples."
        }
    ]

    const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JavaScript."
    res.render("views/pages/index.ejs", {
        qualitys: items,
        subtitle: subtitle
    })
})

app.get("/sobre", function (req, res) {
    res.render("views/pages/about.ejs")
})

app.listen(8080)
console.log("rodando!")