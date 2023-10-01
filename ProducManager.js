class ProductManager {
  constructor() {
    this.products = []
  }

  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock: stock ?? 1,
      id: this.products.length + 1,
    }

    if (this.products.some((product) => product.code === code)) {
      console.log(`El código ${product.code}ya existe`)
      return
    }

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("todos los campos son requeridos")
      return
    }

    this.products.push(product)
  }

  getProducts = () => {
    console.log(this.products)
    return
  }

  getProductById = (productId) => {
    let prod = this.products.find((prod) => prod.id === productId)
    if (prod) {
      console.log(prod)
    } else {
      console.log("not found")
    }
  }
}

const productManager = new ProductManager()
