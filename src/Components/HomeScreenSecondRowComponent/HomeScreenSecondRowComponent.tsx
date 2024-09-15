import React, { FC } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import HttpIcon from '@mui/icons-material/Http';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';


interface HomeScreenSecondRowComponentProps {
    styles: any;
}

const HomeScreenSecondRowComponent: FC<HomeScreenSecondRowComponentProps> = props => {

const {
    styles
} = props;


    return(
    <>
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                 <div>
                    <text className={styles.titleText}>Solutions
                    <ImportantDevicesIcon fontSize={"large"} sx={{color: "green", marginLeft: 1}}/>
                    </text>
                 </div>
                 <div className={styles.titleContainer}>
                    <text className={styles.titleText}>Websites
                    <HttpIcon fontSize={"large"} sx={{color: "green", marginLeft: 1}}/>
                    </text>
                 </div>
                 <div className={styles.titleContainer}>
                    <text className={styles.titleText}>Mobile
                    <SystemSecurityUpdateGoodIcon fontSize={"large"} sx={{color: "green", marginLeft: 1}}/>
                    </text>
                 </div>
                </div>
                <br></br>
                <div className={styles.subTitleTextContainer}>
                    <text className={styles.subTitleText}>We offer the very best of the industry standards</text>
                </div>
                <div className={styles.serviceContainer}>
                     <div className={styles.service}>
                        <LanguageIcon fontSize={"large"} sx={{color: "#FFF"}}/>
                        <text className={styles.seviceText}>Website to promote your new company ?</text>
                     </div>
                       
                    <div className={styles.service}>
                        <MobileFriendlyIcon fontSize={"large"} sx={{color: "#FFF"}}/>
                        <text className={styles.seviceText}>Mobile applications needed to run a smoother operation ?</text>
                    </div>
                    <div className={styles.service}>
                        <PhonelinkIcon fontSize={"large"} sx={{color: "#FFF"}}/>
                        <text className={styles.seviceText}>ICT and Development operations to solve your business needs.</text>
                    </div>
                    <div className={styles.service}>
                        <PhonelinkIcon fontSize={"large"} sx={{color: "#FFF"}}/>
                        <text className={styles.seviceText}>E-commerce websites to bring your store online.</text>
                    </div>
                </div>
                <br></br>
                <div>
              
                </div>
            </div>
        </div>
    </>
    )
}

export default HomeScreenSecondRowComponent;