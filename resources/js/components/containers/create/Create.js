import React, { Component } from 'react'

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            errors: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ title: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = {
            title: this.state.title,
        }
        axios.post(`/api/tasks/store`, data).then(response => {
            location.href = '/list';
        }).catch(error => {
            console.log(error.response.data.errors.title);
            this.setState({
                errors: error.response.data.errors.title
            })
        })
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
                                    <div class="mb-3">
                                        <label for="title" class="form-label">Title</label>
                                        <input type="text" class="form-control" required min="3" id="title" value={title} onChange={this.handleChange} />
                                        <div className="danger">
                                            {errors.map(error => (
                                                <li>{error}</li>
                                            ))}
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
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
