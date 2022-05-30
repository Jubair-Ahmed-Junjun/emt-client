import React, { useState } from "react";
import { useQuery } from "react-query";
import ConfirmModal from "../Components/ConfirmModal";
import Loading from "../Components/Loading";

const ManageProduct = () => {
  const [modal, setModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch(`http://localhost:5000/parts`).then((res) => res.json())
  );

  const handleDelete = (answer) => {
    if (answer) {
      fetch(`http://localhost:5000/partsById?id=${deleteId}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            refetch();
          }
        });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
        Manage product
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Available Quantity</th>
              <th>Net Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parts &&
              parts.map((item, key) => (
                <tr key={key}>
                  <th>{key + 1}</th>
                  <td className=" capitalize">{item.name}</td>
                  <td>{item.available_quantity} pcs</td>
                  <td>{item.price_per_piece} tk</td>
                  <td>
                    <label
                      htmlFor="confirmation-modal"
                      onClick={() => {
                        setModal(true);
                        setDeleteId(item._id);
                      }}
                      className="btn btn-error btn-xs text-white"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {modal && (
        <ConfirmModal setModal={setModal} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default ManageProduct;
