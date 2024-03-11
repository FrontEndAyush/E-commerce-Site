import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const DeliveryAddressSelection = () => {
  return (
    <div>
      <div className="flex  flex-col text-center  py-10">
        <div className="text-3xl flex mx-auto font-semibold mb-2">
          <Link to={"/address/select_address/payments"}>
            Deliver At Selected Address
          </Link>{" "}
          <span>
            <FaChevronRight />
          </span>
        </div>

        <div className="text-3xl  text-center mx-auto flex font-semibold">
          <Link to={"/address"}>Create New Address</Link>
          <span>
            <FaChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddressSelection;
