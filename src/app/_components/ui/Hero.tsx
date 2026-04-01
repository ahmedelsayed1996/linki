import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <div className="flex overflow-hidden flex-col items-center justify-center py-10 h-125 w-full max-md:max-w-full bg-[url('/images/default-hero.png')] bg-cover bg-center">
            {/* Hero Section */}

            <div className="flex justify-center gap-2 items-center self-center text-lg font-medium text-primary">
                <Image src="/images/logo-hero.png" alt="logo" width={100} height={50} objectFit="cover" />
            </div>
            <h2 className='text-6xl font-semibold text-center text-[#31487A] mt-16'>Who Are We</h2>
            <p className='text-[#31487A] px-3 lg:px-80 text-center my-6 font-medium text-xl'>At Linki, we strive to simplify access to medical equipment and supplies. Our platform connects certified suppliers with healthcare facilities to provide a fast, secure, and transparent purchasing experience across the Gulf region.</p>

            <Link href={`/#`} className="flex gap-2.5 justify-center items-center text-white py-2 border-2 w-36 border-primary bg-[#31487A] hover:bg-[#476097] bg-primary rounded-lg cursor-pointer transition-all duration-300 mt-5">
                Shop Now

            </Link>

        </div>
    )
}

export default Hero
