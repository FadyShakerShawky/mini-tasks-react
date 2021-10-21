import React, { Component } from 'react'
import {
    useParams
  } from "react-router-dom";
class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            errors: [],
            id:null,
            isloading:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ title: event.target.value });
    }
    handleSubmit(event) {
        if(!this.state.isloading){
            event.preventDefault();
            const data = {
                id:this.state.id,
                title: this.state.title,
            }
            axios.put(`/api/tasks/updateTitle`, data).then(response => {
                location.href = '/list';
                console.log(response);
            }).catch(error => {
                console.log(error.response.data.errors.title);
                this.setState({
                    errors: error.response.data.errors.title
                })
                console.log(this.state);
            })
        }
    }
    fetchTask(){

        let id = this.props.match.params.id;
        this.setState({
            id:id,
            isloading:true
        })
        axios.get(`/api/tasks/show/${id}`).then(response => {
            this.setState({
                title:response.data.title,
                isloading:false
            })
        })
    }
    componentDidMount(){
        this.fetchTask();
    }
    render() {
        const { title, errors } = this.state;
        return (
            <div className='container'>
                <div className="row my-4">
                    <section className="col-12">
                        <div className="card">
                            <div className="card-header">
                                Add new task
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" required min="3" id="title" value={title} onChange={this.handleChange} />
                                        <div className="danger">
                                            {errors.map(error => (
                                                <li>{error}</li>
                                            ))}
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Create
