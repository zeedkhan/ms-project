const config = require("config");
const { createProxyMiddleware } = require('http-proxy-middleware')

const uploadService = config.get("uploadService");

const uploadProxy = {
    target: uploadService,
    changeOrigin: true,
};

const manageUploadRoutes = (app) => {
    app.post("/upload", createProxyMiddleware({ ...uploadProxy }))
    return app;
}

module.exports = {
    manageUploadRoutes
}