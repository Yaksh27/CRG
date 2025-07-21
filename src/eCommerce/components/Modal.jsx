function Modal({product}) {
  return (
    <div className="fixed top-4 right-4 z-100">
      <div className="h-auto w-80 rounded-xl bg-green-100 border border-green-300 shadow-lg p-4">
        <div className="flex items-center gap-2">
          <span className="text-green-600 text-xl">✓</span>
          <h2 className="text-sm font-medium text-green-800">
            {product.name} added to cart!
          </h2>
        </div>
      </div>
    </div>
  );
}




export default Modal;
