import React, { useEffect, useState } from "react";
import "./CreateProduct.css";
import { useCreateProductMutation } from "../../../../feature.js/app/productApi";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate()
  const [productBrand,setProductBrand] = useState("");
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("wall");
  const [productSize, setProductSize] = useState("");
  const [productCategory,setProductCategory] = useState("")
  const [productImages, setProductImages] = useState([]);
  const [createNewProduct, { data: response, isSuccess: productCreated }] = useCreateProductMutation();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("brand", productBrand);
    formData.append("type", productType);
    formData.append("size", productSize);
    formData.append("category",productCategory);

    // Append each selected image to the formData object
    for (let i = 0; i < productImages.length; i++) {
      formData.append("image", productImages[i]);
    }

    try {
      await createNewProduct(formData).unwrap();
    } catch (err) {
      alert(err.data.message);
    }
  };
  useEffect(()=>{
    console.log(productCategory)
    if(response?.success){
        navigate('../')
    }
  },[productCreated])

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setProductImages(selectedImages);
  };

  return (
    <div className="form-container">
      <h1>Create New Product</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productName">Brand:</label>
          <input
            type="text"
            id="productName"
            value={productBrand}
            onChange={(e) => setProductBrand(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productType">Product Type:</label>
          <select
            id="productType"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="wall">Wall</option>
            <option value="floor">Floor</option>
            <option value="bathroom">Bathroom</option>
            <option value="kitchen">Kitchen</option>
          </select>
        </div>
        {productType === 'bathroom' || productType === 'kitchen' ? 
        <div className="form-group">
          <label htmlFor="productType">Product Subtype:</label>
          <select
            id="productType"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option value="wall">Wall</option>
            <option value="floor">Floor</option>
            
          </select>
        </div>
        :""}
        <div className="form-group">
          <label htmlFor="productSize">Product Size:</label>
          <input
            type="text"
            id="productSize"
            value={productSize}
            onChange={(e) => setProductSize(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImages">Product Images:</label>
          <input
            type="file"
            id="productImages"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
