import React from 'react';
import { Books } from './books';
import axios from "axios";
export class Read extends React.Component{
//array for books
componentDidMount()
{
    //axios is http client that is installed and importated that uses a http get method 
    axios.get('http://localhost:4000/api/books')
    //data has come back function invoked "callback function new way of writing functions"
    .then((response)=>{
        this.setState({
            
            books:response.data.myBooks
        
        
        })

    })
    .catch(function(error){
        console.log(error);
    });
}

state ={
books:[
   
]

}

render()
{
    return(
<div>
<h3>Hello From My read component</h3>
<Books books={this.state.books}></Books>
</div>

    );
}

}