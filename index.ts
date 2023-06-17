import express, {Application} from "express"
import cors from "cors"
import axios from "axios"

require("dotenv").config()

const app: Application = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors({
  origin: process.env.FRONTEND_URL || "",
  credentials: true,
  optionsSuccessStatus: 200
}))

app.get("*", async (req, res) => {
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
