const statesAndActions = [
    ["Looking for the 0 separator", "0 -> 1"],
    ["Looking for blank", "Move left"],
    ["Looking for 1", "1 -> 0"],
    ["Looking for blank", "Move right"],
    ["Looking for blank", "Move right"],
    ["Answer displayed", "Completed"]
]

export default function StateNAction({stateNo} : {stateNo: number}){
    return (
        <div className="flex flex-col items-center">
            <div className="text-3xl mt-5">State {stateNo} : {statesAndActions[stateNo-1][0]}</div>
            <div className="text-2xl mt-2 mb-10">Action: {statesAndActions[stateNo-1][1]}</div>
        </div>
    )
}