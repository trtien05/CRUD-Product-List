import React from 'react'
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { deleteProduct } from '../../services/productService';

function DeleteProduct(props) {
  const { item, onReload } = props;

  const handleDelete = async () => {
    // kết quả trả về 
    const result = await deleteProduct(item.id);

    if (result) {
      Swal.fire({
        title: "Đã xóa!",
        text: `Bạn đã xóa thành công sản phẩm ${item.title}.`,
        icon: "success"
      });
      onReload();
    }

  }

  const handleConfirm = () => {
    Swal.fire({
      title: "Bạn có chắc muốn xóa ?",
      text: `Sản phẩm bạn chuẩn bị xóa là: ${item.title}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vẫn xóa!",
      cancelButtonText: "Hủy"
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete();
      }
    });
  }
  return (
    <button onClick={handleConfirm}>Delete</button>
  )
}

export default DeleteProduct