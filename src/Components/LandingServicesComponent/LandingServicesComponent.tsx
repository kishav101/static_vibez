import { memo, useEffect } from "react";
import { FaAndroid, FaAppStoreIos, FaArrowRight, FaBlackberry, FaConnectdevelop, FaMobileAlt, FaSearch } from "react-icons/fa";

interface LandingServicesComponentProps {
    styles?: any;
    data: any
}

const LandingServicesComponent: React.FC<LandingServicesComponentProps> = props => {

    const {
        styles,
        data
    } = props;


    return (
        <>
            <div className={styles.root}>
                <div className={styles.containerLeft}>

                    <text className={styles.textRowOne}>{data.title}</text><br></br>
                    <text className={styles.textRowTwo}>{data.subTextOne}</text><br></br><br></br><br></br>
                    <div className={styles.featureContainer}>
                        {
                            data.features?.map((item: any) => (
                                <text className={styles.features}>{item?.text}</text>
                            ))
                        }
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <text className={styles.textRowTwo}>{data.subTextTwo}</text>

                    <div className={styles.ExploreBtnContainer}>
                        <button className={styles.ExploreBtn}>Explore Our Services
                            <FaArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className={styles.containerRight}>
                    <div className={styles.serviceBoxIconContainer}>
                        <div className={styles.serviceBoxIcon}>
                            <FaBlackberry size={35} className={styles.serviceIcon} />
                        </div>

                        <div className={styles.serviceBoxIcon}>
                            <FaMobileAlt size={35} />
                        </div>

                        <div className={styles.serviceBoxIcon}>
                            <FaAndroid size={35} />
                        </div>

                        <div className={styles.serviceBoxIcon}>
                            <FaAppStoreIos size={35} />
                        </div>

                    </div>
                    <div className={styles.cardContainer}>
                        <div className={styles.serviceCardContainer}>
                            <div>
                                <text className={styles.serviceTextTitle} >{data.serviceCards[0].Title}</text>
                                <br></br>
                                <text className={styles.serviceTextDescription}>{data.serviceCards[0].Description}</text>
                                <text className={styles.serviceTextDescriptionTwo}>{data.serviceCards[0].DescriptionTwo}</text>
                            </div>
                            <div>
                                 <FaMobileAlt size={350} />
                            </div>
                            <div className={styles.pricingDescriptionText}>
                                <text className={styles.serviceTextPriceDescription}>{data.serviceCards[0].PriceDescription}</text>
                                <text className={styles.priceText}>{data.serviceCards[0].Price}</text>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(LandingServicesComponent);