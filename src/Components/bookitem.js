import React from 'react';
import Card from 'react-bootstrap/Card';


export class BookItem extends React.Component {
    render() {
        return (
            <div>
{/* 
                <h3>{this.props.book.title}</h3>
                <img src={this.props.book.thumbnailUrl} width="200" height="200"></img>
                <h4>{this.props.book.authors[0]}</h4>
                 */}
                

 <Card>
    
      <Card.Header>{this.props.book.title}</Card.Header>
      <Card.Body>
        <blockquote>
        <img src={this.props.book.cover} width="200" height="200"></img>
          <footer>
          {this.props.book.author}
          </footer>

        </blockquote>

      </Card.Body>
    </Card>


            </div>

        );
        //card to make page look nicer and neater
    }

}