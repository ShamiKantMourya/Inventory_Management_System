import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addSales, getInventoryData } from "../redux/actions";

export function SalesForm() {
  const dispatch = useDispatch();
  const inventoryItems = useSelector((state) => state?.inventoryItems);
  const [formData, setFormData] = useState({
    item: "",
    price: "",
    quantity: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // console.log(inventoryItems, formData);
  const sale = inventoryItems.filter((item) => item?.name == formData?.item);
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    sale?.map((item) => {
      // console.log(item._id, formData);
      dispatch(addSales(item._id, formData));
    })
   

    setFormData({
      item: "",
      price: "",
      quantity: "",
    });
  };
  useEffect(() => {
    dispatch(getInventoryData());
  }, []);
  return (
    <div>
      <b className="text">Add Sales Data</b>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="">
          Name:
          <select name="item" id="" onChange={onChangeHandler} required>
            {inventoryItems?.map((item) => {
              return <option key={item._id} value={item.name}>{item.name}</option>;
            })}
          </select>
        </label>
        <label htmlFor="">
          Price
          <input
            type="number"
            name="price"
            id=""
            min={1}
            onChange={onChangeHandler}
            value={formData.price}
            required
          />
        </label>
        <label htmlFor="">
          Quantity
          <input
            type="number"
            name="quantity"
            id=""
            min={1}
            max={100}
            onChange={onChangeHandler}
            value={formData.quantity}
            required
          />
        </label>
        <button>Add Data</button>
      </form>
    </div>
  );
}
