import Data from './Data'
import BrochureItem from './BrochureItem';


import React, {useState} from 'react'
import Filter from '../filter/Filter';

function BrochureList() {
    const [filters, setFilters] = useState([]);
    const [items, setitems] = useState([]);

    function onTrigger(options) {
        console.log(options, "parent")
        setFilters(options)

        filterItems()

    }

    function isShownByCompany(item, filters){
        const companyFilters =  filters.filter((filter) => filter.group === "company").map(filter => filter.value);
        console.log(item.company)
        console.log(companyFilters, "companyFilters")
        if (!companyFilters.length) return true;
        return companyFilters.some((filter) => filter === item.company)
    }

    function isShownByType(item, filters){
        const typeFilters =  filters.filter((filter) => filter.group === "type").map(filter => filter.value);
        if (!typeFilters.length) return true;
        return typeFilters.some((filter) => (filter === item.type1 || filter === item.type2) )
    }

    function filterItems(){
        
        return Data.filter((item) => {
                const showByCompany = isShownByCompany(item,filters);
                const showByType = isShownByType(item,filters);
                console.log(showByCompany, "showByCompany")
                return showByCompany && showByType; }
        )    
    }


    return (
        <>
            <Filter callback={onTrigger} />
            {filterItems().map((item => <BrochureItem key={item.id} item={item} />))}
        </>
    )
}

export default BrochureList
