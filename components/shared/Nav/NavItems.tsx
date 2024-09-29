"use client"
import Link from 'next/link'
import { Menubar } from "@/components/ui/menubar"
import navItems from '@/constants/nav-items'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion';



const NavItems = ({ variant }: any) => {
    const pathname = usePathname()
    const currentUser = pathname.split('/')[1]
    const navItem = navItems(currentUser)


    return (
        <div className=' hidden lg:block text-white '>
            <Menubar className='border-none'>
                <NavigationMenu>
                    <NavigationMenuList>
                        {navItem.map((menu: any, index: any) => (
                            <div key={menu.key}>
                                {menu.key ? (
                                    <NavigationMenuItem className="">
                                        <NavigationMenuTrigger className="[&>svg]:hidden px-3 transition-all duration-200 ease-in-out">
                                            <Link
                                                href={menu.key}
                                                className={`text-text5 transition-all ease-in-out duration-200 font-500 text-[16px] flex items-center gap-2 
                                        ${pathname === menu.key ? 'active-class' : ''}`}
                                            >
                                                <motion.span
                                                    className="flex items-center gap-2"
                                                    initial={{ scale: 1 }}
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ type: "spring", stiffness: 200 }}
                                                >
                                                    <motion.span
                                                        className={`text-theme1 hover:text-theme1 transition-all ease-in-out duration-200 ${pathname === menu.key ? 'text-active' : ''}`}
                                                        initial={{ opacity: 0.8 }}
                                                        whileHover={{ opacity: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        {menu?.icon}
                                                    </motion.span>
                                                    <motion.span
                                                        className={`hover:text-theme1 transition-all ease-in-out duration-200 ${pathname === menu.key ? 'text-active' : 'text-white'}`}
                                                        initial={{ opacity: 0.8 }}
                                                        whileHover={{ opacity: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        {menu.label}
                                                    </motion.span>
                                                </motion.span>
                                            </Link>
                                        </NavigationMenuTrigger>
                                    </NavigationMenuItem>
                                ) : (
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-1 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                {menu.subMenu?.map((sub: any) => (
                                                    <li key={sub.key} title="Introduction">
                                                        <span className="font-bold mb-1 text-blue-midnight_blue">{sub.label}</span>
                                                        <p className="text-blue-midnight_blue">{sub.details}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                )}
                            </div>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

            </Menubar>
        </div>
    )
}

export default NavItems