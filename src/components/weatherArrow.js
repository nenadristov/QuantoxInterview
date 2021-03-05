import{ BsArrowUp, BsArrowDown, BsArrowLeft, BsArrowRight, BsArrowUpRight, BsArrowUpLeft, BsArrowDownLeft, BsArrowDownRight} from "react-icons/bs";

export default function WeatherArrow(props){
    switch(props.direction){

        case 'north': 
            return <span className="ikona-veter"><BsArrowUp/></span>
        
        case 'south': 
            return <span className="ikona-veter"><BsArrowDown/></span>
        
        case 'east':
            return <span className="ikona-veter"><BsArrowLeft/></span>
        
        case 'west':
            return <span className="ikona-veter"><BsArrowRight/></span>
        
        case 'north-east':
            return <span className="ikona-veter"><BsArrowUpRight/></span>

        case 'north-west':
            return <span className="ikona-veter"><BsArrowUpLeft/></span>
        
        case 'south-west':
            return <span className="ikona-veter"><BsArrowDownLeft></BsArrowDownLeft></span>

        case 'south-east':
            return <span className="ikona-veter"><BsArrowDownRight/></span>
            
            
        default:
            return null;

    }

}