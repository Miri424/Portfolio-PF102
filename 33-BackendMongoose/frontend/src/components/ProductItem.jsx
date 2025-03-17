import { useEffect, useState } from "react"
import { BASE_URL } from "../constant/api/api"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const ProductItem = () => {
  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  const getProducts = async () => {
    const response = await axios(`${BASE_URL}/api/posts`)
    return response.data.data
  }

  useEffect(() => {
    getProducts().then((data) => setProducts(data))
  }, [])

  return (
    <div className="container">
      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <div className="image-side" onClick={() => navigate(`/details/${product._id}`)}>
              <img src={product.image}/>
            </div>
            <div className="details-side">
              <h3 className="category">{product.categoryId.name}</h3>
              <h2 className="title">{product.title}</h2>
              <p className="date">{product.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductItem

