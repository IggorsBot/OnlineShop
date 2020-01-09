import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import axios from 'axios'


class BooksList extends Component {

  state = {
    books: []
  }
  componentDidMount(){
    this.getBooks().then()
  }

  getBooks = () => {
    return axios
      .get('http://localhost:8000/api/books')
      .then(result => this.setState(()=>{
        return{
          books: result.data.books
        }
      }))
  }

  getRaiting = (raiting) => {
    let stars = []
    for (var i = 0; i <= raiting; i++) {
      stars.push(<i className="fas fa-star" key={i}></i>)
    }
    return stars
  }

    render() {
        return (
            <Fragment>
              <div className="container">
              <h3 className="text-secondary mt-5">{this.props.series}</h3>


                  <div className="px-md-3">
                    <div className="row text-center px-4">


                      {this.state.books.map((book, index)=>{
                        return(
                          <div className="col-md-2 product pt-md-5" key={index}>
                            <Link to={`/shop/category/books/detail/${book.id}`} ><img src={`http://localhost:8000${book.image}`} height="200" witdh="170" alt="Image 1"/></Link>
                            <div className="cart-details">
                              <Link to={`/shop/category/books/detail/${book.id}`}><h6 className="pro-title p-0">{book.name.length > 30 ? `${book.name.slice(0,27)}...` : book.name}</h6></Link>
                              <div className="raiting">
                                {this.getRaiting(book.raiting)}
                              </div>
                              <div className="pro-price py-2">
                                <h5>
                                  <span>{book.price} ₽</span>
                                </h5>
                              </div>

                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
              </div>
            </Fragment>
        )
    }
}

export default BooksList
