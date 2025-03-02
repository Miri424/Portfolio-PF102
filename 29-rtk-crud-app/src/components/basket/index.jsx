import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import tailwindcss from '@tailwindcss/vite'

const Basket = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">
            Shopping Basket
          </h1>
          <p className="text-gray-600 mb-4">Items in your basket: 0</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Product
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Price
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Quantity
                  </th>
                  <th className="border border-gray-200 px-4 py-2 text-left">
                    Subtotal
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Basket;
