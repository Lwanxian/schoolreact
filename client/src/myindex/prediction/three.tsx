import React,{useContext} from "react";
import {ThemeContext} from "../../mycontext/context";

function Three(){
    const resdata = useContext(ThemeContext);
  
    
    return(
        
            <div className="toshowdays">
                <ul>
                    <li>今天</li>
                    <li>{resdata.result.future[0].weather}</li>
                    <li>{resdata.result.future[0].temperature}</li>
                    <li>{resdata.result.future[0].direct}</li>
                    
                </ul>
                <ul>
                    <li>明天</li>
                    <li>{resdata.result.future[1].weather}</li>
                    <li>{resdata.result.future[1].temperature}</li>
                    <li>{resdata.result.future[1].direct}</li>
                    
                </ul>
                <ul>
                    <li>后天</li>
                    <li>{resdata.result.future[2].weather}</li>
                    <li>{resdata.result.future[2].temperature}</li>
                    <li>{resdata.result.future[2].direct}</li>
                    
                </ul>
            </div>
      
    )
}
export {Three}