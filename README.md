# news-app-api📰📡
![GitHub](https://img.shields.io/github/license/maimai880/news-app-api)  

[news-app](https://github.com/maimai880/news-app)をデプロイするためのAPIです  
news-appに環境変数を設定するとこのAPIを使わせることが出来ます  
ts, expressを使用しています  

## セットアップ＆起動
1. [Gnews](https://gnews.io/)でアカウントを作成しAPIキーを取得
2. プロジェクトルート直下に`.env`ファイルを作成しAPIキーとnews-appが実行されるURLを入力
```.env
API_KEY=your api key here
FRONTEND_URL=http://localhost::5173
```
3. [news-app](https://github.com/maimai880/news-app)をセットアップし、news-app-apiが実行されるURLを`env.local`に入力、実行
```env.local
VITE_API_KEY = "unneeded"
VITE_API_URL = "http://localhost::3001"
```
5. 実行
```bash
npm i && npm run dev
```

## クレジット
ニュース取得API: [GNews](https://gnews.io/)
