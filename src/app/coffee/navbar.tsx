import logo from "@/app/favicon.ico"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <ul className="mx-auto z-50 fixed flex w-full max-w-screen h-14 bg-slate-400 dark:bg-slate-800 border-solid border-b-2 border-slate-700 dark:border-b-2 dark:border-slate-600 gap-x-3.5">
                <Link href={"./"} className="px-1 py-1">
                    <Image
                        src={logo}
                        height={56}
                        width={48}
                        aria-label="logo"
                        alt="logo"
                    />
                </Link>
                <Link href={"/about"} className="grid grid-rows-1">
                    <h1 className=" rounded-md hover:bg-slate-300 hover:dark:bg-slate-700 text-3xl my-auto">About</h1>
                </Link>
                <Link href={"/contact-me"} className="grid grid-rows-1">
                    <h1 className="rounded-md hover:bg-slate-300 hover:dark:bg-slate-700 text-3xl my-auto">Contact Me</h1>
                </Link>
            </ul>

        </nav>

    )
}