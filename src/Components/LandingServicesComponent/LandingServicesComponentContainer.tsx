import { memo, useEffect, useState } from "react";
import LandingImageComponent from "./LandingServicesComponent";
import LandingImageStyles from "./LandingServicesStyles";
import { LandingPageData } from "../../DataSource/HomePageData/LandingPageData";
import LandingServicesComponent from "./LandingServicesComponent";
import LandingServicesStyles from "./LandingServicesStyles";


interface LandingServicesComponentContainerProps{

}

const data = LandingPageData;

const LandingServicesComponentContainer: React.FC<LandingServicesComponentContainerProps> = props => {

    const {

    } = props;

    const { classes } = LandingServicesStyles();

    return(
    <>
      <LandingServicesComponent styles={classes}/>
    </>
    )
}

export default memo(LandingServicesComponentContainer);