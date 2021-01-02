import React, { Fragment, useState, useEffect } from "react";

const EditAsset = ({ asset }) => {
  const [product, setProduct] = useState(asset.product);
  const [category, setCategory] = useState(asset.category);
  const [quantity, setQuantity] = useState(asset.quantity);
  const [price, setPrice] = useState(asset.price);
  const [totalprice, setTotalPrice] = useState(asset.totalprice);
  const [disable, setDisabled] = useState(true);
  const [productError, setProductError] = useState(null);
  const [categoryError, setCategoryError] = useState(null);
  const [quantityError, setQuantityError] = useState(null);
  const [priceError, setPriceError] = useState(null);
  const [totalpriceError, setTotalpriceError] = useState(null);

  const formValidation = () => {
    var letters = /^[0-9]+$/;

    if (product === "") {
      setProductError("product can't be blank!");
      return true;
    }
    if (product.match(letters)) {
      setProductError("product can't start with a number!");
      return true;
    }
    if (category.match(letters)) {
      setCategoryError("category can't start with a number!");
      return true;
    }
    if (category === "") {
      setCategoryError("category can't be blank!");
      return true;
    }
    if (quantity === "") {
      setQuantityError("quantity can't be blank!");
      return true;
    }
    if (quantity.length > 4) {
      setQuantityError("quantity should contain max 4 digits only!");
      return true;
    }
    if (price === "") {
      setPriceError("price can't be blank!");
      return true;
    }
    if (price.length > 6) {
      setPriceError("price should contain max 6 digits only!");
      return true;
    }
    if (totalprice === "") {
      setTotalpriceError("total price can't be blank!");
      return true;
    }
    if (totalprice.length > 7) {
      setTotalpriceError("total price should contain max 7 digits only!");
      return true;
    } else {
      setProductError(null);
      setCategoryError(null);
      setQuantityError(null);
      setTotalpriceError(null);
      setPriceError(null);
      return false;
    }
  };

  const updateAsset = async (e) => {
    e.preventDefault();
    try {
      const body = { product, category, quantity, price, totalprice };
      const response = await fetch(
        `http://localhost:8000/assets/${asset.product_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/asset";
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    setDisabled(formValidation());
  });

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${asset.product_id}`}
      >
        Edit
      </button>

      <div
        class="modal fade"
        id={`id${asset.product_id}`}
        onClick={() => setProduct(asset.product)}
        onSubmit={updateAsset}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Asset
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setProduct(asset.product)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Product
              <input
                type="text"
                className="form-control"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
              {productError && <p>{productError}</p>}
              Category
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              {categoryError && <p>{categoryError}</p>}
              Quantity
              <input
                type="number"
                className="form-control"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              {quantityError && <p>{quantityError}</p>}
              Price
              <input
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              {priceError && <p>{priceError}</p>}
              Total Price
              <input
                type="number"
                className="form-control"
                value={totalprice}
                onChange={(e) => setTotalPrice(e.target.value)}
              />
              {totalpriceError && <p>{totalpriceError}</p>}
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                disabled={disable}
                onClick={(e) => updateAsset(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setProduct(asset.product)}
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditAsset;
