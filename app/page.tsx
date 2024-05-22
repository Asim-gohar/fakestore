

import axios from 'axios';
import { DataType} from './compnents/Types/types';
import { GiShoppingCart } from "react-icons/gi";
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';
import Footer from './compnents/footer/footer';
import Navbar from './compnents/navbar/navbar';
import { Bars3Icon } from '@heroicons/react/16/solid';

const getProducts =async () => {
  try {
   
    const response =await fetch('https://fakestoreapi.com/products');
    const data = response.json()
   
    return data 
  } catch (error) {
    console.error('Check your internet connection');
  }
}

async function Page() {
 
  const products = await getProducts()

  return (
    <>
    <main>
     <section><Navbar /></section>
      <div className='py-11'>
       <section className='flex-grow flex lg:justify-end sm:justify-start item-end pt-60 pr-6 sm:w-100px sm:h-20px' style={{backgroundImage:"url('/images/back.webp')" , backgroundPosition:"center", backgroundSize:"cover"}}>
        <div >
       
        </div> 
        </section>  
        
 
        <div className='px-32'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 pt-20 '>
            {products?.map((item : DataType , i : number) => {
              return (
                <div key={i} className=' border-2 justify-between lg-w-[300px] lg-h-[365px]'>

                  <div className='flex-grow flex justify-center item-center'>
                    <img src={item.image} alt="" className='text-center w-cover h-[180px]' />
                  </div>
                  <div className='pt-6'>
                    <div className=''>{item.title}</div>
                    <div className='flex'>
                      <button className='flex '>
                        <FaStar className='text-yellow-500' /><FaStar className='text-yellow-500' /><FaStar className='text-yellow-500' /><FaStar className='text-yellow-500' /><FaStarHalf className='text-yellow-500' />
                      </button>
                     <div className='pl-2'><span className='border rounded h-cover bg-92bcfb'>{item.rating.rate}</span></div>
                    </div>
                    <span className='flex justify-between'>
                      <div className='font-bold text-xl'>${item.price}</div>
                      <div className='text-right text-3xl hover:text-4xl'><GiShoppingCart /></div>
                    </span>
                  </div>
                </div> 
              )
            })
            }
          </div>
        </div>
      </div>
    </main>
      <Footer />
     </>
  );
}

export default Page;

      
