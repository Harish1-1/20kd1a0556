import './index.css'

const DisplayPage1 = props => {
  const {eachItem, nextPage} = props
  const {
    id,
    trainno,
    trainName,
    starttime,
    endtime,
    startplace,
    endplace,
  } = eachItem
  const onBook = () => {
    nextPage(id)
  }
  return (
    <li className="container1">
      <h1>Trains </h1>
      <h1>
        {trainno}||{trainName}
      </h1>
      <p>
        from {startplace}&nbsp;&nbsp;&nbsp; to {endplace}
      </p>
      <p>
        arrives at{starttime} depatures at {endtime}
      </p>
      <button type="button" className="button1" onClick={onBook}>
        book now
      </button>
    </li>
  )
}

export default DisplayPage1
