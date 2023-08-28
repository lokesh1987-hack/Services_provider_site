/* Import Packes */
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'

/* Import Data */
import { NavbarHeading } from '../DEMO_DATA/Data';


const Navgbar = () => {
    const { asPath } = useRouter()

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-100">
            <div className=" flex flex-wrap items-center justify-between py-4 sm:px-0  content-center ">
                <Link href="/" className="flex items-center ">
                    <img src="https://assets.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg" style={{ width: "auto", height: "auto" }} className=" mr-3" alt="Flowbite Logo" />
                    <button type="button" className="py-2.5 px-3 mr-2 text-xs font-small text-gray-900 focus:outline-nohttp://localhost:3000/ne bg-gray-100 rounded-3xl border border-gray-200 hover:bg-gray-200 hover:text-grey-700 focus:z-10 focus:ring-5 focus:ring-gray-200">We are hiring!</button>
                </Link>
                <button data-collapse-toggle="navbar-dropdown" type="button" onClick={() => { setIsNavExpanded(!isNavExpanded) }} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${!isNavExpanded && "hidden"} w-full md:block md:w-auto`} id="navbar-dropdown" >
                    <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
                        {NavbarHeading.map(([title, href]: NavbarHeading, index: number) => (
                            <li key={index} className='relative group'>
                                <Link href={href} className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${asPath === href && "text-blue-700"} `}>{title}</Link>
                                <span className="absolute inset-x-0 bottom h-0.5 mt-2 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr />
        </nav >

    )
}
export default Navgbar

