import { forwardRef, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from "date-fns";
import moment from "moment";

function StoreSalesDeposit() {
     
    const [selectedDate, setSelectedDate] = useState(new Date());
    const selectedMonth = moment(selectedDate).format('YYYY-MM');

    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="btn btn-outline-dark btn-sm ms-2" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    const customHeight = {
        height: "40px",
    };

    return (
        <div className="container mt-5 pt-5">
            <h2 className="fw-bold text-center">매출 입금 내역</h2>

            <div className="row justify-content-center mt-5">
                <Table className="text-center w-50 fs-5">
                    <tbody>
                        <tr style={customHeight}>
                            <th>기간</th>
                            <td></td>
                        </tr>
                        <tr style={customHeight}>
                            <th>건수</th>
                            <td></td>
                        </tr>
                        <tr style={customHeight}>
                            <th>매출</th>
                            <td></td>
                        </tr>
                        <tr style={customHeight}>
                            <th>수수료</th>
                            <td></td>
                        </tr>
                        <tr style={customHeight}>
                            <th>납부금액</th>
                            <td></td>
                        </tr>
                        <tr style={customHeight}>
                            <th>실납부금액</th>
                            <td></td>
                        </tr>
                        <tr style={customHeight}>
                            <th>미납금</th>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <Link to="/">
                    <Button type="button" className="px-3" variant="outline-dark">
                        입금하기
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default StoreSalesDeposit;