'use client'
import React from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { nav_items } from '@/utils/data'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { closeMenu } from '@/redux/slice/mobileMenu-slice'

const MobileNav = () => {
    const dispatch = useDispatch<AppDispatch>()
    const isOpenMenu = useAppSelector((state) => state.mobileMenuReducer.value.isOpenMenu)

    return (
        <div className={`fixed top-0 right-0 bottom-0 py-[25px] px-[25px] bg-primary w-[300px] z-50 transform transition-all duration-300 ease-in-out ${isOpenMenu ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
            <div>
                <div className='flex justify-end' >
                    <Hamburger
                        toggled={isOpenMenu}
                        toggle={() => dispatch(closeMenu())}
                        color='#fff'
                    />
                </div>
                <div>
                    <ul className='flex flex-col gap-3 mt-7'>
                        {nav_items.map((menu, i) => <li className='text-white capitalize font-bold cursor-pointer' key={menu.label + i + menu.id}>{menu.label}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileNav