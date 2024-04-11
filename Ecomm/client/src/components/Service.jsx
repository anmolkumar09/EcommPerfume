import { TbTruckDelivery } from "react-icons/tb";
import { FaShieldAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Service = () => {
  return (
    <>
      <div className=" sm:grid sm:grid-cols-2 lg:grid-cols-3  font-medium text-gray-600">
        {/* 1st columns */}
        <div className="bg-gray-100 p-2 text-center m-2 rounded-xl">
          <TbTruckDelivery className="text-blue-900 text-xl mx-auto " />
          <p>Super Fast and Free Delivery</p>
        </div>

        {/* 2nd columns */}
        <div className="bg-gray-100 p-3 text-center m-2 flex text-base justify-around sm:flex-col rounded-xl">
          <div>
            <FaShieldAlt className="text-blue-800 text-xl mx-auto" />
            <p>Non-contact Shipping</p>
          </div>

          <div>
            <GiReceiveMoney className="text-blue-800 text-xl mx-auto" />
            <p>Money Back Guranteed</p>
          </div>
        </div>
        {/* 3rd columns */}
        <div className="bg-gray-100 p-3 text-center m-2 rounded-xl">
          <RiSecurePaymentLine className="text-blue-800 text-xl mx-auto" />

          <p>Super Secure Payment</p>
        </div>
      </div>
    </>
  );
};

export default Service;
