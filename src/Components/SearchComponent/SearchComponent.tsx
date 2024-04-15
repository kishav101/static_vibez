import { memo } from "react";
import SearchStyles from "./SearchComponentStyles";
import { FaSearch } from 'react-icons/fa';

interface SearchComponentProps{
    width: number;
    register: any;
}

const SearchComponent: React.FC<SearchComponentProps> = props =>{

    const{
        width,
        register
    } = props;

    const { classes } = SearchStyles({
        width: width
    });

    return(
        <>
            <div className={classes.root}>
                <input {...register("SearchText")} className={classes.inputContainer} inputMode="search" placeholder="Search..." />
                <FaSearch size={20} className={classes.iconStyle} />
            </div>
        </>
    )
}

export default memo(SearchComponent)