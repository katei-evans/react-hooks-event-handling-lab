// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input
                type="password"
                onChange={() => console.log("Entering password...")}
            />
            <button
                onFocus={() => console.log("Good!")}
                onBlur={() => console.log("Hey! Eyes on me!")}
            >
                Eyes on me
            </button>
        </div>
    )
}

export default Keypad;