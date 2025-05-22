import React from 'react'
import Image from "next/image";
import {Button} from "@/components/ui/button";

const Navbar = () => {
    return (
        <>
            <nav className={'w-full fixed h-[66px] flex flex-row justify-center items-center px-[40px]'}>
            <div className={'w-full relative h-fit flex flex-row relative justify-between items-center'}>

                <a href="#hero" className={'w-fit scroll-smooth h-[52px] flex flex-row justify-start items-center gap-[10px] py-[12px] px-[20px] rounded-[478px]'}>
                <Image src={'/Raiden logo.webp'} alt={'Logo'} width={73} height={18} />
                </a>

                <div className={'flex flex-row w-fit h-[52px] justify-center items-center gap-[12px] py-[12px] px-[20px] rounded-[684px] z-10 bg-white'}>
                    <Button
                        variant={"ghost"}
                        className={'w-[100px] scroll-smooth gap-[10px] h-[40px]'}>
                        <a href={'#features'}>Features</a>
                    </Button>
                    <Button
                        variant={"ghost"}
                        className={'w-[100px] scroll-smooth gap-[10px] h-[40px]'}>
                        <a href={'#testimonial'}>Testimonials</a>
                    </Button><Button
                        variant={"ghost"}
                        className={'w-[100px] scroll-smooth gap-[10px] h-[40px]'}>
                        <a href={'#how-it-works'}>How It Works</a>
                    </Button><Button
                        variant={"ghost"}
                        className={'w-[100px] scroll-smooth gap-[10px] h-[40px]'}>
                        <a href={'#pricing'}>Pricing</a>
                    </Button><Button
                        variant={"ghost"}
                        className={'w-[100px] scroll-smooth gap-[10px] h-[40px]'}>
                        <a href={'#blog'}>Blog</a>
                    </Button>
                </div>
                <div>
                    <Button
                        className={'w-[100px] gap-[10px] bg-background-secondary-DEFAULT border border-white drop-shadow-lg h-[40px]'}>
                            <a href={'#blog'} className={'text-black'}>Shout Out?</a>
                    </Button>
                </div>
            </div>
            </nav>
        </>
    )
}
export default Navbar
