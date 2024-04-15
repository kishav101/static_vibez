import { memo } from "react";
import SearchComponent from "./SearchComponent";
import { useForm } from "react-hook-form";
import { ISearchForm } from "./ISearchForm";

interface SearchComponentContainerProps{
    width: number;
}

const SearchComponentContainer: React.FC<SearchComponentContainerProps> = props =>{

    const{
        width
    } = props;

    const { register, handleSubmit} = useForm<ISearchForm>()

    return(
        <>
            <SearchComponent width={width} register={register}/>
        </>
    )
}

export default memo(SearchComponentContainer)