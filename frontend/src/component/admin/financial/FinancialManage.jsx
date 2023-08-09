import { forwardRef, useEffect, useState } from "react";
import BarChart from "./BarChart";
import BusinessTypeChart from "./BusinessTypeChart";
import LineChart from "./LineChart";
import TotalSales from "./TotalSales";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from "date-fns";
import moment from "moment";

// 카드사 관리자_정산관리
function FinancialManage() {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const selectedMonth = moment(selectedDate)                    .format('YYYY-MM');
    const lastYearMonth = moment(selectedDate).subtract(1, 'year').format('YYYY-MM');

    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="btn btn-outline-dark btn-sm ms-2" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    return (
        <div className="mx-5 mt-5">
            <h4 className="fw-bold text-center mb-3">카드 매출 현황</h4>
            
            <div className="bg-light px-4">
                <div className="row">
                    <div className="col m-3 bg-white rounded-3">
                        {/* 전체 카드 매출액 */}
                        <TotalSales/>
                    </div>
                    <div className="col m-3 bg-white rounded-3">
                        <span className="fw-bold">일별 카드소비 동향</span>
                        <LineChart/>
                    </div>
                </div>

                <div className="row">
                    <div className="">
                        <DatePicker
                            showIcon
                            dateFormat="MM/yyyy"
                            selected={selectedDate}
                            showMonthYearPicker
                            onChange={(date) => setSelectedDate(date)}
                            customInput={<CustomInput />}
                            maxDate={addDays(new Date(), 0)}
                        />
                    </div>
                    <div className="col m-3 bg-white rounded-3">
                        <span className="fw-bold">성/연령별 소비현황</span>
                        <BarChart selectedMonth={selectedMonth}/>
                    </div>
                    <div className="col m-3 bg-white rounded-3">
                        <span className="fw-bold">업종별 카드소비현황</span>
                        <BusinessTypeChart selectedMonth={selectedMonth} lastYearMonth={lastYearMonth}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinancialManage;