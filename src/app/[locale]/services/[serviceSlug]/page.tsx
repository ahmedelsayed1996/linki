"use client"
import Hero from '@/app/_components/ui/Hero';
import useCurrentLang from '@/app/_hooks/useCurrentLang';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function ServiceDetails() {

    const t = useTranslations('services');
    const language = useCurrentLang();

    return (
        <>
            <Hero title={t('title')} prev={t('prev')} bg="bg-[url('/images/services-hero.png')]" />
            <div className='flex items-center justify-start gap-4 my-10 px-5 lg:px-16'>
                <Link href={`/${language}/services`} className="text-[#6B7280] hover:text-[#5a87e2]">{t('title')}</Link>
                <span>
                    <svg width="8" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.875417 0.875L8.96875 8.96833L0.875417 17.0617" stroke="#31487A" stroke-width="1.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </span>
                <p className='text-[#007CFE] underline'>{t('service3title')}</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 my-10 px-5 lg:px-16'>
                <aside>
                    <div className="lg:w-[272px] h-[164px] bg-white rounded-lg overflow-hidden shadow-[0px_0px_8px_1px_#00000012,0px_1px_10px_#0000001a] p-4 flex flex-col gap-4 mb-6">
                        <div className="flex flex-col gap-2 items-start w-full  xl:flex-1">
                            <div className=" flex flex-col gap-2 w-full">
                                <div className="relative">
                                    <span className="absolute top-1/2 -translate-y-1/2 inset-e-1 bg-[#2A3F6D] p-2 rounded-lg">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5423 19.2448C15.3518 19.2448 19.2507 15.3459 19.2507 10.5365C19.2507 5.72698 15.3518 1.82812 10.5423 1.82812C5.73284 1.82812 1.83398 5.72698 1.83398 10.5365C1.83398 15.3459 5.73284 19.2448 10.5423 19.2448Z" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M20.1673 20.1615L18.334 18.3281" stroke="white" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        name="schoolName"
                                        id="schoolName"
                                        // value={searchValue}
                                        // onChange={(e) => setSearchValue(e.target.value)}
                                        placeholder={t(("search"))}
                                        // placeholder={`${n("searchButton")}`}
                                        className="w-full py-2 ps-2 placeholder:text-[#A5A5A5] bg-[#FAFAFA] border border-[#31487A] rounded-lg focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-wrap items-center justify-start gap-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className="font-medium hover:text-white text-xs flex items-center  leading-4 bg-[#F1F8FE] hover:bg-[#31487a] text-[#31487a] rounded-[7px] px-1 py-2 cursor-pointer transition-all duration-300">
                                        {t(("Equipments"))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[272px] bg-white rounded-lg overflow-hidden shadow-[0px_0px_8px_1px_#00000012,0px_1px_10px_#0000001a] p-4 flex flex-col gap-4">
                        <Link href={`/${language}/service/ophthalmic-equipment-services`} className='flex justify-between items-center bg-[#F1F8FE] hover:bg-[#F1F8FE] p-2 px-4 rounded-lg '>
                            <p className='text-[#31487A]'>{t('service3title')}</p>
                            <span>
                                <svg width="8" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.875417 0.875L8.96875 8.96833L0.875417 17.0617" stroke="#31487A" stroke-width="1.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </Link>
                        <hr />
                        <Link href={`/${language}/service/ophthalmic-equipment-services`} className='flex justify-between items-center p-2 px-4 rounded-lg hover:bg-[#F1F8FE]'>
                            <p className='text-[#31487A]'>{t('service2title')}</p>
                            <span>
                                <svg width="8" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.875417 0.875L8.96875 8.96833L0.875417 17.0617" stroke="#31487A" stroke-width="1.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </Link>
                        <hr />
                        <Link href={`/${language}/service/ophthalmic-equipment-services`} className='flex justify-between items-center p-2 px-4 rounded-lg hover:bg-[#F1F8FE]'>
                            <p className='text-[#31487A]'>{t('service1title')}</p>
                            <span>
                                <svg width="8" height="15" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.875417 0.875L8.96875 8.96833L0.875417 17.0617" stroke="#31487A" stroke-width="1.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </aside>
                <main>
                    <div className='bg-[#F1F8FE] rounded-lg p-2 w-fit mb-1'>
                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0879 8.57812H30.9079C31.7646 8.57812 32.4913 9.20146 32.6213 10.0481L35.6812 29.8848C35.8646 31.0748 34.9446 32.1481 33.7413 32.1481C16.4446 32.1481 16.6712 32.3515 15.0979 31.5848L11.6979 29.9281C11.4446 29.8048 11.2812 29.5448 11.2812 29.2615V28.3215C11.2812 28.0248 11.5213 27.7848 11.8179 27.7848H28.5012C28.9912 27.7848 29.3679 27.3515 29.2979 26.8648L27.5579 14.5848C27.5046 14.1981 27.1712 13.9115 26.7812 13.9115H19.0846V8.57812H19.0879Z" fill="#31487A" />
                            <path d="M14.9508 31.8822L11.5508 30.2255C10.8108 29.8655 10.9474 29.1422 10.9474 28.3189C10.9474 27.8389 11.3374 27.4489 11.8174 27.4489H28.5008C28.7874 27.4489 29.0108 27.1955 28.9674 26.9089L27.2274 14.6289C27.1974 14.4089 27.0041 14.2422 26.7808 14.2422H19.0841C18.9008 14.2422 18.7508 14.0922 18.7508 13.9089V8.57552C18.7508 8.39219 18.9008 8.24219 19.0841 8.24219H30.9041C31.9308 8.24219 32.7908 8.97885 32.9474 9.99552L36.0074 29.8322C36.2208 31.2222 35.1441 32.4789 33.7374 32.4789C16.3974 32.4789 16.6041 32.6889 14.9474 31.8822H14.9508ZM11.8174 28.1155C11.7074 28.1155 11.6141 28.2055 11.6141 28.3189V29.2589C11.6141 29.6055 11.5174 29.4655 15.2441 31.2822C16.7274 32.0055 16.5008 31.8122 33.7408 31.8122C34.7408 31.8122 35.5041 30.9222 35.3508 29.9355L32.2908 10.0989C32.1841 9.41219 31.6041 8.91219 30.9074 8.91219H19.4208V13.5789H26.7841C27.3374 13.5789 27.8108 13.9922 27.8908 14.5389L29.6308 26.8189C29.7274 27.5055 29.1941 28.1189 28.5041 28.1189H11.8208L11.8174 28.1155Z" fill="white" />
                            <path d="M15.4663 4.5H9.44292C9.00845 4.5 8.65625 4.8522 8.65625 5.28667V17.7733C8.65625 18.2078 9.00845 18.56 9.44292 18.56H15.4663C15.9007 18.56 16.2529 18.2078 16.2529 17.7733V5.28667C16.2529 4.8522 15.9007 4.5 15.4663 4.5Z" fill="#31487A" />
                            <path d="M15.4656 18.9019H9.44227C8.8256 18.9019 8.32227 18.3985 8.32227 17.7819V5.29187C8.32227 4.67521 8.8256 4.17188 9.44227 4.17188H15.4656C16.0823 4.17188 16.5856 4.67521 16.5856 5.29187V17.7819C16.5856 18.3985 16.0823 18.9019 15.4656 18.9019ZM9.43893 4.84188C9.18893 4.84188 8.9856 5.04521 8.9856 5.29521V17.7852C8.9856 18.0352 9.18893 18.2385 9.43893 18.2385H15.4623C15.7123 18.2385 15.9156 18.0352 15.9156 17.7852V5.29187C15.9156 5.04187 15.7123 4.83854 15.4623 4.83854H9.43893V4.84188Z" fill="white" />
                            <path d="M11.0918 18.5625H13.8151V20.5258C13.8151 20.7358 13.6451 20.9058 13.4351 20.9058H11.4718C11.2618 20.9058 11.0918 20.7358 11.0918 20.5258V18.5625Z" fill="#F1F8FE" />
                            <path d="M13.4325 21.2444H11.4692C11.0759 21.2444 10.7559 20.9244 10.7559 20.531V18.5677C10.7559 18.3844 10.9059 18.2344 11.0892 18.2344H13.8125C13.9959 18.2344 14.1459 18.3844 14.1459 18.5677V20.531C14.1459 20.9244 13.8259 21.2444 13.4325 21.2444ZM11.4259 18.901C11.4259 20.5777 11.3992 20.5777 11.4725 20.5777C13.4759 20.5777 13.4825 20.6044 13.4825 20.531V18.901H11.4259Z" fill="#31487A" />
                            <path d="M15.0065 2.96875H9.89648V4.50542H15.0065V2.96875Z" fill="#31487A" />
                            <path d="M15.0097 4.84396H9.89974C9.71641 4.84396 9.56641 4.69396 9.56641 4.51063V2.97396C9.56641 2.79063 9.71641 2.64062 9.89974 2.64062H15.0097C15.1931 2.64062 15.3431 2.79063 15.3431 2.97396V4.51063C15.3431 4.69396 15.1931 4.84396 15.0097 4.84396ZM10.2297 4.17729H14.6731V3.30729H10.2297V4.17729Z" fill="#31487A" />
                            <path d="M15.7696 0.671875H9.13958C8.87265 0.671875 8.65625 0.888271 8.65625 1.15521V2.49188C8.65625 2.75881 8.87265 2.97521 9.13958 2.97521H15.7696C16.0365 2.97521 16.2529 2.75881 16.2529 2.49188V1.15521C16.2529 0.888271 16.0365 0.671875 15.7696 0.671875Z" fill="#31487A" />
                            <path d="M15.7703 3.30594H9.13698C8.68698 3.30594 8.32031 2.93927 8.32031 2.48927V1.1526C8.32031 0.702604 8.68698 0.335938 9.13698 0.335938H15.7703C16.2203 0.335938 16.587 0.702604 16.587 1.1526V2.4926C16.587 2.9426 16.2203 3.30927 15.7703 3.30927V3.30594ZM9.13698 1.0026C8.92698 1.0026 8.98698 1.15594 8.98698 2.48927C8.98698 2.71927 8.98698 2.63927 15.767 2.63927C15.977 2.63927 15.917 2.48594 15.917 1.1526C15.917 0.922604 15.917 1.0026 9.13698 1.0026Z" fill="white" />
                            <path d="M19.0866 14.6694C21.0362 14.6694 22.6166 13.0889 22.6166 11.1394C22.6166 9.18981 21.0362 7.60938 19.0866 7.60938C17.1371 7.60938 15.5566 9.18981 15.5566 11.1394C15.5566 13.0889 17.1371 14.6694 19.0866 14.6694Z" fill="#F1F8FE" />
                            <path d="M19.086 15.0001C16.956 15.0001 15.2227 13.2668 15.2227 11.1368C15.2227 9.00677 16.956 7.27344 19.086 7.27344C21.216 7.27344 22.9493 9.00677 22.9493 11.1368C22.9493 13.2668 21.216 15.0001 19.086 15.0001ZM19.086 7.94344C17.3227 7.94344 15.8893 9.37677 15.8893 11.1401C15.8893 12.9034 17.3227 14.3368 19.086 14.3368C20.8493 14.3368 22.2827 12.9034 22.2827 11.1401C22.2827 9.37677 20.8493 7.94344 19.086 7.94344Z" fill="#31487A" />
                            <path d="M19.0865 12.9348C20.0825 12.9348 20.8899 12.1274 20.8899 11.1315C20.8899 10.1355 20.0825 9.32812 19.0865 9.32812C18.0906 9.32812 17.2832 10.1355 17.2832 11.1315C17.2832 12.1274 18.0906 12.9348 19.0865 12.9348Z" fill="#31487A" />
                            <path d="M18.6875 25.3134V36.9034H29.9008V32.7101L23.7608 25.0234H18.9775C18.8175 25.0234 18.6908 25.1534 18.6908 25.3101L18.6875 25.3134Z" fill="#31487A" />
                            <path d="M29.9002 37.2453H18.6868C18.5035 37.2453 18.3535 37.0953 18.3535 36.9119V25.3186C18.3535 24.9753 18.6302 24.6986 18.9735 24.6986C23.8768 24.6986 23.8635 24.6319 24.0168 24.8253L30.1568 32.5119C30.2668 32.6486 30.2302 32.5186 30.2302 36.9119C30.2302 37.0953 30.0802 37.2453 29.8968 37.2453H29.9002ZM19.0202 36.5786H29.5668V32.8353L23.5968 25.3653H19.0202V36.5786Z" fill="#31487A" />
                            <path d="M8.94372 36.9062H35.7237C36.1604 36.9062 36.5137 37.2596 36.5137 37.6962V39.2496H8.15039V37.6962C8.15039 37.2596 8.50372 36.9062 8.94039 36.9062H8.94372Z" fill="#31487A" />
                            <path d="M36.5131 39.5881H8.14974C7.96641 39.5881 7.81641 39.4381 7.81641 39.2548V37.7015C7.81641 37.0815 8.31974 36.5781 8.93974 36.5781H35.7197C36.3397 36.5781 36.8431 37.0815 36.8431 37.7015V39.2548C36.8431 39.4381 36.6931 39.5881 36.5097 39.5881H36.5131ZM8.48307 38.9215H36.1797V37.7015C36.1797 37.4481 35.9731 37.2448 35.7231 37.2448H8.94307C8.68974 37.2448 8.48641 37.4515 8.48641 37.7015V38.9215H8.48307Z" fill="white" />
                            <path d="M7.11331 38.7734H37.55C38.27 38.7734 38.8566 39.3601 38.8566 40.0801V42.0034H5.80664V40.0801C5.80664 39.3601 6.39331 38.7734 7.11331 38.7734Z" fill="#31487A" />
                            <path d="M38.856 42.3342H5.80599C5.62266 42.3342 5.47266 42.1842 5.47266 42.0008V40.0775C5.47266 39.1742 6.20932 38.4375 7.11266 38.4375H37.5493C38.4527 38.4375 39.1893 39.1742 39.1893 40.0775V42.0008C39.1893 42.1842 39.0393 42.3342 38.856 42.3342ZM6.13932 41.6675H38.5227V40.0775C38.5227 39.5408 38.086 39.1042 37.5493 39.1042H7.11266C6.57599 39.1042 6.13932 39.5408 6.13932 40.0775V41.6675Z" fill="#31487A" />
                            <path d="M33.5305 16.276H27.7538C27.3138 16.276 27.3138 15.6094 27.7538 15.6094H33.5305C33.9705 15.6094 33.9705 16.276 33.5305 16.276Z" fill="white" />
                            <path d="M29.9008 34.5964H18.6874C18.2474 34.5964 18.2474 33.9297 18.6874 33.9297H29.9008C30.3408 33.9297 30.3408 34.5964 29.9008 34.5964Z" fill="#31487A" />
                            <path d="M22.7103 31.6667C23.5847 31.6667 24.2936 30.9578 24.2936 30.0833C24.2936 29.2089 23.5847 28.5 22.7103 28.5C21.8358 28.5 21.127 29.2089 21.127 30.0833C21.127 30.9578 21.8358 31.6667 22.7103 31.6667Z" fill="#F1F8FE" />
                            <path d="M18.6905 25.9844H3.81055V27.7844H18.6905V25.9844Z" fill="#F1F8FE" />
                            <path d="M18.6866 28.1151H3.8099C3.62656 28.1151 3.47656 27.9651 3.47656 27.7818V25.9818C3.47656 25.7984 3.62656 25.6484 3.8099 25.6484H18.6899C18.8732 25.6484 19.0232 25.7984 19.0232 25.9818V27.7818C19.0232 27.9651 18.8732 28.1151 18.6899 28.1151H18.6866ZM4.14323 27.4484H18.3566V26.3151H4.14323V27.4484Z" fill="#31487A" />
                        </svg>
                    </div>
                    <h2 className='text-primary font-medium text-[32px]'>{t('service3title')}</h2>
                    <div className="">
                        <Image src="/images/services.png" width={2000} height={300} alt="" className='object-cover' />
                    </div>
                    <div className='flex flex-col lg:flex-row gap-5 justify-between my-5'>
                        <div className='bg-[#F5F6F9] rounded-lg p-8 lg:w-1/2'>
                            <h4 className='font-semibold text-lg lg:text-2xl text-[#3A4145]'>
                                {t('How')}
                            </h4>
                            <p className='text-sm text-primary mt-2 font-medium '> {t('Calibration')}</p>
                        </div>
                        <div className='bg-[#F5F6F9] rounded-lg p-8 lg:w-1/2'>
                            <h4 className='font-semibold text-lg lg:text-2xl text-[#3A4145]'>
                                {t('Laboratory')}
                            </h4>
                            <p className='text-sm text-primary mt-2 font-medium'> {t('process')}</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-5 justify-between my-5'>
                        <div className='bg-[#F5F6F9] rounded-lg p-8 lg:w-1/2'>
                            <h4 className='font-semibold text-lg lg:text-2xl text-[#3A4145]'>
                                {t('When')}
                            </h4>
                            <h5 className='text-base font-semibold text-primary mt-4'>
                                {t('Devices')}
                            </h5>

                            <ul className='text-sm text-primary mt-2 list-inside list-disc'>
                                <li>{t('operating')}</li>
                                <li>{t('noticing')}</li>
                                <li>{t('After')}</li>
                            </ul>
                        </div>
                        <div className='bg-[#F5F6F9] rounded-lg p-8 lg:w-1/2'>
                            <h4 className='font-semibold text-lg lg:text-2xl text-[#3A4145]'>
                                {t('When')} 
                            </h4>
                            <div className='flex gap-2 items-center mt-2'>
                                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#38AB42" />
                                    <path d="M7.75 11.9941L10.58 14.8241L16.25 9.16406" fill="#38AB42" />
                                    <path d="M7.75 11.9941L10.58 14.8241L16.25 9.16406" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>
                                <p className=' text-primary font-medium'> {t('Extensive')}</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#38AB42" />
                                    <path d="M7.75 11.9941L10.58 14.8241L16.25 9.16406" fill="#38AB42" />
                                    <path d="M7.75 11.9941L10.58 14.8241L16.25 9.16406" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>
                                <p className=' text-primary font-medium'> {t('well')}</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#38AB42" />
                                    <path d="M7.75 11.9941L10.58 14.8241L16.25 9.16406" fill="#38AB42" />
                                    <path d="M7.75 11.9941L10.58 14.8241L16.25 9.16406" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>
                                <p className=' text-primary font-medium'>{t('Documented')} </p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#38AB42" />
                                    <path d="M7.75 11.9941L10.58 14.8241L16.25 9.16406" fill="#38AB42" />
                                    <path d="M7.75 11.9941L10.58 14.8241L16.25 9.16406" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>
                                <p className=' text-primary font-medium'>{t('Fast')} </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-[0px_0px_8px_1px_#00000012,0px_1px_10px_#0000001a] p-4 flex flex-col gap-4 mb-6">
                        <h2 className='text-primary font-semibold text-[32px]'>{t('Talk')}</h2>
                        <p className='text-[#B3B3B3]'>{t('Fill')}</p>
                        <form action="">
                            <div className='my-5'>
                                <input type="text" name="fullName" id="" placeholder={t('placeholder')} className='bg-white rounded-md overflow-hidden shadow-[0px_0px_8px_1px_#00000012,0px_1px_10px_#0000001a] ps-3 py-3 w-full' />
                            </div>
                            <div className='flex flex-col lg:flex-row justify-between gap-3 my-5'>
                                <input type="email" name="email" id="" placeholder={t('placeholder1')} className='bg-white rounded-md overflow-hidden shadow-[0px_0px_8px_1px_#00000012,0px_1px_10px_#0000001a]  lg:w-1/2 ps-3 py-3' />
                                <input type="text" name="companyName" id="" placeholder={t('placeholder2')} className='bg-white rounded-md overflow-hidden shadow-[0px_0px_8px_1px_#00000012,0px_1px_10px_#0000001a]  lg:w-1/2 ps-3 py-3' />
                            </div>
                            <div className='flex flex-col lg:flex-row justify-between gap-3 my-5'>
                                <input type="date" name="date" id="" placeholder={t('placeholder3')} className='bg-white rounded-md overflow-hidden shadow-[0px_0px_8px_1px_#00000012,0px_1px_10px_#0000001a]  lg:w-1/2 ps-3 py-3' />
                                <input type="text" name="request" id="" placeholder={t('placeholder4')} className='bg-white rounded-md overflow-hidden shadow-[0px_0px_8px_1px_#00000012,0px_1px_10px_#0000001a]  lg:w-1/2 ps-3 py-3' />
                            </div>
                            <div className='flex justify-between gap-3 my-5'>
                                <textarea name="description" rows={6} id="" placeholder={t('placeholder5')} className='bg-white rounded-md overflow-hidden shadow-[0px_0px_8px_1px_#00000012,0px_1px_10px_#0000001a] w-full ps-3 py-3'></textarea>
                            </div>
                            <div className='flex justify-start gap-2 my-5'>
                                <input type="checkbox" name="urgently" id="urgently" />
                                <label htmlFor="urgently" className='font-medium text-primary'>{t('placeholder6')}</label>
                            </div>
                            <div>
                                <button className='bg-primary px-10 py-3 rounded-lg w-1/2 text-white border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 cursor-pointer'>
                                    {t('placeholder7')}
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}

export default ServiceDetails