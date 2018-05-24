import React, {Component} from 'react'

class AddPhoto extends Component{

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const imgLink = event.target.elements.link.value;
        const description = event.target.elements.desc.value;
        const post = {
            id: Number(new Date()),
            description:description,
            imageLink:imgLink
        }
        if (description && imgLink){
            this.props.onAddPhoto(post)

        }


    }


    render(){
        return (
        <div>
            <div>
                <h1>PhotoWall</h1>
            </div>
            <div className="form">
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="describe" name="desc"/>
                    <button> Post </button>
                </form>
            </div>
        </div>
        )
    }
}


export default AddPhoto