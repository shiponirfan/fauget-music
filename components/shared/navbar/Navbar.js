"use client"
import Image from "next/image"
import logo from "../../../assets/logo.png"
import Link from "next/link"
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { MdOutlineMusicNote } from "react-icons/md";
import { MdQueueMusic } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
const Navbar = () => {
    return (
        <div className="bg-secondary-bg py-12 px-8 min-h-screen flex flex-col justify-between items-baseline">
            <div>
                <div>
                    <Link href="/"><Image src={logo} alt="Fauget Music Logo" /></Link>
                </div>
                <div className="font-semibold text-[22px] text-white">
                    <div className="flex items-center my-10 justify-between">
                        <h2>Menu</h2>
                        <div className="bg-white h-[2px] w-20"></div>
                    </div>
                    <ul className="space-y-8">
                        <li><Link className="flex items-center gap-4" href="/"><IoMdHome /> Home</Link></li>
                        <li><Link className="flex items-center gap-4" href="/podcast"><MdOutlineMusicNote /> Podcast</Link></li>
                        <li><Link className="flex items-center gap-4" href="/settings"><IoMdSettings /> Settings</Link></li>
                        <li className="flex items-center gap-4"><TbLogout /> Logout</li>
                    </ul>
                </div>
            </div>
            <div className="font-semibold text-[22px] text-white w-full">
                <div className="flex items-center justify-between my-10">
                    <h2>My Playlist</h2>
                    <div className="bg-white h-[2px] w-20"></div>
                </div>
                <ul className="space-y-8">
                    <li><Link className="flex items-center gap-4" href="/playlist"><MdQueueMusic /> Playlist #A</Link></li>
                    <li><Link className="flex items-center gap-4" href="/playlist"><MdQueueMusic /> Playlist #B</Link></li>
                    <li><Link className="flex items-center gap-4" href="/playlist"><MdQueueMusic /> Playlist #C</Link></li>
                    <li><Link className="flex items-center gap-4" href="/add-new"><MdQueueMusic /> Add New +</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar