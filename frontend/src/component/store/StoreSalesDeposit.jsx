import { forwardRef, useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from "date-fns";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getStorePaymentDeposit, insertStorePayment, storeSalesReceiptDetails } from "../../store/store/storeSlice";

function StoreSalesDeposit() {

    const {storeSalesData, depositData, insertStatus} = useSelector((state) => state.store);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [selectedDate, setSelectedDate] = useState(new Date());
    const selectedMonth = moment(selectedDate).format('M');
    const selectedYear = moment(selectedDate).format('YYYY');

    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="btn btn-outline-dark btn-sm" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    const customHeight = {
        height: "40px",
    };

    useEffect(()=>{
        dispatch(storeSalesReceiptDetails({"targetYear" : selectedYear, "targetMonth" : selectedMonth}))
    },[selectedYear, selectedMonth])

    useEffect(()=>{
        dispatch(getStorePaymentDeposit({"targetYear" : selectedYear, "targetMonth" : selectedMonth}))
    }, [selectedYear, selectedMonth])

    const onClickHandler = (e) => {
        e.preventDefault();
        console.log(depositData)
        dispatch(insertStorePayment({"targetYear" : selectedYear, "targetMonth" : selectedMonth, "payment" : depositData}));
    }

    // useEffect(()=>{
    //     if      (insertStatus === "successed")  navigate(0);
    //     else if (insertStatus === "failed")     alert("입금 실패하였습니다. 다시 시도해주세요.");
    // },[insertStatus])

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
                            <td>{storeSalesData.numberOfCases}건</td>
                        </tr>
                        <tr style={customHeight}>
                            <th>매출</th>
                            <td>{storeSalesData.monthlySales}원</td>
                        </tr>
                        <tr className="border-bottom" style={customHeight}>
                            <th>수수료</th>
                            <td>2%</td>
                        </tr>
                        <tr style={customHeight}>
                            <th>납부금액</th>
                            <td>{storeSalesData.monthlySales * 0.02}원</td>
                        </tr>
                        <tr className="border-bottom" style={customHeight}>
                            <th>실납부금액</th>
                            <td>{!isNaN(depositData) ? depositData : 0}원</td>
                        </tr>
                        <tr style={customHeight}>
                            <th>미납금</th>
                            <td>{depositData ? storeSalesData.monthlySales * 0.02 - depositData : storeSalesData.monthlySales * 0.02} 원</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            {(depositData ? storeSalesData.monthlySales * 0.02 - depositData : storeSalesData.monthlySales * 0.02) > 0 ?
            <div className="d-flex justify-content-center mt-5">
                <Link to="/">
                    <Button type="button" className="px-3" variant="outline-dark" value={depositData}
                    onClick={onClickHandler}
                    >
                        입금하기
                    </Button>
                </Link>
            </div>
            :
            null
            }
        </div>
    );
}

export default StoreSalesDeposit;