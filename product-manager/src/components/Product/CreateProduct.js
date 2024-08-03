import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import { createProduct } from '../../services/productService';
import { getListCategory } from '../../services/categoryService';

function CreateProduct(props) {
  const { onReload } = props;
  const [showModal, setshowModal] = useState(false);
  const [category, setCategory] = useState([]);

  //Khi load trang thì sẽ gọi hàm này để lấy dữ liệu, chỉ dùng 1 lần
  useEffect(() => {
    const fetchApi = async () => {
      // const respone = fetch('http://localhost:3002/categories');
      // const result = await respone.json();
      const result = await getListCategory();

      if (result) {
        setCategory(result);
      }
    }
    fetchApi();
  }, [])

  const handleShowModal = () => {
    setshowModal(true);
  }
  const handleCloseModal = () => {
    setshowModal(false);
  }
  const handleSubmit = async (e) => {
    //ngăn chặn bị load lại trang
    e.preventDefault();
    console.log(e)
    //tạo ra 1 object mới để gửi lên api
    let options = {
      title: e.target.elements.title.value,
      category: e.target.elements.category.value,
      price: e.target.elements.price.value,
      discountPercentage: e.target.elements.discountPercentage.value,
      stock: e.target.elements.stock.value,
      thumbnail: e.target.elements.thumbnail.value,
      description: e.target.elements.description.value
    }


    // kết quả trả về 
    const result = await createProduct(options);

    if (result) {
      setshowModal(false);
      onReload();
    }
    console.log(result);
  }
  return (
    <>
      <button onClick={handleShowModal}>Thêm sản phẩm mới</button>
      <Modal
        isOpen={showModal}
      >
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Tiêu đề</td>
                <td>
                  <input name='title' />
                </td>
              </tr>
              <tr>
                <td>Danh mục</td>
                <td>
                  <select name="category">
                    {category.map((item, index) => (
                      <option value={item} key={index}>{item}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Gia</td>
                <td>
                  <input name='price' />
                </td>
              </tr>
              <tr>
                <td>Giảm giá</td>
                <td>
                  <input name='discountPercentage' />
                </td>
              </tr>
              <tr>
                <td>Số lượng còn lại</td>
                <td>
                  <input type="text" name="stock" id="" />
                </td>
              </tr>
              <tr>
                <td>Đường dẫn ảnh</td>
                <td>
                  <input type="text" name="thumbnail" id="" />
                </td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>
                  <textarea name="description" ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={handleCloseModal}>Đóng</button>
                </td>
                <td>
                  <button type='submit'>Tạo mới</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

      </Modal>
    </>

  )
}

export default CreateProduct;