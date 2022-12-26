import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Construction } from "@mui/icons-material";

// implement the class below
class Carousel extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    front(){
        if(this.state.count===2){
        this.setState({count: 0})
        }
        else{
            this.setState({count: this.state.count+1})
        }
    }
    back(){
        if(this.state.count===0)
        this.setState({count: 2})
        else
        this.setState({count: this.state.count-1})
    }
    render(){
        return(
    <div className="container">
    <ArrowBackIosIcon onClick={()=>this.back()} className="arrowback"/>
    <div className="imgCard">
        <h2>{images[this.state.count].title}</h2>
        <h2>{images[this.state.count].subtitle}</h2>
        <img src={images[this.state.count].img} alt="" />
    </div>
    <ArrowForwardIosIcon onClick={()=>this.front()} className="arrowfront"/>
    </div>
        )
    }

}

export default Carousel;