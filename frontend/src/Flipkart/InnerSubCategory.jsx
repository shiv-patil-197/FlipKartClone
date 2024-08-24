function  InnerSubCategory({name, innercategory}) {
    // console.log(name);
    let i=1;
    return (
        <ul className="innersubnav">
            <a href="">
                    <div id="sublist" style={{fontWeight:"bold"}}><li>{`More in ${name}`}</li></div>
                </a>
            {innercategory.map((c) => {
                return <a href="">
                    <div id="sublist"><li>{c}</li></div>
                </a>
            })}
        </ul>
    )
}
export default InnerSubCategory

