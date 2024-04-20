import { memo, useEffect, useState } from "react";
import LandingImageComponent from "./LandingImageComponent";
import LandingImageStyles from "./LandingImageStyles";
import { LandingPageData } from "../../DataSource/HomePageData/LandingPageData";


interface LandingImageComponentContainerProps{

}

const data = LandingPageData;

const LandingImageComponentContainer: React.FC<LandingImageComponentContainerProps> = props => {

    const {

    } = props;

    const { classes } = LandingImageStyles();

    // const [displaySloganText, setDisplaySloganText] = useState('');
    // const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

    const [sloganState, setSloganState] = useState({
        displayText:"",
        currentIndex: 0
    });

    const [decriptionState, setDecriptionState] = useState({
        displayText:"",
        currentIndex: 0
    });

    const [currentColorSloganIndex, SetcurrentColorSloganIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        SetcurrentColorSloganIndex(prevIndex => (prevIndex + 1) % data.Slogan.length);
      }, 100); // Adjust the interval according to your preference
  
      return () => clearInterval(interval);
    }, [data.Slogan]);

   useEffect(() => {
    const timer = setTimeout(() => {
        if (sloganState.currentIndex < data.Slogan.length) {
            setSloganState(prevState => ({
                ...prevState,
                displayText: prevState.displayText + data.Slogan[sloganState.currentIndex],
                currentIndex: prevState.currentIndex + 1,
              }));
        }
      }, 20);

      return () => clearTimeout(timer);
   }, [sloganState.currentIndex])
 
   useEffect(() => {
    if(sloganState.currentIndex === data.Slogan.length) {
        const timer2 = setTimeout(() => {
            if (decriptionState.currentIndex < data.Description.length) {
                setDecriptionState(prevState => ({
                    ...prevState,
                    displayText: prevState.displayText + data.Description[decriptionState.currentIndex],
                    currentIndex: prevState.currentIndex + 1,
                  }));
            }
          }, 10);

          return () => clearTimeout(timer2);
    }
   }, [decriptionState.currentIndex, sloganState.currentIndex])

    return(
    <>
        <LandingImageComponent 
          styles={classes}
          SloganTextAnimation={sloganState.displayText}
          DescriptionTextAnimation={decriptionState.displayText}/>
    </>
    )
}

export default memo(LandingImageComponentContainer);