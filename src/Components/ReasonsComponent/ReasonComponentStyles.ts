import { tss } from "tss-react";


const ReasonComponentStyles = tss.withParams<{
    color1: String,
    color2: String,
    backgroundColorOne: String
    color3: String,
    color4: String,
    backgroundColorTwo: String,
    backgroundColorThree: String,
    color5: String,
    color6: String
}>().create(({ color1, color2, backgroundColorOne, backgroundColorTwo, color3, color4, backgroundColorThree, color5, color6 }) => ({
    root: {
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center'

    },
    reasonContainer: {
        display: 'flex',
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        padding: "20px",
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: "wrap",

    },
    column: {
        flex: 1,
    },
    columnContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleOne: {
        backgroundColor: backgroundColorOne.toString(),
        height: "200px",
        width: "200px",
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        animation: "cirlceOneMove 4.5s linear infinite",
        "@keyframes cirlceOneMove": {
            "0%": {
                backgroundColor: color1.toString(),
            },
            "25%": {
                backgroundColor: color2.toString(),
            },
            "75%": {
                backgroundColor: color1.toString(),
            },
            "100%": {
                backgroundColor: color2.toString(),
            },
        }
    },
    circleTwo: {
        backgroundColor: "#fff",
        height: "150px",
        width: "150px",
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        borderStyle: 'solid',
        borderColor: color2.toString(),
        borderWidth: 10,
        animation: "cirlcetwoMove 4.5s linear infinite",
        "@keyframes cirlcetwoMove": {
            "0%": {
                borderColor: color2.toString(),
            },
            "25%": {
                borderColor: color1.toString(),
            },
            "75%": {
                borderColor: color2.toString(),
            },
            "100%": {
                borderColor: color1.toString(),
            },
        }

    },
    circleThree: {
        backgroundColor: "#lightgrey",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        borderStyle: 'solid',
        borderColor: color2.toString(),
        borderWidth: 1,

    },
    font: {
        fontSize: 32,
        fontFamily: "sans-serif",
        color: color2.toString(),
    },
    fontContext: {
        fontSize: 20,
        fontFamily: "sans-serif",
        maxWidth: "350px",
        color: "white",
    },
    fontSteps: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR
    },
    reasonFont: {
        fontSize: 27,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
    },
    textContextBox: {
        justifyContent: 'center',
        alignItems: "center",
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
        backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,  /* Light grey background */
        borderRadius: 15,        /* Curved borders */
        border: "1px solid #ccc",     /* Optional: light grey border */
        maxWidth: 400,           /* Optional: set a max width */
        margin: "20px auto",          /* Center the container */
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"
    },
    bottomArrowRight: {
        position: 'relative',
        left: -165,
        color: "fff",
    },

    circleOneColTwo: {
        backgroundColor: backgroundColorTwo.toString(),
        height: "200px",
        width: "200px",
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        animation: "cirlceOnetMove 4.5s linear infinite",
        "@keyframes cirlceOnetMove": {
            "0%": {
                backgroundColor: color3.toString(),
            },
            "25%": {
                backgroundColor: color4.toString(),
            },
            "75%": {
                backgroundColor: color3.toString(),
            },
            "100%": {
                backgroundColor: color4.toString(),
            },
        }
    },
    circleTwoColTwo: {
        backgroundColor: "#fff",
        height: "150px",
        width: "150px",
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        borderStyle: 'solid',
        borderColor: color4.toString(),
        borderWidth: 10,
        animation: "cirlcetwotMove 4.5s linear infinite",
        "@keyframes cirlcetwotMove": {
            "0%": {
                borderColor: color4.toString(),
            },
            "25%": {
                borderColor: color3.toString(),
            },
            "75%": {
                borderColor: color4.toString(),
            },
            "100%": {
                borderColor: color3.toString(),
            },
        }

    },
    circleThreeColTwo: {
        backgroundColor: "#lightgrey",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        borderStyle: 'solid',
        borderColor: color4.toString(),
        borderWidth: 1,

    },
    fontColTwo: {
        fontSize: 32,
        fontFamily: "sans-serif",
        color: color4.toString(),
    },

    circleOneColThree: {
        backgroundColor: backgroundColorThree.toString(),
        height: "200px",
        width: "200px",
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        animation: "cirlceOnethMove 4.5s linear infinite",
        "@keyframes cirlceOnethMove": {
            "0%": {
                backgroundColor: color5.toString(),
            },
            "25%": {
                backgroundColor: color6.toString(),
            },
            "75%": {
                backgroundColor: color5.toString(),
            },
            "100%": {
                backgroundColor: color6.toString(),
            },
        }
    },
    circleTwoColThree: {
        backgroundColor: "#fff",
        height: "150px",
        width: "150px",
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        borderStyle: 'solid',
        borderColor: color4.toString(),
        borderWidth: 10,
        animation: "cirlcetwothMove 4.5s linear infinite",
        "@keyframes cirlcetwothMove": {
            "0%": {
                borderColor: color6.toString(),
            },
            "25%": {
                borderColor: color5.toString(),
            },
            "75%": {
                borderColor: color6.toString(),
            },
            "100%": {
                borderColor: color5.toString(),
            },
        }

    },
    circleThreeColThree: {
        backgroundColor: "#lightgrey",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        borderStyle: 'solid',
        borderColor: color6.toString(),
        borderWidth: 1,

    },
    fontColColThree: {
        fontSize: 32,
        fontFamily: "sans-serif",
        color: color6.toString(),
    },

}));

export default ReasonComponentStyles;
