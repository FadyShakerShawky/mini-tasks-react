import React, { Component } from 'react'

class List extends Component {
    componentDidMount(){
        this.fetchTasks()
    }
    fetchTasks(){
        console.log("hi");
    }
    render() {
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
                                    <th>actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>play golf</td>
                                    <td>
                                        <button className="btn btn-primary">
                                            Mark as done
                                        </button>
                                        <button className="btn btn-danger">
                                            Delete
                                        </button>
                                        <button className="btn btn-warning">
                                            To do later
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>do the assinment</td>
                                    <td>
                                        <button className="btn btn-primary">
                                            Mark as done
                                        </button>
                                        <button className="btn btn-danger">
                                            Delete
                                        </button>
                                        <button className="btn btn-warning">
                                            To do later
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default List
