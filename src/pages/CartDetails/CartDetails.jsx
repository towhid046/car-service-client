import PageHeader from "./../../components/shared/PageHeader/PageHeader";
import carDetailBgImg from "../../assets/images/cart_details/cart-details.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import OrderItem from "../../components/unique/OrderItem/OrderItem";
import swal from "sweetalert";
import axios from "axios";

const CartDetails = () => {
  const [orderItems, setOrderItems] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user?.email)
  const url = `http://localhost:5000/customers?email=${user?.email}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setOrderItems(res.data);
      })
      .catch((err) => console.error(err));
  }, [url]);

  const handleDeleteOrderItem = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/items/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              const reminig = orderItems.filter((item) => item._id !== id);
              setOrderItems(reminig);
            }
          });
      }
    });
  };

  const handleUpdateOrder = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          const reminigItems = orderItems.filter((item) => item._id !== id);
          const updatedItem = orderItems.find((item) => item._id === id);
          updatedItem.status = "Confirmed";
          const newItems = [updatedItem, ...reminigItems];
          setOrderItems(newItems);
        }
      });
  };

  return (
    <section className="min-h-screen mb-20">
      <PageHeader bgUrl={carDetailBgImg} title={"Cart Details"} />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {orderItems.map((item) => (
                <OrderItem
                  key={item._id}
                  handleDeleteOrderItem={handleDeleteOrderItem}
                  handleUpdateOrder={handleUpdateOrder}
                  item={item}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CartDetails;
