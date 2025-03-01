import React from "react";
import { useCartContext } from "@/providers/CartContext";

const Cart = () => {
  const { carts, totalAmount } = useCartContext();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
        <button className="bg-[#141718] border border-[#141718] hover:bg-[#fff] text-white font-bold py-2 px-4 rounded">
          Checkout
        </button>
      </div>
      <div className="mt-8">
        {carts && carts.length > 0 ? (
          carts.map((card, index) => (
            <div
              className="flex flex-col md:flex-row border-b border-gray-400 py-4"
              key={index}
            >
              <div className="flex-shrink-0">
                <img
                  src={`http://localhost:1337${card.image.url}`}
                  className="w-[20px] h-[20px] object-cover"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-lg font-bold">{card.name}</h2>
                <div className="mt-4 flex items-center">
                  <span className="mr-2 text-gray-600">Quantity:</span>
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-600">{card.quantity}</span>
                  </div>
                  <span className="ml-auto font-bold">${card.finalprice}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="flex justify-end items-center mt-8">
        <span className="text-gray-600 mr-4">Subtotal:</span>
        <span className="text-xl font-bold">${totalAmount}</span>
      </div>
    </div>
  );
};

export default Cart;
