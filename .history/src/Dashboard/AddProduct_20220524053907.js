import { async } from "@firebase/util";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleForm = async (data) => {
    setLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    await fetch(
      `https://api.imgbb.com/1/upload?key=b1bd51d9f4d0bf94b63bf02d12b353f4`,
      {
        method: "post",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 200) {
          const img = result.data.url;
          const name = data.name;
          const desc = data.desc;
          const min_order_quantity = data.minQ;
          const available_quantity = data.availQ;
          const price_per_piece = data.netPrice;
          const product = {
            img,
            name,
            desc,
            min_order_quantity,
            available_quantity,
            price_per_piece,
          };

          fetch(`http://localhost:5000/parts`, {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Product added successfully");
              }
            });
        }
      });
    reset();
    setLoading(false);
  };

  return (
    <div className=" flex justify-center">
      <div className=" w-full max-w-lg">
        <h2 className=" text-center text-primary text-4xl mb-5 uppercase">
          add product
        </h2>
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Product's Name:</span>
            </label>
            <input
              {...register("name", {
                required: true,
              })}
              type="text"
              className="input input-bordered input-primary w-full max-w-lg"
            />
            {errors.name?.type === "required" && (
              <span className="label-text text-red-500">
                Enter a product name !
              </span>
            )}
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Description:</span>
            </label>
            <textarea
              {...register("desc", {
                required: true,
              })}
              className="textarea textarea-primary w-full max-w-lg"
            ></textarea>
            {errors.desc?.type === "required" && (
              <span className="label-text text-red-500">
                Enter a short description !
              </span>
            )}
          </div>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Min Order Quantity:</span>
            </label>
            <input
              {...register("minQ", {
                required: true,
              })}
              type="number"
              className="input input-bordered input-primary w-full max-w-lg"
            />
            {errors.minQ?.type === "required" && (
              <span className="label-text text-red-500">
                Enter a min quantity number !
              </span>
            )}
          </div>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Available Quantity:</span>
            </label>
            <input
              {...register("availQ", {
                required: true,
              })}
              type="number"
              className="input input-bordered input-primary w-full max-w-lg"
            />
            {errors.availQ?.type === "required" && (
              <span className="label-text text-red-500">
                Enter a available quantity number !
              </span>
            )}
          </div>
          <div className="form-control w-full max-w-lg mt-1">
            <label className="label">
              <span className="label-text">Price Per Piece:</span>
            </label>
            <input
              {...register("netPrice", {
                required: true,
              })}
              type="number"
              className="input input-bordered input-primary w-full max-w-lg"
            />
            {errors.netPrice?.type === "required" && (
              <span className="label-text text-red-500">
                Enter the price of product !
              </span>
            )}
          </div>
          <div className="form-control w-full max-w-lg mt-10">
            <input
              {...register("image", {
                required: true,
              })}
              type="file"
              className="input w-full max-w-lg"
            />
            {errors.image?.type === "required" && (
              <span className="label-text text-red-500">Enter an image !</span>
            )}
          </div>
          <button
            className={` mt-10 btn btn-primary w-full ${loading && "loading"}`}
          >
            {loading ? "" : "add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
