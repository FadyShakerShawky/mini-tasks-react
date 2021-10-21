import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './list.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        this.fetchTasks = this.fetchTasks.bind(this);
        this.statusHandler = this.statusHandler.bind(this);
        this.taskDeleteHandler = this.taskDeleteHandler.bind(this);
    }
    componentDidMount() {
        this.fetchTasks();
    }
    fetchTasks() {
        axios.get(`/api/tasks/index`).then(response => {
            if (response.status == 200) {
                this.setState(prevState => ({
                    tasks: response.data,
                }))
            }
        })
    }
    statusHandler(event) {
        const data = {
            id: event.target.dataset.id,
            status: event.target.dataset.status
        }
        axios.put(`/api/tasks/updateStatus`,data).then(response => {
            if (response.status == 200) {
                this.fetchTasks();
            }
        })
    }
    getTaskRowUi(status) {
        switch (status) {
            case "ready":
                return "bg-light-green"
                break;
            case "postponed":
                return "bg-light-red"
                break;
            default:
                return "";
                break;
        }
    }
    taskDeleteHandler(event){
        axios.delete(`/api/tasks/delete/${event.target.dataset.id}`).then(response => {
            if (response.status == 200) {
                this.fetchTasks();
            }
        })
    }
    render() {
        const { tasks } = this.state;
        return (
            <div className="container-fluid my-4" >
                <div className="card">
                    <div className="card-header">
                        Tasks list
                    </div>
                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>title</th>
                                    <th>status</th>
                                    <th>ready</th>
                                    <th>postpone</th>
                                    <th>actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task ,index)=> (
                                    <tr className={this.getTaskRowUi(task.status.title)}>
                                        <td>{index+1}</td>
                                        <td>{task.title}</td>
                                        <td>{task.status.title}</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <input onChange={(event) => this.statusHandler(event)} class="form-check-input" data-id={task.id} data-status="ready" type="checkbox" checked={task.status.title == "ready"} />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <input onChange={(event) => this.statusHandler(event)} class="form-check-input postpone-checkbox" type="checkbox" data-id={task.id} data-status="postponed" checked={task.status.title == "postponed"} />
                                            </div>
                                        </td>
                                        <td>
                                            <input className="btn btn-danger" type="button" value="Delete" data-id={task.id} onClick={(event)=>this.taskDeleteHandler(event)}/>
                                            <Link className="btn btn-warning" to={"update/" + task.id}>Update</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default List
