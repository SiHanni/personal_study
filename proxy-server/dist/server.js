"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/:countryCode/:url', (req, res, next) => {
    const { countryCode, url } = req.params;
    const target = `http://${url}`;
    console.log(`프록시 요청 :: 국가코드 -> ${countryCode}, 요청 사이트 : ${url}`);
    (0, http_proxy_middleware_1.createProxyMiddleware)({
        target,
        changeOrigin: true,
        pathRewrite: { [`^/${countryCode}/${url}`]: '' },
    })(req, res, next);
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
