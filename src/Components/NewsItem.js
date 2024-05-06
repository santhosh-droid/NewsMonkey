import React,{Component} from 'react';

export default class NewsItem extends Component{

    render(){
        let {title, description,imageUrl,newsUrl,author,date}=this.props;
        return(
            <div className="my-3">
               <div className="card" >
                    <img src={imageUrl?imageUrl:"https://img.freepik.com/free-photo/white-texture_1160-786.jpg?size=626&ext=jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}....</h5>
                        <p className="card-text">{description}....</p>
                        <p className="card-text">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-danger">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}