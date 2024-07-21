const express = require("express")
const cors = require("cors")
const config = require("config");
const { manageUserRoutes } = require("../routes/userRouter");
const { manageUploadRoutes } = require("../routes/uploadRouter");
const { blogRoutes } = require("../routes/blogRouter");

const userService = config.get("userService");
const uploadService = config.get("uploadService");

const createServer = () => {
    const app = express();
    app.use(cors())

    app.get("/services", (req, res) => {
        const services = {
            upload: uploadService,
            user: userService,
        }
        return res.json(services).status(200)
    });

    manageUserRoutes(app);
    manageUploadRoutes(app);
    blogRoutes(app)

    return app
}

module.exports = {
    createServer
}