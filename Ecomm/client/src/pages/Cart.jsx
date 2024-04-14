import React, { useState } from 'react';

function Cart() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Latest N-5 Perfume',img:'https://pagedone.io/asset/uploads/1701162850.png', price: 100, quantity: 1 },
    { id: 2, name: 'Musk Rose Cooper',img:'https://pagedone.io/asset/uploads/1701162866.png', price: 90, quantity: 1 },
    { id: 3, name: 'Dusk Dark Hue', img:'https://pagedone.io/asset/uploads/1701162880.png',price: 120, quantity: 1 }
  ]);

  const increaseQuantity = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity++;
    setProducts(updatedProducts);
  };

  const decreaseQuantity = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity--;
      setProducts(updatedProducts);
    }
  };

  const calculateSubtotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryCharge = 5;
  const total = subtotal + deliveryCharge;

  return (
    <section className="py-24 relative">
     
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart</h2>

        {/* Product list */}
        {products.map((product, index) => (
          <div key={product.id} className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
            <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
              {/* Product image */}
              <div className="img-box">
                <img src={`${product.img}`} alt="perfume bottle" className="xl:w-[140px]" />
              </div>
              {/* Product details */}
              <div className="pro-data w-full max-w-sm">
                <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{product.name}</h5>
                <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">Perfumes</p>
                <h6 className="font-medium text-lg leading-8 text-indigo-600 max-[550px]:text-center">${product.price.toFixed(2)}</h6>
              </div>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
              <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                ${deliveryCharge.toFixed(2)} <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(Delivery Charge)</span>
              </h6>
              <div className="flex items-center w-full mx-auto justify-center">
                <button onClick={() => decreaseQuantity(index)}> -  </button>
                <input type="text" value={product.quantity} readOnly className="text-center" style={{ width: '40px' }}/>
                <button onClick={() => increaseQuantity(index)}> + </button>
              </div>
              <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                ${(product.price * product.quantity).toFixed(2)}
              </h6>
            </div>
          </div>
        ))}

        {/* Total section */}
        <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="flex items-center justify-between w-full mb-6">
            <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
            <h6 id="subtotal" className="font-semibold text-xl leading-8 text-gray-900">${subtotal.toFixed(2)}</h6>
          </div>
          <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
            <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
            <h6 className="font-semibold text-xl leading-8 text-gray-900">${deliveryCharge.toFixed(2)}</h6>
          </div>
          <div className="flex items-center justify-between w-full py-6">
            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
            <h6 id="total" className="font-manrope font-medium text-2xl leading-9 text-indigo-500">${total.toFixed(2)}</h6>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
          <button className="rounded-full py-4 w-full max-w-[280px] flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
            <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Add Coupon Code</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
            Continue to Payment
            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
              <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      
    </section>
  );
}

export default Cart;
