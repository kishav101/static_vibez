import { keyframes, tss } from "tss-react";

const rotate = keyframes`
0% {
    background-position: -200% 0;
  }
100% {
    background-position: 200% 0;
  }
`;


const LandingServicesStyles = tss.create(({  }) => ({
    root: {
        position: 'relative'
    },
  
}));

export default LandingServicesStyles;