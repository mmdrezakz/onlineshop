import React, { useContext } from 'react';
import { CartContext } from '../utils/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../Components/Footer';

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // نسخه‌ی امن
  const safeCart = Array.isArray(cartItems) ? cartItems : [];

  const totalPrice = safeCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = safeCart.reduce((sum, item) => sum + item.quantity, 0);

  return (
<>
    <div className="bg-linear-to-br from-gray-100 via-white to-gray-200 p-6 min-h-screen">
      <Toaster    toastOptions={{
    className: 'bg-green-500',
    style: {
      border: '1px solid #4e4e4b',
      padding: '16px',
      backgroundColor:"greenyellow",
      color: '#343834',
    }}}/>
      <h1 className="mb-4 font-bold text-3xl text-center">🛒 Your Shopping Cart</h1>
      <p className="mb-8 text-gray-700 text-center">
        Total Products: <span className="font-bold text-green-600">{totalItems}</span>
      </p>

      {safeCart.length === 0 ? (
        <p className="text-gray-500 text-lg text-center">Your cart is empty</p>
      ) : (
        <div className="gap-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {safeCart.map((item) => (
            <div key={item.id} className="flex flex-col bg-white shadow-lg p-5 rounded-xl h-80">
              <div className="flex justify-center items-center h-40 sm:h-48 md:h-56 overflow-hidden">
                <img
                  src={item.image || '/placeholder.jpg'}
                  alt={item.title}
                  className="rounded-lg w-full h-full object-contain"
                />
              </div>
              <div className="mt-2 text-sm">
                <h2 className="font-semibold text-gray-800 truncate">{item.title}</h2>
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                  {item.description?.length > 60
                    ? item.description.slice(0, 60) + "..."
                    : item.description}
                </p>
                <p className="mt-1 font-bold text-green-600">Price: {item.price} $</p>
                <p className="text-gray-700">Quantity: {item.quantity}</p>
                <button
                  onClick={() => {removeFromCart(item.id); toast("Remove Item")}}
                  className="bg-red-500 hover:bg-red-600 mt-2 px-4 py-2 rounded-lg text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {safeCart.length > 0 && (
        <div className="bg-white shadow-md mt-10 p-6 rounded-xl text-center">
          <h2 className="mb-4 font-bold text-gray-800 text-xl">Order Summary</h2>
          <p className="mb-6 font-extrabold text-green-500 text-2xl">
            Total: {totalPrice.toFixed(2)} $
          </p>
          <button className="bg-green-500 hover:bg-green-400 px-6 py-3 rounded-lg text-white">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}