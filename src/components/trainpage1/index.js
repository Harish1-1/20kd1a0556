import {Component} from 'react'
import DisplayPage1 from '../DisplayPage1'
import DisplayPage2 from '../DisplayPage2'

class TrainPage1 extends Component {
  state = {nextlink: false, ids: 0,data:[]}
  componentDidMount(){
      this.getdata()
  }

  nextPage = id => {
    this.setState({nextlink: true})
    this.setState({ids: id})
  }
  getdata=async=>{
      const apiUrl = 'http://20.244.56.144/train/trains'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const Data = fetchedData.trains.map(each => ({
        trainno:each.trainNumber,
        trainName:each.trainName,
        endtime:each.depaturetime,
        starttime:each.arrivaltime,
        prize:each.price,
        acseats:each.seatsAvailable.acseats,
        sleeperseats:each.seatsAvailable.sleeper,
      }))
      this.setState({data:Data})
  }

  firstpage = () => {
      const {data}=this.state;
    return (
      <ul>
        {data.map(eachItem => (
          <DisplayPage1
            eachItem={eachItem}
            nextPage={this.nextPage}
            key={eachItem.id}
          />
        ))}
      </ul>
    )
  }

  secondpage = () => {
    const {ids,data} = this.state
    const filteredProjects = data.filter(
      eachprojectDetails => eachprojectDetails.id === ids,
    )
    return filteredProjects
    return (
      <ul>
        filtered=this.filteredProjects
        <DisplayPage2 filtered={this.filtered} />
      </ul>
    )
  }

  render() {
    const {nextlink} = this.state
    return (
      <div>
        if(nextlink===false){{this.firstpage()}}else{{this.secondpage}}
      </div>
    )
  }
}

export default TrainPage1
