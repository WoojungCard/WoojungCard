function UserCardAppStatus() {

    return (
        <div className="mt-5">
            <h4 className="fw-bold text-center mb-5">카드신청현황조회</h4>
            <div className="container d-flex justify-content-center align-items-center">
            <table>
                <thead className="">
                    <th>카드번호</th>
                    <th>카드상품</th>
                    <th>신용/체크</th>
                    <th>신청일</th>
                    <th>지급일</th>
                </thead>
                <tbody className="ml-3, mr-3">
                    <tr>
                        <td>5107-4315-5135-2425</td>
                        <td>청년혜택카드</td>
                        <td>체크카드</td>
                        <td>2023-07-17</td>
                        <td>지급예정</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}
export default UserCardAppStatus; 