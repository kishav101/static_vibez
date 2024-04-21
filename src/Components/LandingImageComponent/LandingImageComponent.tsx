import { memo, useEffect } from "react";
import LandingWallpaper from "../../Assets/Images/LandingWallpaper.jpg"
import { LandingPageData } from "../../DataSource/HomePageData/LandingPageData";
import { QuoteButtonComponentContainer } from "../QuoteButtonComponent";

interface LandingImageComponentProps{
    styles: any;
    SloganTextAnimation: any,
    DescriptionTextAnimation: any;
    windowSize: any;
}

const LandingImageComponent: React.FC<LandingImageComponentProps> = props => {

    const {
        styles,
        SloganTextAnimation,
        DescriptionTextAnimation,
        windowSize
    } = props;

    let vl;

    return(
    <>
         <div className={styles.root}>
            <div className={styles.imageOverlay}>
                <div style={{marginLeft: "3%"}}>
                 <div className={styles.titleContainer}>
                    <p className={styles.titleFirstCharacter}>{LandingPageData.Title.substring(0, 1)}</p>
                    <p className={styles.title}>{LandingPageData.Title.substring(1, LandingPageData.Title.indexOf(" "))}</p>
                    <p className={styles.titleSecondWord}>{LandingPageData.Title.substring(LandingPageData.Title.indexOf(" "))}</p>
                </div>
                <p className={styles.slogan}>
                  {
                   SloganTextAnimation
                  }
                </p>
              
                {
                    windowSize.width > 768 && <p className={styles.description}>
                    { 
                        DescriptionTextAnimation
                    }
                </p>
                }
             
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