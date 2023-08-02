import Barchart from "./Barchart";

function FinancialManage() {
    return (
        <div className="mx-5 mt-5">
            <h4 className="fw-bold text-center mb-4">카드 매출 현황</h4>
            
            <div className="">
                <div className="row">
                    <div className="col border">
                        전체 카드 매출액
                    </div>
                    <div className="col border">
                        일별 카드소비 동향
                    </div>
                </div>

                <div className="row">
                    <div className="col border">
                        <span className="fw-bold">성/연령별 소비현황</span>
                        <Barchart/>
                    </div>
                    <div className="col border">
                        업종별 카드소비현황
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinancialManage;