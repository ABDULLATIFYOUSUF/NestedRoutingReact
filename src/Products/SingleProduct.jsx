import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";

const SingleProduct = () => {
  const param = useParams();
  const [productData, setProductData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://fakestoreapi.com/products/${param.productid}`
      );
      setProductData(data.data);
    };
    fetchData();
  }, []);
  return (
    <>
    <div className="w-full h-[100vh] flex flex-col justify-center items-center text-justify text-base font-serif mt-[100px]">
      <img src={productData?.image} className="w-[300px] h-[300px]" />
      <h1> <b>Category:</b> {productData?.category}</h1>
      <h1> <b>Title:</b> {productData?.title}</h1>
      <h1> <b>Description:</b> {productData?.description}</h1>
      <h1 className="text-green-600"><b className="text-black">Price: </b>{productData?.price}</h1>
      </div>
    </>
  );
};

export default SingleProduct;