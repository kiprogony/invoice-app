import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useState, useEffect } from 'react';



function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [order, setOrder] = useState([])

  useEffect(() => {
    fetch("https://invoicer-backend.herokuapp.com/orders")
    .then((res) => res.json())
    .then((data) => {
      setOrder(data);
      console.log(data);
    });
  }, [])

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="medium">
        <TableHead>
          <TableRow >
            <TableCell padding="checkbox">Order_id</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>product_id</TableCell>
            <TableCell>customer_id</TableCell>
            <TableCell>Status</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.order_id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.product_id}</TableCell>
              <TableCell>{order.customer_id}</TableCell>
              <TableCell>{order.status}</TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}