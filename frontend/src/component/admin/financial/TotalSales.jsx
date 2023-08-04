import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminTotalSalesData } from "../../../store/admin/adminSlice";

// 전체 카드 매출액(전년도와 비교)
function TotalSales() {

    const dispatch = useDispatch();
    const {totalSalesData} = useSelector((state) => state.admin);
    const [thisYearTotal, setThisYearTotal] = useState(null);
    const [lastYearTotal, setLastYearTotal] = useState(null);
    const [diff, setDiff] = useState(null);

    useEffect(() => {
        dispatch(adminTotalSalesData());
    }, []);

    useEffect(() => {
        if (totalSalesData) {
            setThisYearTotal(totalSalesData.thisYearTotal);
            setLastYearTotal(totalSalesData.lastYearTotal);
        }
    }, [totalSalesData]);

    useEffect(() => {
        if (thisYearTotal !== null && lastYearTotal !== null) {
            setDiff(thisYearTotal - lastYearTotal);
        }
    }, [thisYearTotal, lastYearTotal]);

    return (
        <div className="text-center mt-5 pt-5">
            <span className="fw-bold fs-4">전체 카드 매출액</span>
            <br />
            {diff !== null && !isNaN(diff) && (
                <div>
                    <span className="fw-bold fs-3">{thisYearTotal.toLocaleString()}</span>
                    <span className="fw-bold fs-3">원</span>
                    <br />
                    <span className={`fw-bold fs-4 ${diff > 0 ? 'text-danger' : 'text-primary'}`}>
                        {diff > 0 ? `${diff.toLocaleString()}원` : `-${Math.abs(diff.toLocaleString())}원`}
                    </span>
                    <span className="fw-bold text-danger">(전년대비)</span>
                </div>
            )}
        </div>
    );
}

export default TotalSales;