import { create } from 'domain';
import express, { Request, Response, NextFunction } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = 3000;

// app.get(
//   '/:countryCode/:url',
//   (req: Request, res: Response, next: NextFunction) => {
//     const { countryCode, url } = req.params;
//     const target = `http://${url}`;

//     console.log(
//       `프록시 요청 :: 국가코드 -> ${countryCode}, 요청 사이트 : ${url}`
//     );

//     createProxyMiddleware({
//       target,
//       changeOrigin: true,
//       pathRewrite: { [`^/${countryCode}/${url}`]: '' },
//     })(req, res, next);
//   }
// );

app.get(
  '/:countryCode/:url',
  (req: Request, res: Response, next: NextFunction) => {
    const { countryCode, url } = req.params;
    const target = `http://${url}`;

    console.log(
      `프록시 요청 :: 국가코드 -> ${countryCode}, 요청 사이트 : ${url}`
    );

    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: { [`^/${countryCode}/${url}`]: '' },
    })(req, res, next);
  }
);

app.listen(PORT, () => console.log(`Server running on port ${PORT} !`));
