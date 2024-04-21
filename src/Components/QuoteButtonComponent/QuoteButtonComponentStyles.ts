import { tss } from "tss-react";


const QuoteButtonComponentStyles = tss.withParams<{}>().create(({ }) => ({
    root: {
        flexDirection: 'column',
        marginTop: "5%",
        "@media (max-width: 768px)": {
            marginTop: "10%"
        },
    },
    inputBtn: {
        marginTop: "2%",
        backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
        padding: 20,
        width: "20%",
        border: "none",
        color: '#FFF',
        fontWeight: 'bold',
        fontFamily: "tahoma",
        transition: "0.3s ease",
        "&:hover": { // corrected typo here
            transform: 'translateY(-5px)',
            cursor: 'pointer',
            boxShadow: '0 4px 0px #FFF'

        },
        fontSize: 16,
        "@media (max-width: 768px)": {
            width: '40%'
        },
        alignItems: 'center',
        display: 'flex',
        
    },
    downArrowIconContainer: {
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 5,
        padding: 0,
        color: "#FFF",
        animation: "waveTranslate 3.5s linear infinite",
        "@keyframes waveTranslate": {
            "0%": {
                transform: "translateX(0px)",
            },
            "25%": {
                transform: "translateX(90px)",
            },
            "75%": {
                transform: "translateX(180px)",
                color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
            },
            "100%": {
                transform: "translateX(0px)",
                color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
            },
        },
    },
    innBtnIcon: {
        color: "#FFF",
        display: 'flex',
        marginLeft: "30%"
    }
}));

export default QuoteButtonComponentStyles;
