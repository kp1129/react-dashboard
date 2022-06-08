import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Table.css';

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
}
  
const rows = [
    createData("Oculus: Meta Quest 2", 18908424, "2 March 2022", "Approved"),
    createData("Samsung Galaxy Watch4 ", 18908424, "2 March 2022", "Pending"),
    createData("Apple watchOS9", 18908424, "2 March 2022", "Approved"),
    createData("Samsung 85\" QN900A Neo QLED 8K", 18908421, "2 March 2022", "Delivered"),
];

// custom table background styles for at-a-glance status update
const makeStyle = (status) => {
    if (status === "Approved") {
        return {
            background: 'rgb(145 254 159 /47%)',
            color: 'green',
        }
    } else if (status === "Pending") {
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    } else {
        return {
            background: '#59bfff',
            color: '#fff'
        }
    }
}

export default function BasicTable() {
  return (
      <div className='table'>
        <h2>Recent Orders</h2>  
        <TableContainer component={Paper}
            style={{
                boxShadow: "0px 13px 20px 0px #80808029"
            }}
        >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="left">Tracking ID</TableCell>
                        <TableCell align="left">Date of Purchase</TableCell>
                        <TableCell align="left">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="left">{row.trackingId}</TableCell>
                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">
                            <span className='status' style={makeStyle(row.status)}>
                                {row.status}
                            </span>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}
