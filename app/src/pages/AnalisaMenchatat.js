import React,{createRef} from 'react'
import Pdf from "react-to-pdf";

const ref = createRef();



const AnalisaMenchatat = () => {
    return (
        <div>
            <center>
            <Pdf targetRef={ref} filename="code-example.pdf" x={10} y={1} >
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
            </center>
      <div ref={ref} style={{marginLeft:"20rem"}}>
      <div  >
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
            AnalisaMenchatat
      </div>
      </div>
        </div>
    )
}

export default AnalisaMenchatat
