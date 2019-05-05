import React, { Component } from "react";
import { Link } from "react-router-dom";
import AxiosService from "../services/axios.services";

const axiosService = new AxiosService();
class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axiosService.deleteRecord('business/delete/'+ this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    const {
      obj: {
        person_name = "",
        business_name = "",
        business_gst_number = "",
        _id = null,
      } = {},
    } = this.props;
    return (
      <tr>
        <td>{person_name}</td>
        <td>{business_name}</td>
        <td>{business_gst_number}</td>
        <td>
          <Link to={"/edit/" + _id} className='btn btn-primary'>
            <i className='fa fa-pencil' aria-hidden='true' />
          </Link>
        </td>
        <td>
          <button  onClick={this.delete} className='btn btn-danger'>
            <i className='fa fa-trash' aria-hidden='true' />
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
