import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'

class BookDetail extends Component {

  state = {
    id: 0,
    title: "",
    author: "",
    series: "",
    izdatelstvo: "",
    year: 0,
    cover: "",
  }

  componentDidMount(){
    this.getItem(this.props.match.params.id)
  }

  getItem = (id) => {
    this.setState(()=>{
      return{
          id: id,
          title: "Элтон Джон: Я - Элтон Джон",
          author: "Уэлбек Мишель",
          series: "Весь мир Уэлбек",
          izdatelstvo: "ACT",
          year: "2019",
          cover: "Твердый переплет",
          price: 681,
          sale: 1
        }
    })
  }

  render(){
    return(
      <Fragment>
      <div className="container">
        <div className="row">
          <div className="col align-self-center">
            Картинка
          </div>
          <div className="col align-self-center">
            <div>
              <h1>Бестселлер</h1>
            </div>
            <div>
              <h1>{this.state.title}</h1>
            </div>
            <div className="row">
              <div className="col">
                <p>Автор</p>
                <p>Серия</p>
                <p>Издательство</p>
                <p>Год выпуска</p>
                <p>Тип обложки</p>
              </div>
              <div className="col">
                <p>{this.state.author}</p>
                <p>{this.state.series}</p>
                <p>{this.state.izdatelstvo}</p>
                <p>{this.state.year}</p>
                <p>{this.state.cover}</p>
              </div>
            </div>
            <div className="cart mt-4">
              <button className="site-btn btn-span bg-primary-color text-white">Добавить</button>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    )
  }
}

export default BookDetail
