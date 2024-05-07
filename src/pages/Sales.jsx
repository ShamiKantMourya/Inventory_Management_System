import { useEffect } from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useDispatch, useSelector } from "react-redux";

import { SalesForm } from "../components/SalesInput";
import { getSalesData } from "../redux/actions";

export default function Sales() {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state?.sales);
  // console.log(sales, "sales")
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getSalesData());
  }, [dispatch]);

  return (
    <>
      <h1>
        Sales
        <MonetizationOnIcon fontSize="large" />
      </h1>
      <SalesForm />
      <div className="container">
        <ul>
          {!loading &&
            sales?.map((item) => (
              <li key={item._id}>
                <span>
                  Name: <b>{item?.item} </b>|| Quantity: {item.quantity}{" "}
                  || Sale Price:₹ {item.price} || Total: ₹{" "}
                  {item.price * item.quantity}{" "}
                </span>
              </li>
            ))}
          {loading && <div className="loader"></div>}
        </ul>
      </div>
    </>
  );
}