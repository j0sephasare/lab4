import React from 'react';
import axios from 'axios';
export class Create extends React.Component {


//constructer with this binding to bind the form bellow 
constructor(){

    super();
    this.handleSubmit=this.handleSubmit.bind(this);
    this.onChangeBookTitle=this.onChangeBookTitle.bind(this);
    this.onChangeBookCover=this.onChangeBookCover.bind(this);
    this.onChangeBookAuthor=this.onChangeBookAuthor.bind(this);
    this.state ={
        title:'',
        cover:'',
        author:''
    }
}

onChangeBookAuthor(e){
    this.setState({
        author:e.target.value
    })
}


onChangeBookCover(e){
    this.setState({
        cover:e.target.value
    })
}
//taking in data from set states to be used 
    handleSubmit(e){
        e.preventDefault();
        console.log(`${this.state.title}),
        ${this.state.cover},${this.state.author}`);

        const book ={

            title:this.state.title,
            cover:this.state.cover,
            author:this.state.author
        }
        //takes in data to be used 
        axios.post('http://localhost:4000/api/books',book)
        .then()
        .catch();
        this.setState({

            title:'', 
            cover:'',
            author:''


            



        })
    }
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }


    render() {
//form for submitting using this for book,author and cover using set state and onchange 
        return (

            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        );

    }


}