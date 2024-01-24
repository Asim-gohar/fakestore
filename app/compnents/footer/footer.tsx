import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/16/solid'
import React from 'react'
// import SMicons from './SMicons'

function Footer() { 
    return (
        <div className='pt-[8rem] pb-[4rem] bg-[#0a1620]'>
             {/* <span className='text-center text-[18px] pl-[3rem]'><SMicons/></span> */}
            <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 
        lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
            
                <div className='flex items-center space-x-6'>
                    <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center
                    rounded-full bg-[#51ebd4]'>
                        <MapIcon className='md:w-[6rem] md:h-[6rem] w-[2rem] h-[3.5rem] text-black' />
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
                            Address
                        </h1>
                        <p className='text-[17px]  text-white opacity-60'>
                            Aminabad # 2 , street # 5 , samnabad , faisalabad ,PK
                        </p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center space-x-6'>
                        <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center
                    rounded-full bg-[#51ebd4]'>
                            <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[2rem] h-[3.5rem] text-black' />
                        </div>
                        <div>
                            <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
                                Phone
                            </h1>
                            <p className='text-[17px] w-[90px] text-white opacity-60'>
                                +3079664615 <br />
                                +3254178853
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center space-x-6'>
                        <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center
                            rounded-full bg-[#51ebd4]'>
                            <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[2rem] h-[3.5rem] text-black' />
                        </div>
                        <div>
                            <h1 className='text-[25px] mb-[0.2rem] font-semibold text-white'>
                                Email
                            </h1>
                            <p className='text-[17px] w-[90px] text-white opacity-60'>
                                Asimbutt9664@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
                <div className='text-[16px] mb-[2rem] md:mb-0 text-white opacity-20'>
                    AsimButt Developer 2023 | All Rights Reserved
                </div>
                <div className='flex items-center space-x-10'>
                    <p className='text-[16px] text-white opacity-20'>Terms & Conditions</p>
                    <p className='text-[16px] text-white opacity-20'>Privacy Policy</p>
                    <p className='text-[16px] text-white opacity-20'>Sitemap</p>
                </div>
            </div>
        </div>
    )
}

export default Footer