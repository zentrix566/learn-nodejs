import express, { Request, Response } from 'express';

const app = express();
const port: number = 3000; // 明确指定是数字类型

app.get('/', (req: Request, res: Response) => {
    const message: string = "来自 TypeScript 的问候！";
    res.send(`<h1>${message}</h1>`);
});

app.listen(port, () => {
    console.log(`TS 服务器运行在 http://localhost:${port}`);
});