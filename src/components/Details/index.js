import React from "react";

function Details(props) {
return <div>Details/{props.match.params.project}</div>
}
export default Details;