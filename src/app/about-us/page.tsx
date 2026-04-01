import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Hero from '../_components/ui/Hero'

function AboutUsPage() {
    return (
        <>
            <Hero />
            {/* first section */}
            <div className='flex gap-5 p-16'>
                <div className='w-1/2'>
                    <h2 className='text-4xl font-semibold text-start text-[#31487A] mt-16 pe-24'>Our goal is to empower the healthcare sector through smart and reliable supply.</h2>
                    <p className='text-[#31487A] text-start mt-6  text-lg'>Linki Marketplace was launched with a clear vision to transform the process of sourcing medical equipment into a seamless and efficient digital experience.</p> <br />
                    <p className='text-[#31487A] text-start  text-lg mb-6'>We connect trusted medical suppliers with hospitals, centers, and clinics to simplify purchasing and deliver smart solutions that enhance the quality of healthcare services across the region.</p>

                    <Link href={`/#`} className="flex gap-2.5 justify-center items-center text-white py-2 border-2 w-36 border-primary bg-[#31487A] hover:bg-[#476097] bg-primary rounded-lg cursor-pointer transition-all duration-300 mt-5">
                        Shop Now

                    </Link>
                </div>
                <div className='w-1/2'>
                    <Image src="/images/about.png" alt="Hero" width={600} height={500} objectFit=" object-cover rounded-lg" />
                </div>
            </div>
            {/* our Mission */}
            <div className='flex gap-5 p-16 pb-5'>
                <div className='w-[15%] bg-[#F1F8FE] p-6 rounded-s-xl'>
                    <Image src="/images/mission.png" alt="Hero" width={150} height={100} objectFit=" object-cover rounded-lg" />
                </div>
                <div className='w-[85%] bg-[#31487A] p-10 pe-28 rounded-e-xl'>
                    <h2 className='text-4xl font-semibold text-start text-white'>Our Mission</h2>
                    <p className='text-white text-start mt-6 text-lg'>Providing a reliable, technology-driven platform that simplifies the purchasing and supply of medical equipment while ensuring efficiency and transparency at every step.</p>
                </div>
            </div>
            {/* our Vision */}
            <div className='flex gap-5 p-16 pt-0'>
                <div className='w-[85%] bg-[#F1F8FE] p-10 pe-28 rounded-s-xl'>
                    <h2 className='text-4xl font-semibold text-start text-[#31487A]'>Our Vision</h2>
                    <p className='text-[#31487A] text-start mt-6 text-lg'>To be the leading digital marketplace for medical equipment in the Gulf, setting new standards in efficiency, reliability, and user experience.</p>
                </div>
                <div className='w-[15%] bg-[#31487A] p-6 rounded-e-xl'>
                    <Image src="/images/vision.png" alt="Hero" width={150} height={100} objectFit=" object-cover rounded-lg" />
                </div>
            </div>
            {/* What We Offer section */}
            <div className='flex gap-5 p-16'>
                <div className='w-1/2'>
                    <Image src="/images/about.png" alt="Hero" width={600} height={500} objectFit=" object-cover rounded-lg" />
                </div>
                <div className='w-1/2'>
                    <h2 className='text-4xl font-semibold text-start text-[#31487A] mt-16 pe-24'>What We Offer</h2>
                    <div className='flex gap-2 items-center mt-6'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#31487A" stroke="#31487A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.75 12.0019L10.58 14.8319L16.25 9.17188" stroke="#F5F6F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>
                        <div className='text-[#31487A]'>A wide range of medical equipment — from diagnostic devices to surgical tools — all sourced from certified and trusted suppliers.</div>
                    </div>
                    <div className='flex gap-2 items-center my-2'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#31487A" stroke="#31487A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.75 12.0019L10.58 14.8319L16.25 9.17188" stroke="#F5F6F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>
                        <div className='text-[#31487A]'>Maintenance and calibration services to ensure device accuracy and operational efficiency according to the highest standards.</div>
                    </div>
                    <div className='flex gap-2 items-center my-2'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#31487A" stroke="#31487A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.75 12.0019L10.58 14.8319L16.25 9.17188" stroke="#F5F6F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>
                        <div className='text-[#31487A]'>Flexible payment and shipping options, including multiple payment methods, easy installment plans, and fast delivery across Saudi Arabia and the Gulf.</div>
                    </div>
                    <div className='flex gap-2 items-center my-2'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#31487A" stroke="#31487A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.75 12.0019L10.58 14.8319L16.25 9.17188" stroke="#F5F6F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </div>
                        <div className='text-[#31487A]'>Trusted suppliers and secure transactions — every purchase is handled with full transparency and reliability.</div>
                    </div>
                </div>
            </div>
            {/* Our Team */}
            <div className='bg-[#F1F8FE] p-16'>
                <h2 className='text-4xl font-semibold text-center text-[#31487A]'>Our Team</h2>
                <p className='text-[#31487A] text-center mt-6 text-lg px-64'>The Linki team brings together top professionals from the fields of technology and healthcare, working hand in hand to redefine the medical supply experience — making it smarter, faster, and more reliable.</p>

                <div className='grid grid-cols-4 gap-4 mt-10'>
                    <div className='bg-white rounded-lg flex flex-col justify-center items-center '>
                         <Image src="/images/avatar.jpeg" alt="Hero" width={200} height={100} objectFit=" object-cover rounded-lg" />
                         <h3 className='text-[#31487A] font-medium text-lg'>Dr/ Mohamed El-Faraby </h3>
                         <p>CTO</p>
                    </div>
                    <div className='bg-white rounded-lg flex flex-col justify-center items-center '>
                         <Image src="/images/avatar.jpeg" alt="Hero" width={200} height={100} objectFit=" object-cover rounded-lg" />
                         <h3 className='text-[#31487A] font-medium text-lg'>Eng./ Omar Eissa </h3>
                         <p>CTO</p>
                    </div>
                    <div className='bg-white rounded-lg flex flex-col justify-center items-center '>
                         <Image src="/images/avatar.jpeg" alt="Hero" width={200} height={100} objectFit=" object-cover rounded-lg" />
                         <h3 className='text-[#31487A] font-medium text-lg'>Eng./ Mohamed Alaa </h3>
                         <p>Technical Lead</p>
                    </div>
                    <div className='bg-white rounded-lg flex flex-col justify-center items-center '>
                         <Image src="/images/avatar.jpeg" alt="Hero" width={200} height={100} objectFit=" object-cover rounded-lg" />
                         <h3 className='text-[#31487A] font-medium text-lg'>Mr./ Hossam Farouk</h3>
                         <p>Sales Manager</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsPage
