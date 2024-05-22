import React from 'react'
import { TbMailOpenedFilled } from "react-icons/tb";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn, FaPhoneVolume } from 'react-icons/fa'
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/16/solid';


function Navbar() {
    return (
        <main>
            <section className='fixed top-0 left-0 bg-gradient-to-r from-6f6da0 to-e93a7e lg:h-12 lg:w-full md:w-full md:h-12 sm:w-mobile sm:h-8'>
                <div className='text-white flex lg:pt-3 lg:pl-40 sm:pt-3 sm:pl-10'>
                   
                    <Link href='https://www.facebook.com/profile.php?id=100036069652618&mibextid=ZbWKwL'><div className='border-r border-white h-6 mr-2 pr-3'><FaFacebookF className='text-m' /></div></Link>
                    <Link href="https://api.whatsapp.com/send?phone=923079664615"><p className='border-r border-white h-6 mr-2 pr-3'><FaWhatsapp className='text-m' /></p></Link>
                    <p className='border-r border-white h-6 mr-2 pr-3'><FaTwitter className='text-m' /></p>
                    <p className='border-r border-white h-6 mr-2 pr-3'><FaYoutube className='text-m' /></p>
                    <Link href="https://instagram.com/asimbutt3349?igshid=NGVhN2U2NjQ0Yg=="></Link><p className='border-r border-white h-6 mr-2 pr-3'><FaInstagram className='text-m' /></p>
                    <p className='border-r border-white h-6 mr-2 pr-3'><FaLinkedinIn className='text-m' /></p>
                    <p className='flex lg:ml-20 md:ml-20 text-sm'><FaPhoneVolume className='text-sm ' />+923079664615</p>
                    <p className='align-center border-l border-white h-full lg:ml-4 lg:pl-4 md:ml-4 md:pl-4 flex text-sm'><TbMailOpenedFilled className='text-sm align-centre mr-1' />asimbutt9664@gmail.com</p>

                    <p className='pl-20 text-lg lg:align-right md:text-right'><button className='align-center border-white border-2 text-white  bg-transparent  rounded-3xl bg-blend-screen shadow-slate-600'>
                        <a href="#" className='p-3 text-xs align-center'>
                            REQUEST A CONSULT
                        </a>
                    </button></p>
                    <div className='text-xl md:hidden cursor-pointer'><Bars3Icon/></div>
                </div>
            </section>
        </main>
    ) 
}

export default Navbar