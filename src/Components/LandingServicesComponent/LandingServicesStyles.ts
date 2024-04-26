import { keyframes, tss } from "tss-react";


const LandingServicesStyles = tss.create(({  }) => ({
    root: {
       display: 'flex',
       flexDirection: 'row',
       width: '100%',
       flexWrap: 'wrap',
    },
    containerLeft: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "3%",
        paddingRight: "5%",
        flexDirection: 'column',
        backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
    },
    containerRight: {
        flex: 1,
    },
    textRowOne: {
        textAlign: 'start',
        justifyContent: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'Tahoma',
        color: "#FFF"
    },
    textRowTwo: {
        textAlign: 'start',
        justifyContent: 'center',
        fontSize: 20,
        fontFamily: 'Tahoma',
        color: "#FFF"
    },
    textRowThree: {
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Tahoma',
        color: "#FFF"
    },
    featureContainer: {
        display: 'flex',
        flexDirection: "row",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        padding: "5%",
        columnGap: 35,
    },
    features: {
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Tahoma',
        color: "#FFF",
        fontStyle: 'italic',
    },
    ExploreBtnContainer: {
        paddingTop: "2%",
     
    },
    ExploreBtn: {
        display: "flex",
        alignItems : 'center',
        backgroundColor: "transparent",
        border: "1px solid #FFF",
        padding: "3%",
        color: "#FFF",
        cursor: 'pointer',
        transition: "0.3s ease",
        "&:Hover": {
            transform: "translateY(-5px)"
        },
        gap: 20,
        animation: "featureAnimation 2s linear infinite",
        "@keyframes featureAnimation": {
            "0%": {
              transform: "translateY(0px)"
            },
            "25%": {
                transform: "translateY(-1px)"
            },
            "50%": {
                transform: "translateY(-2px)"
            },
            "75%": {
                transform: "translateY(-3px)"
            },
            "100%": {
                transform: "translateY(2px)"
            },
        },
    },
    serviceBoxIconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
       
    },
    serviceBoxIcon: {
        position: 'relative',
        top: -80,
        padding: "6%",
        backgroundColor: "#FFF",
        borderColor: "#FFF",
        color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
        border: `4px solid ${process.env.REACT_APP_CLIENT_SECONDARY_COLOUR}`
    },
    serviceIcon: {
        fontWeight: 'bold'
    },
    cardContainer: {
        paddingLeft: "5%",
        paddingRight: "5%",
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: -50
    },
    serviceCardContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    serviceTextTitle: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '250',
        fontFamily: 'sans-serif',
        color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
    },
    serviceTextDescription: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'sans-serif',
    },
    serviceTextDescriptionTwo: {
        fontSize: 16,
        fontWeight: '50',
        fontFamily: 'Tahoma'
    },
    serviceTextPriceDescription: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
    },
    pricingDescriptionText: {
        display: 'flex',
        flexDirection: 'column',
    },
    priceText: {
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'cursive',
        color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
    }
}));

export default LandingServicesStyles;