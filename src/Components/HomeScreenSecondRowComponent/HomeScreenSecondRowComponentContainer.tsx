import React, { FC } from "react";
import HomeScreenSecondRowStyles from "./HomeScreenSecondRowComponentStyles";
import HomeScreenSecondRowComponent from "./HomeScreenSecondRowComponent";

interface HomeScreenSecondRowComponentContainerProps {

}

const HomeScreenSecondRowComponentContainer: FC<HomeScreenSecondRowComponentContainerProps> = props => {

const {

} = props;

const { classes } = HomeScreenSecondRowStyles();

    return(
        <>
        <HomeScreenSecondRowComponent 
          styles={classes}
          />
        </>
    )
}

export default HomeScreenSecondRowComponentContainer;