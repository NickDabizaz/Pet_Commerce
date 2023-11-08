import React from 'react'
import { useParams } from 'react-router-dom';

function FormAddProduct() {
    let { store_id } = useParams();
  return (
    <>
    <h1>Form add product</h1>
    <div>store_id : {store_id}</div>
    <div>user_id : {store_id}</div>
    </>
  )
}

export default FormAddProduct