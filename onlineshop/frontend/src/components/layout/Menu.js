import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'


class Menu extends Component{

  render(){
    return(
      <Fragment>
        <div className="container">
          <div className="row">
              <div className="col-md-12 col-12 text-center">

              <ul className="nav justify-content-center mt-3 mb-5">
                <li className="nav-item">
                    <Link className="nav-link"
                          to="/shop/category/products">
                        Продукты
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"
                          to="/shop/category/books">
                        Книги
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"
                          to="/shop/category/electronics">
                        Электроника
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled"
                          to="#">
                        Одежда и обувь
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled"
                          to="#">
                        Дом и сад
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Menu
