import { memo, useEffect } from "react";
import LandingWallpaper from "../../Assets/Images/LandingWallpaper.jpg"
import { LandingPageData } from "../../DataSource/HomePageData/LandingPageData";
import { QuoteButtonComponentContainer } from "../QuoteButtonComponent";

interface LandingImageComponentProps{
    styles: any;
    SloganTextAnimation: any,
    DescriptionTextAnimation: any
}

const LandingImageComponent: React.FC<LandingImageComponentProps> = props => {

    const {
        styles,
        SloganTextAnimation,
        DescriptionTextAnimation
    } = props;

    let vl;

    setInterval(() => {console.log("5")}, 500)
    return(
    <>
         <div className={styles.root}>
            <div className={styles.imageOverlay}>
                <div style={{marginLeft: "3%"}}>
                 <div className={styles.titleContainer}>
                    <p className={styles.title}>{LandingPageData.Title.substring(0, LandingPageData.Title.indexOf(" "))}</p>
                    <p className={styles.titleSecondWord}>{LandingPageData.Title.substring(LandingPageData.Title.indexOf(" "))}</p>
                </div>
               
                <p className={styles.slogan}>
                  {
                   SloganTextAnimation
                  }
                </p>
                <p className={styles.description}>
                    { 
                        DescriptionTextAnimation
                    }
                </p>
                <div>
                 <QuoteButtonComponentContainer />
                </div>
                </div>
            </div>
            
          <img className={styles.image} src={LandingWallpaper}></img>
        </div>
    </>
    )
}

export default memo(LandingImageComponent);