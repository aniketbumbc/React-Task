import React, { Component } from 'react'
import axios from 'axios';

export class RestData extends Component {

      // API CAll IN REACT USING Axios
      // componentDidMount(){
      //       axios.get(url).then(res=>{
      //             this.setState({
      //                   //pass data to state
      //             })

      //       }).catch(console.error(error));
      // }

      render() {
            this.data = {
                  "CODE": "WS200",
                  "MESSAGE": "Success",
                  "RESPONSE_DATA": {
                        "state_id": "FL",
                        "city_name": "Miami",
                        "city_id": "Miami",
                        "state_name": "Florida",
                        "country_id": "US",
                        "country_name": "United States",
                        "file_url": "https://d4bx546bchh9w.cloudfront.net/node_download.pdf"
                  }
            }
            return (

                  <div>
                        <h1> API Respone </h1>
                        <table className="table">
                              <thead>
                                    <tr>
                                          <th scope="col">state_id</th>
                                          <th scope="col">city_name</th>
                                          <th scope="col">state_name</th>
                                          <th scope="col">country_id</th>
                                          <th scope="col">country_name</th>
                                          <th scope="col">file_url</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr key={this.data.CODE}>
                                          <td>{this.data.RESPONSE_DATA.state_id}</td>
                                          <td>{this.data.RESPONSE_DATA.city_name}</td>
                                          <td>{this.data.RESPONSE_DATA.state_name}</td>
                                          <td>${this.data.RESPONSE_DATA.country_id}</td>
                                          <td>{this.data.RESPONSE_DATA.country_name}</td>
                                          <td>${this.data.RESPONSE_DATA.file_url}</td>
                                    </tr>
                              </tbody>
                        </table>

                  </div>
            )
      }
}

export default RestData
