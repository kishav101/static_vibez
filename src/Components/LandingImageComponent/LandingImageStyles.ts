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
        position: 'relative'
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
        height: 600,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
    color: "#fff", 
    fontFamily: 'Tahoma',
    fontSize: 48,
    padding: 0,
    fontWeight:'bolder',
    marginLeft: 2
    
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
    fontSize: 18,
    fontFamily: 'Tahoma',
},
description: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    flexWrap: 'wrap',
    color: "#806f75",
    width: "30%",
    fontStyle: "italic"
}
    
}));

export default LandingImageStyles;