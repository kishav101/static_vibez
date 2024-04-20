import { memo, useEffect } from "react";

interface LandingServicesComponentProps{
    styles?: any;
   
}

const LandingServicesComponent: React.FC<LandingServicesComponentProps> = props => {

    const {
        styles,
      
    } = props;


    return(
    <>
         <div className={styles.root}>
           
        </div>
    </>
    )
}

export default memo(LandingServicesComponent);