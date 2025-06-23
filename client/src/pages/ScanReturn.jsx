// client/src/pages/ScanReturn.jsx
import ReturnForm from '../components/ReturnForm';
import ProductDropdown from '../components/ProductDropdown';

export default function ScanReturn() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Return Your Packaging</h1>
      <p className="text-center text-gray-600 mb-8">
        Scan your product, select the packaging, and complete the return form to earn GreenPoints.
      </p>
      <div className="mb-6">
        <ProductDropdown />
      </div>
      <ReturnForm />
    </div>
  );
}