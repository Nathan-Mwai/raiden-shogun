import React from 'react'
import {Badge} from "@/components/ui/badge";
import Gradient from "@/components/Gradient";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
    return (
        <section id="hero" className={'w-full h-fit pt-[140] bg-background-secondary-DEFAULT rounded-b-4xl overflow-hidden'}>
            <Gradient dr={'b'}>
                <div>
                    <div className={'w-full h-fit flex flex-col justify-center items-center gap-[40px]'}>
                        <div className={'w-full h-[344px] flex flex-col gap-[24px] '}>
                            <div className={'flex flex-col gap-[16px] w-full items-center justify-center h-fit'}>
                            <Badge className={'uppercase bg-secondary-DEFAULT'}>Trusted by more than 100,000+ users.</Badge>
                                <h1 >Silence the noise<br/> Find Your Peace </h1>
                                <p>Short, simple meditations to help you reset, unwind, and feel present—whenever you need a break.</p>
                            </div>
                        </div>
                        <div className={'w-full flex flex-row justify-center items-center gap-[12px]'}>
                            <Button className={'rounded-full bg-primary-DEFAULT'}>
                            <a href="#cta">Get Started</a>
                            </Button>
                        </div>
                        <div className={'w-full flex flex-row justify-center items-center gap-[10px] overflow-hidden'}>
                            <Image src={'/raiden-2.png'} alt={"Raiden Shogun photo"}width={1200} height={760} />
                        </div>
                    </div>
                </div>
            </Gradient>
        </section>
    )
}
export default Hero
