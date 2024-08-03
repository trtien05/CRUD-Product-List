import React, { useState, useEffect } from 'react';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';
import CreateProduct from './CreateProduct';
import { getListProduct } from '../../services/productService';

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchApi = async () => {
    const result = await getListProduct();
    if (result) {
      setProducts(result.reverse());
    }

  }
  //Khi load trang thì sẽ gọi hàm này để lấy dữ liệu
  useEffect(() => {
    fetchApi();
  }, [])

  //Khi người dùng click vào nút thêm sản phẩm thì sẽ gọi hàm này để load lại dữ liệu
  const handleReload = () => {
    fetchApi();
  }
  return (
    <>
      <CreateProduct onReload={handleReload} />
      <div className='product__list'>
        {products.map(item => (
          <div className="product__item" key={item.id}>
            <div className="product__image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="product__content">
              <h3 className='product__title'>
                {item.title}
              </h3>
              <div className="product__price">
                {item.price} $
              </div>
              <div className="product__percent">
                {item.discountPercentage} %
              </div>
              <div className="product__button">
                <EditProduct item={item} onReload={handleReload} />
                <DeleteProduct item={item} onReload={handleReload} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}

export default ProductList