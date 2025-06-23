import { useState } from 'react';

export default function ProductDropdown({ onSelect }) {
  const [selectedProduct, setSelectedProduct] = useState('');
  const products = ['Eco Bottle', 'Paper Box', 'Plastic Bag', 'Glass Jar'];

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedProduct(value);
    if (onSelect) onSelect(value); // Notify parent if provided
  };

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
        Select Product
      </label>
      <select
        name="product"
        className="w-full p-2 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none"
        value={selectedProduct}
        onChange={handleChange}
      >
        <option value="">Choose an item</option>
        {products.map((product, index) => (
          <option key={index} value={product}>
            {product}
          </option>
        ))}
      </select>
    </div>
  );
}
