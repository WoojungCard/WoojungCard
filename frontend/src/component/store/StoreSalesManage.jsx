import { forwardRef, useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from "date-fns";
import moment from "moment";

function StoreSalesManage() {
    
    const [selectedDate, setSelectedDate] = useState(new Date());
    const selectedMonth = moment(selectedDate).format('M');
    const selectedYear = moment(selectedDate).format('YYYY');
    console.log(selectedYear, selectedMonth);

    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="btn btn-outline-dark btn-sm ms-2" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    return (
        <div className="container mt-5 pt-4">
            <h4 className="fw-bold text-center">가맹점 매출관리</h4>

            <div className="d-flex justify-content-end mb-4 me-5 pe-5">
                <DatePicker
                    dateFormat="MM/yyyy"
                    selected={selectedDate}
                    showMonthYearPicker
                    onChange={(date) => setSelectedDate(date)}
                    customInput={<CustomInput />}
                    maxDate={addDays(new Date(), 0)}
                />
            </div>

            <div>
                <Table hover className="text-center">
                    <thead className="">
                        <tr>
                            <th>일자</th>
                            <th>승인번호</th>
                            <th>카드번호</th>
                            <th>할부</th>
                            <th>카드청구액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {cardUsageHistory?.map((el) => 
                        <tr>
                            <td>{el.paymentDate}</td>
                            <td>{el.approvalNumber}</td>
                            <td>{el.businessNumber}</td> 
                            <td>{el.installment === 0 ? "일시불" : el.installment}</td>
                            <td>{el.cardCharge}</td>
                        </tr>
                        )} */}
                    </tbody>
                </Table>

                <div className="row d-flex justify-content-end me-3">
                    <div className="col-2 text-end">
                        <p>건수 : 
                            {/* {cardUsageHistory?.length} */}
                            </p>
                    </div>
                    <div className="col-2 text-end">
                        <b>합계: 
                            {/* {cardUsageHistory?.reduce((sum, currValue) => sum + parseInt(currValue.interestBee) + parseInt(currValue.cardCharge), 0)} */}
                        </b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreSalesManage;