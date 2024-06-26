"use client"
import { nav_items } from '@/utils/data'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { ChevronDown } from 'lucide-react'
import navItems from '@/constants/nav-items'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { DropdownMenu, DropdownMenuContent } from '@/components/ui/dropdown-menu'
import { usePathname } from 'next/navigation'


const NavItems = ({ variant }: any) => {
    const [userType, setUserType] = useState("employers")
    const [headerMenu, setHeaderMenu] = useState<any>([])
    const pathname = usePathname()
    const currentUser = pathname.split('/')[1]

    const navItem = navItems(currentUser)

    console.log("currentUser", currentUser)

    return (
        <div className=' hidden lg:block '>
            <Menubar className='border-none'>
                <NavigationMenu>
                    <NavigationMenuList>
                        {navItem.map((menu: any, index: any) =>
                            <div key={menu.key}>
                                {menu.key ?
                                    <NavigationMenuItem className="">
                                        <NavigationMenuTrigger className="[&>svg]:hidden">
                                            <Link href={menu.key}>{menu.label}</Link>
                                        </NavigationMenuTrigger>
                                    </NavigationMenuItem>
                                    :
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                                                {menu.subMenu?.map((sub: any) => <li key={sub.key} title="Introduction">
                                                    <span className='font-bold mb-1 text-blue-midnight_blue'>{sub.label}</span>
                                                    <p className='text-blue-midnight_blue'>{sub.details}</p>
                                                </li>)}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                }


                            </div>
                        )}
                    </NavigationMenuList>
                </NavigationMenu>

            </Menubar>
        </div>
    )
}

export default NavItems