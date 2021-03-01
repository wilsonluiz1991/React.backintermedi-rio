import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';

const ProductList = () => {

  const prods = useSelector(state => state.produto)
  const dispatch = useDispatch();
  const value = useSelector(state => state.cart.value)

  function enterPointer(event) {
    const img = event.target;
    img.ClassName = "card-img-top rounded-circle border border-sucess";
  }

  function outPointer(event) {
    const img = event.target;
    img.ClassName = "card-img-top img-thumbnail";
  }

  const destaque = (event) => {
    if (event.target.style.width === "240px") {
      event.target.style.width = "120px";
    } else {
      event.target.style.width = "240px";
    }
  };
  const redimensiona = (event) => {
    if (event.target.style.width === "120px") {
      event.target.style.width = "240px";
    } else {
      event.target.style.width = "120px";
    }
  };

  return (
    <>
      {prods.map((item) => {
        return (
          <>
            <div
              id={item.id_categoria}
              key={item.idproduto}
              className="card bg-light m-4 box-item"
              style={{ width: "13rem", height: "25rem" }}
            >
              <img
                style={{ width: "120px" }}
                src={item.imagem}
                className="card-img-top mx-auto d-block img-thumbnail"
                onMouseOver={destaque}
                onMouseOut={redimensiona}
              />
              <div className="card-body text-center">
                <p
                  className="card-text font-weight-bold "
                  style={{ fontSize: "0.8rem" }}
                >
                  {item.descricao}
                </p>
                <h7
                  className="card-title"
                  style={{ textDecoration: "linethrough" }}
                >
                  <strike>R$ {item.preco.toFixed(2)}</strike>
                </h7>
                <h6 className="card-title text-primary font-weight-bold">
                  R$ {item.precofinal.toFixed(2)}
                </h6>
                <button className="btn btn-success" onClick={() => dispatch(cartActions.Add(value, item))}>Adicionar produto</button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default ProductList;
