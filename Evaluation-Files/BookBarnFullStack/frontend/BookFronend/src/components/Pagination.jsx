export default function Pagination({page,totalPages,onchange}){
    const prev=()=>onchange(Math.max(1,page-1));
    return(
        <div className="pagination">
            <button onClick={prev} disabled={page<=1} >Prev</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={next} disabled={page>=totalPages}>Next</button>
        </div>
    )
}