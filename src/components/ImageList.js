import React from "react";

const ImageList = (props)=>{
    const images= props.images.map((image)=>{
        return <div><img className="ui centered medium image" key={image.id} src={image.webformatURL} alt=""/><br/></div>
    })
    return(
        <div>
            {images}
        </div>
    )
}
export default ImageList;