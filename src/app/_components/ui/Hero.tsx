import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

type Param = {
    title?: string,
    prev?: string,
    btn?: string,
    url?: string,
    bg?: string
}
function Hero({ title, prev, btn, url, bg }: Param) {
    const t = useTranslations('AboutPage');
    return (
        <div className={`flex overflow-hidden flex-col items-center justify-center py-10 h-125 w-full max-md:max-w-full ${bg ? bg : "bg-[url('/images/default-hero.png')]"} bg-cover bg-center`}>
            {/* Hero Section */}

            <div className="flex justify-center gap-2 items-center self-center">
                <Image src="/images/logo-hero.png" alt="logo" width={100} height={50} objectFit="cover" />
            </div>
            <h2 className='text-5xl lg:text-6xl font-semibold text-center text-[#31487A] mt-16'>{title} </h2>
            <p className='text-[#31487A] px-3 lg:px-80 text-center my-6 font-medium lg:text-xl'>{prev}</p>
            {btn ?
                <Link href={`/${url}`} className="flex gap-2.5 justify-center items-center text-white hover:text-[#31487A] text-sm lg:text-lg py-2 border-2 w-36 border-primary bg-[#31487A] hover:bg-[#F0F2F6] rounded-lg cursor-pointer transition-all duration-300 mt-5">
                    {btn}
                </Link>
                : ""}
        </div>
    )
}

export default Hero
