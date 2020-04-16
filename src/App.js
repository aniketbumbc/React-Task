import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { addTask,deleteTask } from './action';
import { bindActionCreators } from 'redux';
import './App.css';
import RestData from './components/RestData'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
         taskDesc:'',
         status:''
    }
    this.addTasks = this.addTasks.bind(this);
}


addTasks(event) {
    event.preventDefault();   
    event.target.reset();
   this.props.addTask(this.state.taskDesc, this.state.status);
}

deleteTasks(id){
this.props.deleteTask(id);
}

renderTasks(){
  const {task} = this.props;
  // task.reverse();
return(
  <ul>
    {
      task.map(task=>{
        return(
          <li key ={task.id}>
            <div className={task.status}>
              <h2> a few seconds ago </h2>
              {task.taskDesc}
              <div>
              <button type="button" className="btn btn-danger" onClick={()=> this.deleteTasks(task.id)}>Delete</button>
              </div>
            </div>

          </li>
        )
      })
    }
  </ul>
)
}
  render() {
    return (
      <div>
        <h1 className="heading"> Issue Tracker </h1>
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <div className="form-group">
                <Form onSubmit={this.addTasks}>
                  <label> What you want to Record </label>
                  <textarea className="form-control" rows="2" ref="taskData"
                  onChange={event=>this.setState({taskDesc: event.target.value})}
                  ></textarea>

                  <input className="radio-btn" type="radio" name="status"
                   value="critical" 
                   onChange={event=>this.setState({status: event.target.value})}
                   />
                  <label className="radio-inline">
                    <span className="redBg"> Critical </span>  </label>


                  <input className="radio-btn" type="radio" name="status" 
                  value="normal" 
                  onChange={event=>this.setState({status: event.target.value})}
                  />
                  <label className="radio-inline">
                    <span className="greenBg"> Normal </span>  </label>

                  <input className="radio-btn" type="radio" name="status" value="info" 
                  onChange={event=>this.setState({status: event.target.value})}
                  />
                  <label className="radio-inline">

                    <span className="blackBg"> Info </span>  </label> <br />

                  <div className="col-md-4 text-center">
                    <Button type="submit" variant="success" className="mr-2"> Submit </Button>
                  </div>
                </Form>

                {this.renderTasks()}
              </div>
            </div>
          </div>
          <RestData/>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask,deleteTask }, dispatch)
}

function mapStateToProps(state){
return{
  task:state
}
}





export default connect(mapStateToProps, mapDispatchToProps)(App);














