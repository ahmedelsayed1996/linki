"use client"
import useCurrentLang from '@/app/_hooks/useCurrentLang';
import { ChevronDown, Microscope, Wrench, Eye, Cog, Info, Tag, BadgeDollarSign, Newspaper, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
const NAV_LINKS = [
  { key: "Home", href: "" },
  { key: "Services", href: "services", icon: <Cog size={20} /> },
  { key: "About", href: "about-us", icon: <Info size={20} /> },
  { key: "Products", href: "products", icon: <Tag size={20} /> },
  { key: "Offers", href: "offers", icon: <BadgeDollarSign size={20} /> },
  { key: "Blogs", href: "blogs", icon: <Newspaper size={20} /> },
  { key: "Contact", href: "contact-us", icon: <Phone size={20} /> }
];

const SERVICES_LINKS = [
  { name: "Laboratory Equipment Services & Calibration", href: "services/ophthalmic-equipment-services", icon: <Microscope /> },
  { name: "Medical Device Maintenance & Calibration", href: "services/ophthalmic-equipment-services", icon: <Wrench /> },
  { name: "Ophthalmology Equipment Services", href: "services/ophthalmic-equipment-services", icon: <Eye /> }
];

type Category = {
  count: number;
  description: string;
  id: number;
  image_url: string;
  name: string;
  parent: number;
  slug: string;
  children: [{
    count: number;
    description: string;
    id: number;
    image_url: string;
    name: string;
    parent: number;
    slug: string;
  }]
}


const navLinkBase =
  "relative px-2 py-2 text-base rounded-[50px] transition-all duration-300 " +
  "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-1 " +
  "after:h-[2px] after:w-0 after:bg-[#31487A] after:transition-all after:duration-300";
const navLinkDefault =
  "text-[#31487A] hover:bg-secondColor hover:text-[#31487A] " +
  "hover:after:w-[70%]";
const navLinkActive =
  "font-bold text-[#31487A] bg-secondColor after:w-[80%]";

function Header() {

  const burgerRef = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const serviceMegaRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const pathname = usePathname();
  const language = useCurrentLang();
  const t = useTranslations("header");

  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMegaMenuService, setShowMegaMenuService] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>()
  const [categories, setCategories] = useState<Category[]>([]);

  const getAllCategories = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/categories?hide_empty=false&orderby=count&order=DESC&limit=100&include_children=true&lang=${language}`,
        {
          method: "GET",
          headers: {
          },
        }
      );

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.message);
      }

      const result = await res.json();
      console.log(result?.data);
      setCategories(result?.data);
    } catch (error) {
      console.error("Error:", error);

    } finally {

    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaRef.current &&
        !megaRef.current.contains(event.target as Node)
      ) {
        setShowMegaMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        serviceMegaRef.current &&
        !serviceMegaRef.current.contains(event.target as Node)
      ) {
        setShowMegaMenuService(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <header className='flex justify-between py-4 px-5 lg:px-16'>
      <div><Image src="/linkiLogo.png" alt="Logo" width={100} height={50} className='object-contain' /></div>
      <nav className="flex  gap-8 items-center self-stretch my-auto min-w-10">
        <div className="lg:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            <svg width="24" height="24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div ref={burgerRef} className={`
            ${mobileOpen ? "flex " : "hidden"} lg:flex flex-col lg:flex-row gap-2 w-full lg:w-auto mx-auto  bg-white lg:bg-transparent absolute lg:static top-16 left-0 p-4 lg:p-0 shadow-lg lg:shadow-none rounded-2xl lg:rounded-none transition-all duration-500`}>
          {NAV_LINKS.map(({ key, href, icon }) => {
            const fullPath = href === "" ? `/${language}` : `/${language}/${href}`;
            const active =
              href === ""
                ? pathname === `/${language}`
                : pathname.startsWith(`/${language}/${href}`);

            if (key === "Home") {
              return (
                <div key={key} className="relative" ref={megaRef}>
                  <button
                    onClick={() => setShowMegaMenu((prev) => !prev)}
                    className={`${navLinkBase} flex gap-1 items-center ${active ? navLinkActive : navLinkDefault} cursor-pointer`}
                  >
                    {t(`${key}`)}
                    <svg className={`transition-transform duration-500 ease-in-out ${showMegaMenu ? "rotate-180" : ""
                      }`} width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.25 3.85718L7.35934 0.418977C7.56309 0.193674 7.89343 0.193674 8.09719 0.418977C8.30094 0.644279 8.30094 1.00957 8.09719 1.23487L4.61893 5.08102C4.51705 5.19367 4.38352 5.25 4.25 5.25C4.11648 5.25 3.98295 5.19367 3.88107 5.08102L0.402814 1.23487C0.199062 1.00957 0.199062 0.644279 0.402814 0.418977C0.606566 0.193674 0.936913 0.193674 1.14066 0.418977L4.25 3.85718Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
                    </svg>

                  </button>

                  {showMegaMenu && (
                    <div className=" absolute lg:absolute mt-4  w-full lg:w-225 bg-[#ffffffe6] shadow-xl rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 z-20 items-start h-auto">
                      {/* {DEPARTMENTS_LINKS.map((dept) => (
                        <Link
                          key={dept.name}
                          href={`/${language}/${dept.href}`}
                          onClick={() => {
                            setShowMegaMenu(false);
                            setMobileOpen(!mobileOpen);
                          }}
                          className="text-secondColor hover:text-white hover:bg-[#31487A] px-4 py-2 rounded-lg transition-all duration-300"
                        >
                          {dept.name}
                        </Link>
                      ))} */}

                      {categories.map((item, i) => (
                        <div key={i} className="border bg-gray--50 mx-4">
                          {/* header */}
                          <div
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="flex items-center justify-between px-4 py-4 cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-[3px] h-6 bg-sky-400" />
                              <span className={`text-sm font-medium ${openIndex === i ? "text-sky-400" : "text-gray-700"}  hover:text-sky-400`}>
                                {item.name}
                              </span>
                            </div>

                            <ChevronDown
                              className={`transition ${openIndex === i ? "rotate-180" : ""
                                }`}
                            />
                          </div>

                          {/* content */}
                          <div
                            style={{
                              height: openIndex === i ? `${contentRefs.current[i]?.scrollHeight}px` : "0px",
                            }}
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                            ref={(el: any) => (contentRefs.current[i] = el)}
                          >
                            {item.children && (
                              <div className="px-10 pb-4 text-sm text-gray-500 space-y-1">
                                {item.children.map((c, idx) => (
                                  <div key={idx} className='hover:ps-2.5 transition-all duration-300 cursor-pointer'>{c?.name}</div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            if (key === "Services") {
              return (
                <div key={key} className="relative" ref={serviceMegaRef}>
                  <button
                    onClick={() => setShowMegaMenuService((prev) => !prev)}
                    className={`${navLinkBase} flex gap-1 items-center ${active ? navLinkActive : navLinkDefault}`}
                  >{icon}
                    {t(`${key}`)}
                    <svg className={`transition-transform duration-500 ease-in-out ${showMegaMenuService ? "rotate-180" : ""
                      }`} width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.25 3.85718L7.35934 0.418977C7.56309 0.193674 7.89343 0.193674 8.09719 0.418977C8.30094 0.644279 8.30094 1.00957 8.09719 1.23487L4.61893 5.08102C4.51705 5.19367 4.38352 5.25 4.25 5.25C4.11648 5.25 3.98295 5.19367 3.88107 5.08102L0.402814 1.23487C0.199062 1.00957 0.199062 0.644279 0.402814 0.418977C0.606566 0.193674 0.936913 0.193674 1.14066 0.418977L4.25 3.85718Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
                    </svg>

                  </button>

                  {showMegaMenuService && (
                    <div className="group absolute lg:absolute mt-4 w-full lg:w-150 bg-white shadow-xl rounded-2xl p-4  z-20">
                      {SERVICES_LINKS.map((service) => (
                        <Link
                          key={service.name}
                          href={`/${language}/${service.href}`}
                          onClick={() => {
                            setMobileOpen(!mobileOpen);
                            setShowMegaMenuService(false);
                          }}
                          className="text-secondColor text-[#31487A] hover:text-white hover:bg-[#31487A] px-2 py-2 rounded-lg transition flex items-center gap-1"
                        >
                          <span>{service?.icon} </span>
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={key}
                href={fullPath}
                // className={`px-4 py-2 text-base rounded-[50px] transition-all
                // ${active
                //     ? "font-bold text-[#31487A] bg-secondColor"
                //     : "text-[#31487A] hover:bg-secondColor hover:text-[#31487A]"
                //   }`}
                className={`${navLinkBase} ${active ? navLinkActive : navLinkDefault} flex items-center gap-1`}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {/* {key === "Contact" ? <div className='flex items-center gap-1'>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1816 11.429L12.1772 9.63467L12.1661 9.62957C11.9583 9.54066 11.7315 9.50497 11.5063 9.52575C11.2812 9.54653 11.0648 9.62311 10.8767 9.74857C10.8545 9.7632 10.8333 9.77909 10.8129 9.79617L8.74402 11.5599C7.43331 10.9233 6.0801 9.58027 5.44345 8.28656L7.20976 6.18619C7.22676 6.16494 7.24291 6.14369 7.25821 6.12074C7.38097 5.93314 7.45546 5.71811 7.47503 5.49477C7.49461 5.27143 7.45867 5.04672 7.37041 4.84062V4.83042L5.57095 0.819236C5.45428 0.550008 5.25366 0.325734 4.99905 0.179892C4.74444 0.0340509 4.44949 -0.0255355 4.15824 0.0100281C3.00645 0.16159 1.94922 0.727238 1.18401 1.60132C0.418795 2.47541 -0.00207481 3.59816 7.6914e-06 4.75987C7.6914e-06 11.5089 5.49105 17 12.2401 17C13.4018 17.0021 14.5246 16.5812 15.3986 15.816C16.2727 15.0508 16.8384 13.9935 16.9899 12.8418C17.0256 12.5506 16.9661 12.2557 16.8204 12.0011C16.6747 11.7465 16.4506 11.5458 16.1816 11.429ZM12.2401 15.64C9.35549 15.6368 6.58992 14.4895 4.5502 12.4498C2.51047 10.4101 1.36317 7.64449 1.36002 4.75987C1.35682 3.92983 1.65586 3.127 2.2013 2.50132C2.74674 1.87564 3.50127 1.46989 4.32399 1.35984C4.32365 1.36323 4.32365 1.36665 4.32399 1.37004L6.109 5.36508L4.35204 7.468C4.33421 7.48852 4.31801 7.5104 4.30359 7.53345C4.17567 7.72973 4.10064 7.95573 4.08574 8.18954C4.07085 8.42335 4.11661 8.65704 4.21859 8.86796C4.98869 10.443 6.57565 12.0181 8.16772 12.7874C8.38019 12.8884 8.61523 12.9326 8.84988 12.9156C9.08453 12.8986 9.31077 12.821 9.50648 12.6905C9.5283 12.6757 9.5493 12.6599 9.56938 12.6428L11.6357 10.8799L15.6308 12.6692C15.6308 12.6692 15.6376 12.6692 15.6401 12.6692C15.5314 13.4931 15.1263 14.2491 14.5005 14.7959C13.8747 15.3427 13.0711 15.6428 12.2401 15.64Z" fill="#31487A" />
                  </svg> {t(`${key}`)}
                </div> : t(`${key}`)} */}
                {icon}
                {t(`${key}`)}

              </Link>
            );
          })}
          <div className='lg:hidden flex gap-3 justify-center items-center'>
            <div className='flex gap-2 cursor-pointer border-2 border-[#FFFFFFFF] hover:border-[#31487A] rounded-lg transition-all duration-300 px-4 py-1 '>
              <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0998 10.6458C10.0414 10.6375 9.96642 10.6375 9.89975 10.6458C8.43308 10.5958 7.26642 9.39583 7.26642 7.92083C7.26642 6.4125 8.48308 5.1875 9.99975 5.1875C11.5081 5.1875 12.7331 6.4125 12.7331 7.92083C12.7248 9.39583 11.5664 10.5958 10.0998 10.6458Z" stroke="#31487A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.6171 16.1469C14.1338 17.5052 12.1671 18.3302 10.0005 18.3302C7.83379 18.3302 5.86712 17.5052 4.38379 16.1469C4.46712 15.3635 4.96712 14.5969 5.85879 13.9969C8.14212 12.4802 11.8755 12.4802 14.1421 13.9969C15.0338 14.5969 15.5338 15.3635 15.6171 16.1469Z" stroke="#31487A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.99935 18.3385C14.6017 18.3385 18.3327 14.6076 18.3327 10.0052C18.3327 5.40284 14.6017 1.67188 9.99935 1.67188C5.39698 1.67188 1.66602 5.40284 1.66602 10.0052C1.66602 14.6076 5.39698 18.3385 9.99935 18.3385Z" stroke="#31487A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              </span>
              <span>{t("register")}</span>
            </div>
            <div className='flex gap-2 bg-[#31487A] text-white hover:border-[#31487A] hover:bg-transparent hover:text-[#31487A] border-2 border-transparent px-4 py-1 rounded-lg items-center transition-all duration-300 cursor-pointer'>
              <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41699 6.30312C7.67533 3.30312 9.21699 2.07812 12.592 2.07812H12.7003C16.4253 2.07812 17.917 3.56979 17.917 7.29479V12.7281C17.917 16.4531 16.4253 17.9448 12.7003 17.9448H12.592C9.24199 17.9448 7.70033 16.7365 7.42533 13.7865" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.66699 10H12.4003" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.542 7.20312L13.3337 9.99479L10.542 12.7865" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              </span>
              <span className=''>{t("signin")}</span>
            </div>
          </div>
        </div>
      </nav>
      <div className='flex gap-3'>
        <div className='flex justify-center items-center gap-2'>
          <div className='bg-[#F0F2F6] hover:bg-[#F0F2E1] cursor-pointer rounded-lg p-2'><svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.85 15.7583C9.56667 15.8583 9.1 15.8583 8.81667 15.7583C6.4 14.9333 1 11.4917 1 5.65833C1 3.08333 3.075 1 5.63333 1C7.15 1 8.49167 1.73333 9.33333 2.86667C10.175 1.73333 11.525 1 13.0333 1C15.5917 1 17.6667 3.08333 17.6667 5.65833C17.6667 11.4917 12.2667 14.9333 9.85 15.7583Z" stroke="#31487A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          </div>
          <div className='bg-[#F0F2F6] hover:bg-[#F0F2E1] cursor-pointer rounded-lg p-2'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1741_28357)">
              <path d="M0.90918 2.50025H2.90918C3.11933 2.49554 3.32476 2.55774 3.49051 2.67625C3.65626 2.79476 3.77209 2.96226 3.81827 3.15025L6.20009 12.6836C6.24627 12.8716 6.3621 13.0391 6.52785 13.1576C6.6936 13.2761 6.89903 13.3383 7.10918 13.3336H14.7637C14.9714 13.3391 15.1749 13.2793 15.3403 13.1641C15.5057 13.0488 15.623 12.8851 15.6728 12.7002L17.2728 6.66692" stroke="#31487A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.6362 6.67187H8.18164M10.9089 4.17188V9.17187V4.17188Z" stroke="#31487A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.13672 17.0781H8.22763" stroke="#31487A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.5908 17.0781H13.6817" stroke="#31487A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1741_28357">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </div>
        </div>
        <div className='hidden lg:flex gap-3 justify-center items-center'>
          <div className='flex gap-2 cursor-pointer border-2 border-[#FFFFFFFF] hover:border-[#31487A] rounded-lg transition-all duration-300 px-4 py-1 '>
            <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0998 10.6458C10.0414 10.6375 9.96642 10.6375 9.89975 10.6458C8.43308 10.5958 7.26642 9.39583 7.26642 7.92083C7.26642 6.4125 8.48308 5.1875 9.99975 5.1875C11.5081 5.1875 12.7331 6.4125 12.7331 7.92083C12.7248 9.39583 11.5664 10.5958 10.0998 10.6458Z" stroke="#31487A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.6171 16.1469C14.1338 17.5052 12.1671 18.3302 10.0005 18.3302C7.83379 18.3302 5.86712 17.5052 4.38379 16.1469C4.46712 15.3635 4.96712 14.5969 5.85879 13.9969C8.14212 12.4802 11.8755 12.4802 14.1421 13.9969C15.0338 14.5969 15.5338 15.3635 15.6171 16.1469Z" stroke="#31487A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.99935 18.3385C14.6017 18.3385 18.3327 14.6076 18.3327 10.0052C18.3327 5.40284 14.6017 1.67188 9.99935 1.67188C5.39698 1.67188 1.66602 5.40284 1.66602 10.0052C1.66602 14.6076 5.39698 18.3385 9.99935 18.3385Z" stroke="#31487A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </span>
            <span>{t("register")}</span>
          </div>
          <div className='flex gap-2 bg-[#31487A] text-white hover:border-[#31487A] hover:bg-transparent hover:text-[#31487A] border-2 border-transparent px-4 py-1 rounded-lg items-center transition-all duration-300 cursor-pointer'>
            <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41699 6.30312C7.67533 3.30312 9.21699 2.07812 12.592 2.07812H12.7003C16.4253 2.07812 17.917 3.56979 17.917 7.29479V12.7281C17.917 16.4531 16.4253 17.9448 12.7003 17.9448H12.592C9.24199 17.9448 7.70033 16.7365 7.42533 13.7865" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1.66699 10H12.4003" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.542 7.20312L13.3337 9.99479L10.542 12.7865" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </span>
            <span className=''>{t("signin")}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
