import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

function Photo(props){
    const post = props.post;
    return <figure className="figure">
        <img class="photo" src={post.imageLink} alt={post.description}/>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container">
            <button className="remove-button" onClick={()=>{
                props.onRemovePhoto(post)
            }}>Remove</button>
        </div>
    </figure>

}
Photo.propTypes = {
    post: PropTypes.array.isRequired,

}

function mapStateToProps(state){
    return {
        posts:state
    }
}


// class Photo extends Component{
//     render(){
//         const post = this.props.post;
//         return <figure className="figure">
//             <img class="photo" src={post.imageLink} alt={post.description}/>
//             <figcaption><p>{post.description}</p></figcaption>
//             <div className="button-container">
//             <button className="remove-button">Remove</button>
//             </div>
//         </figure>
//     }
// }



export default connect(mapStateToProps)(Photo);