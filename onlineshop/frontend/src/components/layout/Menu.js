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
              <ul className="nav navbar-nav navbar-expand-lg justify-content-center mt-3 mb-5">

                <li className="nav-item">
                    <Link className="nav-link"
                          to="/shop/category/products">
                        ПРОДУКТЫ
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link"
                          to="/shop/category/books">
                        КНИГИ
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link"
                          to="/shop/category/electronics">
                        ЭЛЕКТРОНИКА
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link disabled"
                          to="#">
                        ОДЕЖДА И ОБУВЬ
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link disabled"
                          to="#">
                        ДОМ И САД
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
