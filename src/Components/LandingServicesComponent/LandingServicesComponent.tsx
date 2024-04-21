import { memo, useEffect } from "react";

interface LandingServicesComponentProps{
    styles?: any;
    data: any
}

const LandingServicesComponent: React.FC<LandingServicesComponentProps> = props => {

    const {
        styles,
        data
    } = props;


    return(
    <>
         <div className={styles.root}>
           <div className={styles.containerLeft}>
            <text className={styles.textRowOne}>{data.title}</text>
           </div>
           <div className={styles.containerRight}>
            <h4>ddddddd</h4>
           </div>
        </div>
    </>
    )
}

export default memo(LandingServicesComponent);