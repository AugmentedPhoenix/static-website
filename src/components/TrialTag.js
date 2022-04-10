const TrialTag = (isTrial) => {

    if(isTrial.isTrial) {
        return (
            <div style={{paddingTop: "0.8vmin", float: "right", paddingRight: "0.8vmin"}}>
                <p style={{fontFamily: "'Maven Pro', sans-serif", fontSize: "2vmin"}}>
                    Trial
                </p>
            </div>
        )
    } else {
        return (
            <div>
                <p style={{fontFamily: "'Maven Pro', sans-serif", fontSize: "2vmin"}}>
                </p>
            </div>
        )
    }
}

export default TrialTag;