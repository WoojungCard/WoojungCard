function TotalSales() {
    return (
        <div className="text-center mt-5 pt-5">
            <span className="fw-bold fs-4">전체 카드 매출액</span>
            <br />
            <span className="fw-bold fs-3">40,831</span>
            <span className="fw-bold fs-3">억원</span>
            <br />
            <span className="fw-bold fs-4 text-danger">+1,755</span>
            <span className="fw-bold fs-4 text-danger">억원</span>
            <span className="fw-bold text-danger">(전년대비)</span>
        </div>
    );
}

export default TotalSales;