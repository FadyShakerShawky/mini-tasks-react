import React, { Component } from 'react'

class Create extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row my-4">
                    <section className="col-12">
                        <div className="card">
                            <div className="card-header">
                                Add new task
                            </div>
                            <div className="card-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="title" class="form-label">Title</label>
                                        <input type="text" class="form-control" id="title" />
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
