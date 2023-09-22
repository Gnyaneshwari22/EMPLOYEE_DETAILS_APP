import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './index.css'

const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    return(
        <div>
                <div className="container">

                     <div  className="card row shadow p-3 mb-5 bg-white rounded-6" style={{ "textAlign": "left" }}>
                         <div className="card-title">
                             <h2>Employees Details</h2>
                         </div>
                         <div className="card-body"></div>
                         {empdata &&
                            <div className="card-body-details">
                                <h2>Employee Name is : <b>{empdata.name}</b>  ({empdata.id})</h2>
                                <h3>Contact Details</h3>
                                <h3>Email is : {empdata.email}</h3>
                                <h3>Phone is : {empdata.phone}</h3>
                                
                                <Link className="btn btn-danger p-3 m-3" to="/">Back to Listing</Link>
                            </div>
                          }

                     </div>

                </div>
        </div>
    )
}

export default EmpDetail;