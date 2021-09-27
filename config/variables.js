path = {
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
}

// module.exports = path

require("dotenv").config(path)
