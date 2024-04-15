import { tss } from "tss-react";

const SearchStyles = tss.withParams<{
    width: number
}>().create(({width}) => ({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
    },
    inputContainer: {
        padding: 12,
        width: width,
        cursor: "text",
        border: ` 2px solid rgba(0, 0, 0, 0.1)`,
        boxShadow: '0 0px 1px rgba(0, 0, 0, 0.1)',
        transition: "0.3s ease",
       ":focus":{
        outlineColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
        padding: 18,
        boxShadow: '0 4px 5px rgba(0, 0, 0, 0.1)',
       }
    },
    iconStyle: {
        color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
        right: 15,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    }
}));

export default SearchStyles;