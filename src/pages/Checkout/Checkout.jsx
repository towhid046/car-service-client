import { useLoaderData } from "react-router-dom";
import checkOutImg from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import PageHeader from "./../../components/shared/PageHeader/PageHeader";
const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleCustomerOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const message = form.message.value;
    const status = "Confirm";
    const customer = {
      name,
      date,
      phone,
      email,
      service_title: title,
      img,
      service_id: _id,
      service_price: price,
      message,
      status,
    };

    axios
      .post("http://localhost:5000/customers", customer)
      .then((res) => {
        if (res.data.insertedId) {
          form.reset();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="py-12">
      <PageHeader bgUrl={checkOutImg} title="Check out" />

      <div className="bg-gray-100 lg:p-16 md:p-8 p-4 rounded-xl">
        <form
          onSubmit={handleCustomerOrder}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div>
            <label htmlFor="">
              <strong>Name</strong>
              <input
                type="text"
                name="name"
                placeholder="Name"
                id=""
                className="input border-none outline-none input-bordered w-full"
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              <strong>Date</strong>
              <input
                type="date"
                name="date"
                id=""
                className="input input-bordered  border-none outline-none w-full"
              />
            </label>
          </div>

          <div>
            <label htmlFor="">
              <strong>Phone</strong>
              <input
                type="nuber"
                name="phone"
                placeholder="Your Phone"
                id=""
                className="input border-none outline-none input-bordered w-full"
              />
            </label>
          </div>

          <div>
            <label htmlFor="">
              <strong>Email</strong>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Your Eamil"
                id=""
                className="input border-none outline-none input-bordered w-full"
              />
            </label>
          </div>
          <div className="md:col-span-2 w-full ">
            <label htmlFor="">
              <strong>Message</strong>
              <textarea
                name="message"
                id=""
                className="textarea text-base border-none outline-none textarea-bordered textarea-md w-full"
                placeholder="Your Message"
                rows="7"
              ></textarea>
            </label>
          </div>
          <input
            type="submit"
            value="Order Confirm"
            className="btn btn-error w-full md:col-span-2"
          />
        </form>
      </div>
    </section>
  );
};

export default Checkout;
