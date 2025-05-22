import React from 'react'
import Icon from "@/components/Icon";

const FaqItem = () => {
    return (
        <div>
            {/*Question*/}
            <div className={'flex gap-4 justify-between'}>
                <h3>Which pricing plan is right for me?</h3>
                <Icon icon3={true}/>
            </div>
        {/*Answer*/}
            <div>
                <p className={''}>
                    You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.
                </p>
            </div>
            <div className={'w-full h-[0.2px] overflow-hidden bg-background-secondary-DEFAULT opacity-30'}/>
        </div>
    )
}
export default FaqItem
