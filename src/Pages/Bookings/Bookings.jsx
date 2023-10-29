import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provieders/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
  const  url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() =>{
    fetch(url)
    .then(res => res.json())
    .then(data => setBookings(data))
  },[url])

  const handleDelet = id =>{
    const proceed = confirm("Are you sure you went to delete");
    if (proceed) {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            const remaning = bookings.filter(booking => booking._id !== id);
            setBookings(remaning);
        })
    }
  }
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelet={handleDelet}
                                
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;