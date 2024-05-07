import { useState } from "react";
import { useDispatch } from "react-redux";
import { addInventory, updateInventory } from "../redux/actions";
export function InventoryForm({ toUpdate }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    toUpdate ?? {
      name: "",
      category: "",
      price: "",
      quantity: "",
    }
  );
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (toUpdate) {
      dispatch(updateInventory(toUpdate._id, formData));
    } else {
      dispatch(addInventory(formData));
    }
    setFormData({
      name: "",
      category: "",
      price: "",
      quantity: "",
    });
  };
  return (
    <div>
      <b className="add-invent-text">Add Inventory Data</b>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="">
          Name:
          <input
            type="text"
            name="name"
            id=""
            onChange={onChangeHandler}
            value={formData.name}
            required
          />
        </label>
        <label htmlFor="">
          Price
          <input
            type="number"
            name="price"
            id=""
            min={1}
            max={100000}
            onChange={onChangeHandler}
            value={formData.price}
            required
          />
        </label>
        <label htmlFor="">
          Category
          <input
            type="text"
            name="category"
            id=""
            min={1}
            max={100000}
            onChange={onChangeHandler}
            value={formData.category}
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
            max={10000}
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