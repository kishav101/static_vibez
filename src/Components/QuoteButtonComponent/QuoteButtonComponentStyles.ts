import { tss } from "tss-react";

const k = `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`; 

const QuoteButtonComponentStyles = tss.withParams<{}>().create(({ }) => ({
    root: {
        flexDirection: 'column',
        marginTop: "5%",
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
        marginRight: 15,
        top: 5,
        padding: 5,
        color: "#FFF",
        animation: "waveTranslate 2s linear infinite",
        "@keyframes waveTranslate": {
            "0%": {
                transform: "translateX(0px)",
                scale: 0,
            },
            "25%": {
                transform: "translateX(90px)",
                scale: 10,
            },
            "75%": {
                transform: "translateX(180px)",
                scale: 15,
                color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
            },
            "100%": {
                transform: "translateX(270px)",
                scale: 30,
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
