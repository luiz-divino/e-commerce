export const Cart = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <section className="flex justify-between items-center mx-auto mt-10">
        <img src="#" alt="" />

        <strong>price</strong>

        <div className="flex gap-3 items-center">
          <button>+</button>
          <span>quantity</span>
          <button>-</button>
        </div>

        <strong className="float-right">Subtotal: value</strong>
      </section>
    </div>
  );
};
