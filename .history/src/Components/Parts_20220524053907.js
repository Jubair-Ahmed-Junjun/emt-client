import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";

const Parts = () => {
  const navigate = useNavigate();
  const {
    data: parts,
    isLoading,
    error,
  } = useQuery("parts", () =>
    fetch(`http://localhost:5000/parts`).then((res) => res.json())
  );
  if (error) {
    toast.error(error.message);
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" px-5">
      <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
        all Parts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {parts &&
          parts.slice(0, 6).map((part, key) => (
            <div key={key} className="card card-compact  bg-base-200 shadow-xl">
              <figure>
                <img src={part.img} width={400} height={225} alt="Shoes" />
              </figure>
              <div className="card-body justify-end">
                <div>
                  <h2 className="card-title pb-3">{part.name}</h2>
                  <p className=" pb-1">{part.desc}</p>
                  <p className=" pb-1">
                    Price_Per_piece: {part.price_per_piece}
                  </p>
                  {/* <p className=" pb-1">Min_Order_Quantity: {part.min_order_quantity}</p> */}
                  <p className=" pb-1">
                    Availabel_Quantity: {part.available_quantity}
                  </p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => {
                        navigate(`/purchase/${part._id}`);
                      }}
                      className="btn btn-sm btn-primary mt-5"
                    >
                      Purchase now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Parts;
