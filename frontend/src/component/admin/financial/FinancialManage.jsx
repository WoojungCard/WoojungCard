import BarChart from "./BarChart";
import BusinessTypeChart from "./BusinessTypeChart";
import LineChart from "./LineChart";
import TotalSales from "./TotalSales";

function FinancialManage() {
    return (
        <div className="mx-5 mt-5">
            <h4 className="fw-bold text-center mb-4">카드 매출 현황</h4>
            
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
                    <div className="col m-3 bg-white rounded-3">
                        <span className="fw-bold">성/연령별 소비현황</span>
                        <BarChart/>
                    </div>
                    <div className="col m-3 bg-white rounded-3">
                        <span className="fw-bold">업종별 카드소비현황</span>
                        <BusinessTypeChart/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinancialManage;