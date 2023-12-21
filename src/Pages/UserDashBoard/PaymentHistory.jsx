import { Helmet } from "react-helmet-async";
import Scroll from "../../components/Scroll";
import SectionTitle from "../shared/SectionTitle";
import usePayment from "../../hooks/usePayment";

const PaymentHistory = () => {
  const [payment] = usePayment();

  return (
    <div>
      <Helmet>
        <title>All Users | Bistro Boss</title>
      </Helmet>
      <Scroll />
      <SectionTitle
        subHeading="---How Many??---"
        heading="MANAGE ALL USERS"
      ></SectionTitle>
      <div>
        <div className="flex justify-between items-center mb-10 mx-4">
          <h2 className="text-3xl">Total Users:</h2>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Date</th>
                  <th>TxID</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {payment.map((pay) => (
                  <tr key={pay._id}>
                    <td>{pay.date}</td>
                    <td>{pay.transactionId}</td>
                    <td>
                      {pay.itemsName.map((item, index) => (
                        <div key={index}>
                          <p>
                            <span>{index + 1}</span>-{item}
                          </p>
                        </div>
                      ))}
                    </td>
                    <td>{pay.quantity}</td>
                    <td>{pay.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
