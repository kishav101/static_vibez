import { tss } from "tss-react";

const HomeScreenSecondRowStyles = tss.withParams<{}>().create(() => ({
    root: {
        padding: "2%",
    },
    container: {
        flex: 1,
        height: "auto",
        padding: "3%",
        borderRadius: 5,
        background: `linear-gradient(30deg, ${process.env.REACT_APP_CLIENT_SECONDARY_COLOUR} 60%, #FFF 50%)`
        
    },
    topLeftBalls: {
        width: 30,
        opacity: 0.3,
        height: 30,
        borderRadius: "50%",
        marginLeft: 200,
        backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
        animation: "BallAnimation 5.5s linear infinite alternate",
        "@keyframes BallAnimation": {
            "0%": {
              transform: "translateY(30vh) translateX(150px)",
              backgroundColor: "#FFF",
            },
            "25%": {
                transform: "translateY(90px) rotateY(180deg)",
                backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
               
            },
            "50%": {
                transform: "translateY(50px) translateX(50px)",
                backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
            },
            "75%": {
                transform: "translateY(90px) translateX(80px)",
                backgroundColor: "#FFF",
            },
            "100%": {
                transform: "translateY(70px) translateX(50px)",
                backgroundColor: "#FFF",
            },
        },
    },
    titleContainer: {
        backgroundColor: "#FFF",
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 2,
        paddingRight: 2,
        borderRadius: 50,
        width: 130,
        flexDirection: 'row',
        display: 'flex',
        marginLeft: 10
    },
    titleText: {
        padding: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        fontWeight: "bold"
    },
    subTitleTextContainer: {
        marginTop: "5%",
        width: "50%"
    },
    subTitleText: {
        fontFamily: 'sans-serif',
        fontWeight: "bold",
        color: "#fff",
        fontSize: 34
    },
    serviceContainer: {
        marginTop: "4%",
        width: "50%",
    },
    seviceText: {
        color: "#fff",
        fontSize: 24,
        fontFamily: 'cursive',
        marginLeft: 10
    },
    service: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 15
    }
}));

export default HomeScreenSecondRowStyles;