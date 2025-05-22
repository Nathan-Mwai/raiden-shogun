import React from 'react'
import Image from "next/image";

const Icon = ({icon1,icon2,icon3}:{
    icon1?: boolean,
    icon2?: boolean,
    icon3?: boolean,
}) => {
    return (
        <>
            {icon1 && (
        <Image alt={'add'} src="/add.svg" width={40} height={40} className={'bg-background-secondary-DEFAULT'} />
            )}
            {icon2 && (
        <Image alt={'add'} src="/add_1.svg" width={40} height={40} className={'bg-primary-DEFAULT'} />
            )}
            {icon3 && (
        <Image alt={'add'} src="/remove.svg" width={40} height={40} className={'bg-primary-DEFAULT'} />
            )}
        </>
    )
}
export default Icon
