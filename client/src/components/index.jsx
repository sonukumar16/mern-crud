import React, { Component } from 'react';
import AxiosService from "../services/axios.services";
import TableRow from './TableRow';

const axiosService = new AxiosService()
class Index extends Component {  
    
    constructor(props) {
        super(props);     
        this.state = {business: []};
      }
      componentDidMount(){
       axiosService.get('business')
           .then(response => {
               console.log("check response data::::::::", response);
               
            this.setState({ business: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      tabRow(){
        return this.state.business.map((object, i)=>{
            return <TableRow obj={object} key={i} />;
        });
      }
      render() {
        return (
          <div>
            <h3 align="center">Business List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Person</th>
                  <th>Business</th>
                  <th>GST Number</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                { this.tabRow() }
              </tbody>
            </table>
          </div>
        );
      }
}
 
export default Index;