'use client';
import { closeMenu } from '@/redux/slice/mobileMenu-slice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { nav_items } from '@/utils/data';
import { Spin as Hamburger } from 'hamburger-react';
import { useDispatch } from 'react-redux';

const MobileNav = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpenMenu = useAppSelector(
    (state) => state.mobileMenuReducer.value.isOpenMenu,
  );

  return (
    <div
      className={`bg-primary fixed bottom-0 right-0 top-0 z-50 w-[300px] transform px-[25px] py-[25px] transition-all duration-300 ease-in-out ${isOpenMenu ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}
    >
      <div>
        <div className="flex justify-end">
          <Hamburger
            toggled={isOpenMenu}
            toggle={() => dispatch(closeMenu())}
            color="#fff"
          />
        </div>
        <div>
          <ul className="mt-7 flex flex-col gap-3">
            {nav_items.map((menu, i) => (
              <li
                className="cursor-pointer font-bold capitalize text-white"
                key={menu.label + i + menu.id}
              >
                {menu.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
