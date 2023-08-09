import { forwardRef, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from "date-fns";
import moment from "moment";

function StoreSalesDeposit() {
    
    const [selectedDate, setSelectedDate] = useState(new Date());
    const selectedMonth = moment(selectedDate).format('M');
    const selectedYear = moment(selectedDate).format('YYYY');
    console.log(selectedYear, selectedMonth);

    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="btn btn-outline-dark btn-sm" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    const customHeight = {
        height: "40px",
    };

    return (
        <div className="container mt-5 pt-5">
            <h4 className="fw-bold text-center">매출 입금 내역</h4>

            <div className="row justify-content-center mt-5">
                <Table className="text-center w-50 fs-5" borderless={true}>
                    <tbody>
                        <tr style={customHeight}>
                            <th>기간</th>
                            <td>
                                <DatePicker
                                    dateFormat="MM/yyyy"
                                    selected={selectedDate}
                                    showMonthYearPicker
                                    onChange={(date) => setSelectedDate(date)}
                                    customInput={<CustomInput />}
                                    maxDate={addDays(new Date(), 0)}
                                />
                            </td>
                        </tr>
                        <tr style={customHeight}>
                            <th>건수</th>
                            <td>0 건</td>
                        </tr>
                        <tr style={customHeight}>
                            <th>매출</th>
                            <td>0 원</td>
                        </tr>
                        <tr className="border-bottom" style={customHeight}>
                            <th>수수료</th>
                            <td>0 원</td>
                        </tr>
                        <tr style={customHeight}>
                            <th>납부금액</th>
                            <td>0 원</td>
                        </tr>
                        <tr className="border-bottom" style={customHeight}>
                            <th>실납부금액</th>
                            <td>0 원</td>
                        </tr>
                        <tr style={customHeight}>
                            <th>미납금</th>
                            <td>0 원</td>
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