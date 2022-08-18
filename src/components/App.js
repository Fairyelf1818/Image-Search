import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";

class App extends React.Component{
    state = { images: []}
    onSearchSubmit=async(entry)=>{
        const response = await axios.get(`https://pixabay.com/api/?key=29366542-d9c5e21a17630cabe99aca040&q=${entry}&image_type=photo`)
        console.log(this)
        this.setState({images:response.data.hits})
    }
    render(){
        return(
        <div className="ui container" style={{marginTop:'30px'}}>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
        </div>
    )
    }
    //Currently at "Setting The State in React JS"
}

export default App;