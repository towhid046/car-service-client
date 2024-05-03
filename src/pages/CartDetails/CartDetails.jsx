import PageHeader from "./../../components/shared/PageHeader/PageHeader";
import carDetailBgImg from "../../assets/images/cart_details/cart-details.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import OrderItem from "../../components/unique/OrderItem/OrderItem";
const CartDetails = () => {
  const [orderItems, setOrderItems] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/customers?email=${user?.email}`;

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setOrderItems(data);
    };
    loadData();
  }, [url]);

  const handleDeleteOrderItem = (id) => {
    fetch(`http://localhost:5000/items/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
            const reminig = orderItems.filter(item=> item._id !== id)
            setOrderItems(reminig)
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
