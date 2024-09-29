import React from 'react';

interface CategoriesType {
  data: {
    icon: string;
    categories: string;
    open_positions: string;
  };
}

const CategoriesCart = ({ data }: CategoriesType) => {
  return (
    <div className="rounded-[10px] border p-[20px]">
      <div className="flex items-center gap-5">
        <div className="hover:bg-primary group flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[10px] bg-[#ecedf2] transition-all duration-300 ease-in-out">
          <i
            className={`${data.icon} text-primary text-[35px] group-hover:text-white`}
          ></i>
        </div>
        <div>
          <h3 className="mb-1 font-bold text-purple">{data.categories}</h3>
          <p className="text-[14px] font-light text-purple">
            ({data.open_positions} open positions)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCart;
