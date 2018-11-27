import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Pagination from "react-js-pagination";
//require("bootstrap/less/bootstrap.less");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      currentPage: 1,
      data:[],
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount() {
  //   var config = {
  //     headers: {'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',}
  // };
    axios.get(`http://localhost:4000?page=${this.state.currentPage}`).then(response=> {
      console.log(response.data.mon_ans);
      this.setState({
        data: response.data.mon_ans
        // [...this.state.data, ...response.data.mon_ans]
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    axios.get(`http://localhost:4000?page=${pageNumber}`).then(response=> {
      console.log(response.data.mon_ans);
      this.setState({
        data: response.data.mon_ans,
        activePage: pageNumber,
      currentPage: pageNumber
      })
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  render() {
    let data = this.state.data;
    let food = data.map((value, key)=>(<p key={key}>{value.ten_mon}</p>))
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div> {food}</div>
        
          <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          totalItemsCount={30}
          pageRangeDisplayed={3}
          onChange={this.handlePageChange}
        />
        </header>
      </div>
    );
  }
}

export default App;
