import React, { useState } from 'react'
import './Table.css'
import Button from '../button/Button'

/**
 * Table Component to render the table.
 * @param title - Title of the table.
 * @param columns - Array of column headers.
 * @param data - Array of an array containing data for corresponding column.
 * @param numRow - Max number of rows to show in the table.
 */
const Table = ({ title, columns, data, numRow }) => {

    // Variable to store the number of rows to show. Default is 5.
    const numOfRow = numRow?numRow:5;
    // State to store the range of index which has to be shown.
    const [range, setRange] = useState([0, numOfRow]);

    // Function to handle Previous button click.
    const handleClickPrevious = () => {
        setRange(range => [
            range[0]-numOfRow < 0?0:range[0]-numOfRow, // If range is below 0.
            range[0]
        ]);
    }

    // Function to handle Next button click.
    const handleClickNext = () => {
        setRange(range => [
            range[1], 
            range[1]+numOfRow > data.length?data.length:range[1]+numOfRow // If range is exceeding length of data.
        ]);
    }

    return (
        <div className='table'>
            <h2 className='table-title'>{title}</h2>
            <table className='table-main'>
                <thead>
                    <tr className='table-row'>
                        {
                            columns.map((col, index) => (
                                <th className='table-header' key={index}>{col}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.slice(range[0], range[1]).map((row, rowIndex) => (
                            <tr className='table-row' key={rowIndex}>
                                {
                                    row.map((col, colIndex) => (
                                        <td className='table-data' key={colIndex}>{col}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='table-control'>
                <Button disabled={range[0] === 0} onClick={handleClickPrevious} name='Previous'/>
                <Button disabled={range[1] === data.length} onClick={handleClickNext} name='Next'/>
            </div>
        </div>
    )
}

export default Table