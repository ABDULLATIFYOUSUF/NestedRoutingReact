import { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import axios from 'axios';

const Products = () => {
    const param = useParams();
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get("https://fakestoreapi.com/products")
            console.log(data.data)
            setProductData(data.data)
        
        };
        fetchData()
    }, []);

    return(
        <>
        <h1>Products</h1>
        {productData.map((product, index) => {
            return(
              <div className='inline-block overflow-hidden text-center'>
                <div className='border w-[350px] h-[380px] p-2 m-5'>
                  <img className='w-[300px] h-[200px] m-2' src={product.image} />
                    <h1 className='text-base w-[340px] h-[40px] m-2'>Title: {product.title}</h1>
                    <h1 className='text-lg w-[340px] h-[40px]'>Price: {product.price}</h1>
                    <Link to={`/SingleProduct/${product.id}`}>
                        <button className='bg-blue-600 text-white cursor-pointer hover:bg-blue-900'>Show Details</button>
                    </Link>
                    <Outlet />
                </div>
                </div>
            )
        })}
        </>
    )
}



export default Products