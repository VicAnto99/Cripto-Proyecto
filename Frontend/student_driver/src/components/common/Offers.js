import React from 'react';
import './Offers.css';


function Offers() {
    
  return (
    <div className='offers'>

        <div className='container mt-5'>
            <div className='offers_container_title'>
                <h2>Offers</h2>
            </div>
            <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Date</th>
                <th scope="col">Place</th>
                <th scope="col">Offer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">user_1</th>
                <td>Monday 25 May 19:00</td>
                <td>Xochimilco</td>
                <td>
                    <button type="button" class="btn btn-info btn-circle btn-lg"><i class="glyphicon glyphicon-ok"></i></button>
                </td>
              </tr>
              <tr>
                <th scope="row">user_2</th>
                <td>Monday 25 May 19:00</td>
                <td>NezaYork</td>
                <td>
                <button type="button" class="btn btn-info btn-circle btn-lg"><i class="glyphicon glyphicon-ok"></i></button>
                </td>
              </tr>
              <tr>
                <th scope="row">user_3</th>
                <td>Monday 25 May 19:00</td>
                <td>Iztapalapa</td>
                <td>
                <button type="button" class="btn btn-info btn-circle btn-lg"><i class="glyphicon glyphicon-ok"></i></button>
                </td>
              </tr>
              <tr>
                <th scope="row">user_4</th>
                <td>Monday 25 May 19:00</td>
                <td>Tlalpan</td>
                <td>
                <button type="button" class="btn btn-info btn-circle btn-lg"><i class="glyphicon glyphicon-ok"></i></button>
                </td>
              </tr>
              <tr>
                <th scope="row">user_5</th>
                <td>Monday 25 May 19:00</td>
                <td>Seattle</td>
                <td>
                <button type="button" class="btn btn-info btn-circle btn-lg"><i class="glyphicon glyphicon-ok"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
            
        </div>
    </div>
  )
}

export default Offers