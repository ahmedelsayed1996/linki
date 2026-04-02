import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Hero from '../../_components/ui/Hero'
import { useTranslations } from 'next-intl';

function AboutUsPage() {
    const t = useTranslations('AboutPage');
    return (
        <>
            <Hero />
            {/* first section */}
            <div className='flex flex-col lg:flex-row gap-5 p-5 lg:p-16 group'>
                <div className='lg:w-1/2 '>
                    <h2 className='text-4xl font-semibold text-start text-[#31487A] mt-16 lg:pe-24'>
                        {t("head1")}</h2>
                    <p className='text-[#31487A] text-start mt-6 text-lg opacity-90 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0'>{t("head3")}</p> <br />
                    <p className='text-[#31487A] text-start text-lg opacity-90 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0'>{t("head4")}</p>
                    <Link href={`/#`} className="flex gap-2.5 justify-center items-center text-white hover:text-[#31487A] py-2 border-2 w-36 border-primary bg-[#31487A] hover:bg-[#F0F2F6] rounded-lg cursor-pointer transition-all duration-300 mt-5">
                        {t('btn')}
                    </Link>
                </div>
                <div className='lg:w-1/2'>
                    <Image src="/images/about.png" alt="Hero" width={600} height={500} className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
                </div>
            </div>
            {/* our Mission */}
            <div className='flex flex-col lg:flex-row gap-5 p-5 lg:p-16 lg:pb-5 group '>
                <div className='lg:w-[15%] bg-[#F1F8FE] p-6 rounded-s-xl'>
                    <Image src="/images/mission.png" alt="Hero" width={150} height={100} className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className='lg:w-[85%] bg-[#31487A] p-7 lg:pe-28 rounded-e-xl'>
                    <h2 className='relative text-4xl font-semibold text-start text-white after:content-[""] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-[22%]'>
                        {t("head5")}
                    </h2>
                    <p className='text-white text-start mt-6 text-lg opacity-90 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0'>
                        {t("head6")}
                    </p>
                </div>
            </div>
            {/* our Vision */}
            <div className='flex flex-col lg:flex-row gap-5 p-5 lg:p-16 lg:pt-0 group '>
                <div className='lg:w-[85%] bg-[#F1F8FE] p-5 lg:pe-28 rounded-s-xl'>
                    <h2 className='relative text-4xl font-semibold text-start text-[#31487A] after:content-[""] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-[#31487A] after:transition-all after:duration-300 group-hover:after:w-[22%]'>
                        {t("head7")}
                    </h2>
                    <p className='text-[#31487A] text-start mt-6 text-lg opacity-90 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0'>
                        {t("head8")}
                    </p>
                </div>
                <div className='lg:w-[15%] bg-[#31487A] p-6 rounded-e-xl'>
                    <Image src="/images/vision.png" alt="Hero" width={150} height={100} className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110" />
                </div>
            </div>
            {/* What We Offer section */}
            <div className='flex flex-col lg:flex-row gap-5 p-5 lg:p-16 group'>
                <div className='lg:w-1/2 overflow-hidden'>
                    <Image src="/images/about.png" alt="Hero" width={600} height={500} className='object-cover rounded-xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1' />
                </div>
                <div className='lg:w-1/2'>
                    <h2 className='relative text-4xl font-semibold text-start text-[#31487A] mt-16 lg:pe-24 after:content-["" after:absolute after:left-0 after:-bottom-2 after:h-0.75 after:w-0 after:bg-[#31487A] after:transition-all after:duration-300 group-hover:after:w-[50%]'>
                        {t("head9")}
                    </h2>
                    {[
                        t("head10"),
                        t("head11"),
                        t("head12"),
                        t("head13"),
                    ].map((item, i) => (
                        <div
                            key={i}
                            className='flex gap-2 items-center my-3 text-[#31487A] -translate-x-5 animate-slideIn'
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <div className='transition-transform duration-300 group-hover:scale-110'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#31487A" stroke="#31487A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.75 12.0019L10.58 14.8319L16.25 9.17188" stroke="#F5F6F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className='transition-all duration-300 group-hover:translate-x-1'>
                                {item}
                            </div>
                        </div>
                    ))}
                    {/* <div className='flex gap-2 items-center my-2'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#31487A" stroke="#31487A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.75 12.0019L10.58 14.8319L16.25 9.17188" stroke="#F5F6F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </div>
                        <div className='text-[#31487A]'>{t("head11")}</div>
                    </div>
                    <div className='flex gap-2 items-center my-2'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#31487A" stroke="#31487A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.75 12.0019L10.58 14.8319L16.25 9.17188" stroke="#F5F6F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </div>
                        <div className='text-[#31487A]'>{t("head12")}</div>
                    </div>
                    <div className='flex gap-2 items-center my-2'>
                        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#31487A" stroke="#31487A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.75 12.0019L10.58 14.8319L16.25 9.17188" stroke="#F5F6F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </div>
                        <div className='text-[#31487A]'>{t("head13")}</div>
                    </div> */}
                </div>
            </div>
            {/* Our Team */}
            <div className='bg-[#F1F8FE] p-5 lg:p-16'>
                <h2 className='text-4xl font-semibold text-center text-[#31487A]'>{t("head14")}</h2>
                <p className='text-[#31487A] text-center mt-6 text-lg px-6 lg:px-64'>{t("head15")}</p>

                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10'>
                    <div className='bg-white rounded-lg flex flex-col justify-center items-center '>
                        <Image src="/images/avatar.jpeg" alt="Hero" width={200} height={100} objectFit=" object-cover rounded-lg" />
                        <h3 className='text-[#31487A] font-medium text-xl'>{t("head16")} </h3>
                        <p>{t("head17")}</p>
                    </div>
                    <div className='bg-white rounded-lg flex flex-col justify-center items-center '>
                        <Image src="/images/avatar.jpeg" alt="Hero" width={200} height={100} objectFit=" object-cover rounded-lg" />
                        <h3 className='text-[#31487A] font-medium text-xl'>{t("head18")} </h3>
                        <p>{t("head17")}</p>
                    </div>
                    <div className='bg-white rounded-lg flex flex-col justify-center items-center '>
                        <Image src="/images/avatar.jpeg" alt="Hero" width={200} height={100} objectFit=" object-cover rounded-lg" />
                        <h3 className='text-[#31487A] font-medium text-xl'>{t("head19")} </h3>
                        <p>{t("head20")}</p>
                    </div>
                    <div className='bg-white rounded-lg flex flex-col justify-center items-center '>
                        <Image src="/images/avatar.jpeg" alt="Hero" width={200} height={100} objectFit=" object-cover rounded-lg" />
                        <h3 className='text-[#31487A] font-medium text-xl'>{t("head21")}</h3>
                        <p>{t("head22")}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsPage
