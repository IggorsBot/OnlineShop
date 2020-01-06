import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'


class BooksList extends Component {

  state = {
    items: []
  }
  componentDidMount(){
    this.getBooks(this.props.slug)
  }

  getBooks = (slug) => {
    this.setState(()=>{
      return{
        items: [
          {"id": 14, "title": "Элтон Джон: Я - Элтон Джон", "price": 681, "sale": 1},
          {"id": 15, "title": "Арчи Грин и Дом летающих книг", "price": 341, "sale": 1},
          {"id": 16, "title": "Эдвард Сноуден. Личное дело", "price": 681, "sale": 1},
          {"id": 17, "title": "Анатомия сообществ", "price": 568, "sale": 0.8},
          {"id": 18, "title": "Хранительница книг из Аушвица", "price": 485, "sale": 1},
          {"id": 19, "title": "Капитализм в Америке. История", "price": 846, "sale": 1}
        ]
      }
    })
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


                      {this.state.items.map((item, index)=>{
                        return(
                          <div className="col-md-2 product pt-md-5" key={index}>
                            <Link to={`/shop/category/books/detail/${item.id}`} ><img src={`http://localhost:8000/media/products/books/children${index+1}.jpg`} height="200" witdh="170" alt="Image 1"/></Link>
                            <div className="cart-details">
                              <Link to={`/shop/category/books/detail/${item.id}`}><h6 className="pro-title p-0">{item.title.length > 30 ? `${item.title.slice(0,27)}...` : item.title}</h6></Link>
                              <div className="raiting">
                                {this.getRaiting(item.raiting)}
                              </div>
                              <div className="pro-price py-2">
                                <h5>
                                  <small><s className="text-secondary">{item.price} ₽</s></small>
                                  <span> {Math.trunc(item.price * item.sale)} ₽</span>
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
