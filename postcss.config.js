const fs = require("fs")
const postcss = require("postcss")
const atImport = require("postcss-import")

const css = fs.readFileSync("src/styles/style.css", "utf8")

module.exports = {
    "plugins": [
        require("postcss-import")(
            postcss()
                .use(atImport())
                .process(css, {
                    from: "src/styles/style.css"
                })
        ),
        require("autoprefixer")
    ]
}
