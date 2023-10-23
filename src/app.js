import express from "express"

import ProductManager from "../ProductManager.js"

const app = express()

const manager = new ProductManager()

app.listen(8080, () => {
  console.log("Server is running...")
})

app.get("/products", async (req, res) => {
  const { limit } = req.query

  const products = await manager.getProducts()

  if (!limit) {
    return res.send({ products: products })
  }

  const limitedProducts = products.slice(0, limit)

  res.send({ products: limitedProducts })
})

app.get("/products/:pid", async (req, res) => {
  const { pid } = req.params

  if (!pid) {
    return res.send({ error: "You must specify a product id" })
  }

  const product = await manager.getProductById(+pid)

  res.send(product)
})
