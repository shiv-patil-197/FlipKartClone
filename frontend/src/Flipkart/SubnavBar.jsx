import { Fragment } from "react"

function SubnavBar({ category }) {
    return (
        <ul className="subnav" >
            {category.map((c,index) => {
                return <a key={index} href=""><li>{c}</li></a>
                // return <li><a href="#">{c}</a></li>
            })}
        </ul>
    )
}
export default SubnavBar    