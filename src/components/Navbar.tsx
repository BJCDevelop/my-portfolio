import Link from "next/link"
import { useState } from "react"

const links = {

}

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 w-screen">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link legacyBehavior href="/">
                        <a className="text-lg leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">
                            BJCDevelop IT
                        </a>
                    </Link>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <svg
                            className="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path
                                fillRule="evenodd"
                                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <Link legacyBehavior href="/about">
                                <a className="px-3 py-2 flex items-center text-md leading-snug text-white hover:opacity-75">
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link legacyBehavior href="/projects">
                                <a className="px-3 py-2 flex items-center text-md leading-snug text-white hover:opacity-75">
                                    Projects
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link legacyBehavior href="/contact">
                                <a className="px-3 py-2 flex items-center text-md leading-snug text-white hover:opacity-75">
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}