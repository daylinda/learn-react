
function Button(){


    // let count =0;
    // const handleClick = (name) => {
    //     if (count < 3){
    //         count++;
    //         console.log("Ouch! " + count);
    //     } else {
    //         console.log("Stop it!");
    //     }
        
    // }

    // const handleClickTwo = (name) => {
    //     console.log("Stop it, " + name + "!");
    // }
    // return (
    //     <button className="button" onClick={()=>
    //         handleClick("Davina")}>Click Me!</button>
    // );

    const handleClick = (event) => { event.target.textContent = "Ouch!"; }
    return (
        <button className="button" onDoubleClick={(e) => handleClick(e)}>Click Me!</button>
    );
}

export default Button;