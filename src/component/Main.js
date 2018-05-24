import React,{Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'




class Main extends Component{
    constructor(){
        super();



    }







    render(){
        console.log(this.props.posts)
        return (<div>

            <Route exact path="/" render={()=> (
                <div>
                    <Title title={'PhotoWall'}/>
                    {/*<PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate} />*/}
                    <PhotoWall posts={this.props.posts}/>
                </div>
            )}/>


            {/*<Route path="/Addphoto" render = {({history})=>(*/}
                {/*<div>*/}
                    {/*<AddPhoto onAddPhoto={(addedPost) => {*/}

                    {/*this.addPhoto(addedPost);*/}

                        {/*history.push('/');*/}

                    {/*}}/>*/}
                {/*</div>*/}

            {/*)}/>*/}


        </div>)
    }
}



 export default Main;