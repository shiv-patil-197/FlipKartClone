import { IoChevronForward } from "react-icons/io5";

import InnerSubCategory from "./InnerSubCategory";
function Subcategory({category}) {
console.log(category);
    return (
        <ul className="subnav" >
            {category.map(({name,subCat}) => {
              let  subcatLen=subCat.length;
                return <a to="">
                    <div id="list"><li>{name}</li>{(subcatLen>0) && <i id="side"><IoChevronForward /></i>}</div>
                    {(subcatLen>0) && <InnerSubCategory innercategory={subCat} name={name}/>}    
                </a>
            })}
        </ul>
    )
}
export default Subcategory 


