const Checkout = () => {
  return (
    <div>
      <h6 className="text-xl md:text-[40px] text-textColor font-medium font-noka">
        Checkout
      </h6>
      {/* total amount */}
      <p className="text-primary text-xs md:text-xl font-medium font-noka md:mt-3">
        Amount Due: $30
      </p>
      <div className="mt-6 hidden lg:block">
        <h6 className="text-textColor text-xl md:text-[40px] font-medium font-noka">
          Items In The Cart
        </h6>
        {/* Product name and price */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-textColor text-xs md:text-xl font-medium font-noka mt-3">
            1. T-Shirt: The Audience Economy
          </p>
          <p className="text-textColor text-xs md:text-xl font-medium font-noka mt-3">
            $30
          </p>
        </div>
      </div>
      <div className="mt-[40px] flex items-center justify-between">
        <h6 className="text-xs md:text-[30px] text-textColor font-bold font-noka">
          Credit Card
        </h6>
        <p className="text-xs md:text-[30px] text-textColor font-medium font-noka">
          Cardano Wallet
        </p>
      </div>
    </div>
  );
};

export default Checkout;
