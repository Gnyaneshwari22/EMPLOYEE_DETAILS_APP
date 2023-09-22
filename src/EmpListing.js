import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './index.css';

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/employee/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);  
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container ">
            <div className="card shadow p-3 mb-5 bg-white rounded-6">
                <div className="card-title">
                    <h2 className="employeelist">Employee List</h2>
                </div>
                <div className="card-body flex item-center ">
                    <div className="divbtn d-flex p-2">
                         {/* <div className="p-2 w-100 bd-highlight">Add New Employee</div> */}
                         <Link to="employee/create" className="btn btn-success p-2">Add New Employee (+)</Link>
                    </div>
                    <table className="table rounded-3 table-hover">
                        <thead className="headerfont table-dark">
                            <tr>
                                <td>ID</td>
                                <td>NAME</td>
                                <td>EMAIL</td>
                                <td>PHONE</td>
                                <td>ACTION</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;

// npx json-server --watch db.json --port 8000