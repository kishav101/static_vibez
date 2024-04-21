import { keyframes, tss } from "tss-react";

const rotate = keyframes`
0% {
    background-position: -200% 0;
  }
100% {
    background-position: 200% 0;
  }
`;


const LandingImageStyles = tss.create(({  }) => ({
    root: {
        position: 'relative',
    },
    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    image:{
        width: "100%",
        height: 'auto',
        maxHeight: 600,
        "@media(max-width: 800px)": {
            height: 500,
        }
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleFirstCharacter: {
        color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR, 
        position: 'absolute',
        fontFamily: 'Tahoma',
        fontSize: 55,
        padding: 0,
        fontWeight:'bold',
        animation: "firstLetter 2s linear infinite",
        "@keyframes firstLetter": {
            "0%": {
                transform: "rotate(0deg)",
                scale: 10,
            },
            "25%": {
                transform: "rotate(10deg)",
                scale: 10,
                fontSize: 85,
            },
            "75%": {
                transform: "rotate(-20deg)",
                scale: 15,
                color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
            },
            "100%": {
                transform: "rotate(0deg)",
                scale: 30,
                color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
            },
        },
    },

    title: {
    color: "#fff", 
    fontFamily: 'Tahoma',
    fontSize: 48,
    padding: 0,
    fontWeight:'bolder',
    marginLeft: '3%',
    flexWrap: 'wrap'
    
},
titleSecondWord: {
    color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR, 
    fontFamily: 'Tahoma',
    fontSize: 48,
    padding: 0,
    fontWeight:'bolder',
    marginLeft: '1.5%',
},
slogan: {
    width: "50%",
    flexWrap: 'wrap',
    color: "#FFF",
    fontSize: 16,
    fontFamily: 'Tahoma',
},
description: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    flexWrap: 'wrap',
    color: "#806f75",
    width: "30%",
    fontStyle: "italic",
    "@media(max-width: 768px)": {
        visibility: 'hidden'
    }
}
    
}));

export default LandingImageStyles;