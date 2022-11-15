import React from 'react';
import { BookItem } from './bookitem';

export class Books extends React.Component {
    render() {
        return this.props.books.map(

        (Book) =>{
            return <BookItem book ={Book}key={Book._id}> </BookItem>
        }


        );

    }
}