import express, {Application} from "express"

const axios = require("axios")
require("dotenv").config()

const app: Application = express()
const PORT = process.env.PORT || 3001
// 外部APIを呼び出すエンドポイント
app.get("/callapi", async (req, res) => {
  try {
    const response = await axios.get(
      "https://gnews.io/api/v4/top-headlines",
      {
        params: {
          apikey: process.env.API_KEY,
          country: req.query.country,
          q: req.query.q
        }
      }
    )

    res.setHeader("access-control-allow-origin", process.env.FRONTEND_URL || "")
    res.json(response.data)
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({error: e.message})
    } else {
      res.status(500).json({error: "An unknown error occurred."})
    }
  }
})

// サーバーを起動する
try {
  app.listen(PORT, () => {
    console.log(`dev server running at: http://localhost:${PORT}/`)
  })
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}
