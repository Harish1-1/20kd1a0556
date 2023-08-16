const DisplayPage2 = props => {
  const {filtered} = props
  const {
    id,
    trainName,
    trainno,
    starttime,
    endtime,
    startplace,
    endplace,
    prizes,
    acseats,
    sleeperseats,
  } = filtered
  return (
    <div>
      <h1>train details</h1>
      <h1>Book the train</h1>
      <h1>
        {trainno}|| {trainName}
      </h1>
      <p>the train starts at {starttime}</p>
      <p>the train arrives at {endtime}</p>
      <p>train starts from {startplace}</p>
      <p>train stops at {endplace}</p>
      <div className="container1">
        <div>
          <h3>general</h3>
          <h5>available:{acseats}</h5>
          <p>{prizes}-750</p>
        </div>
        <div>
          <h3>Ac</h3>
          <h5>available:{sleeperseats}</h5>
          <p>{prizes}</p>
        </div>
      </div>
    </div>
  )
}

export default DisplayPage2
