import { useState, useEffect } from "react";

export default function ReturnForm({ onSuccess }) {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ productId: "", quantity: 1 });
  const [loading, setLoading] = useState(false);

  // Fetch all products for dropdown
  useEffect(() => {
    fetch("http://localhost:5000/api/product/all")
      .then(res => res.json())
      .then(setProducts)
      .catch(err => console.error("Failed to fetch products", err));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.productId || form.quantity < 1) {
      alert("Please select a product and valid quantity");
      return;
    }

    const token = localStorage.getItem("token");
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/return/create", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        productId: form.productId,
        quantity: Number(form.quantity),
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      alert(`Return Successful! You earned ${data.totalPoints} Green Points 🎉`);
      setForm({ productId: "", quantity: 1 });
      onSuccess();  // History reload
    } else {
      alert(data.message || "Return failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
      <h2 className="text-lg font-semibold mb-2">Select Product to Return</h2>

      <select
        name="productId"
        value={form.productId}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      >
        <option value="">-- Select Product --</option>
        {products.map(p => (
          <option key={p.id} value={p.id}>
            {p.name} ({p.category}) - {p.pointsPerUnit} Points/Unit
          </option>
        ))}
      </select>

      <input
        type="number"
        name="quantity"
        min="1"
        value={form.quantity}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        placeholder="Quantity"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {loading ? "Processing..." : "Return Packaging & Earn Points"}
      </button>
    </form>
  );
}
