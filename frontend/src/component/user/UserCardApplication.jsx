import { Button, Container, Form } from "react-bootstrap";


function UserCardApplication() {

return (
    <div className="mt-5">
        <Container className="container d-flex justify-content-center align-items-center" style={{height: "700px"}}>
        <Form style={{width: "400px"}}>
            <h4 className="fw-bold text-center">카드발급 신청</h4>

            <Form.Group className="mb-3" controlId="formPlaintextUserName">
                <Form.Label className="mb-0 ">카드상품</Form.Label>
                <Form.Control
                    type="text" 
                    readOnly           
                    className="mb-3 bg-light"
                    // defaultValue={userInfo.userName}
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formPlaintextUserBirth">
                <Form.Label className="mb-0 ">신용/체크</Form.Label>
                <Form.Control
                    type="text"
                    readOnly           
                    className="mb-3 bg-light"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPlaintextUserTel">
                <Form.Label className="mb-0 ">신청일</Form.Label>
                <Form.Control
                    type="text"
                    maxLength={13}
                    className="mb-4"
                />
            </Form.Group>

            <h5 className="fw-bold text-center mt-5">신청인 정보</h5>

            <Form.Group className="mb-3" controlId="formPlaintextUserName">
                <Form.Label className="mb-0 ">이름</Form.Label>
                <Form.Control
                    type="text" 
                    readOnly           
                    className="mb-3 bg-light"
                    // defaultValue={userInfo.userName}
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formPlaintextUserBirth">
                <Form.Label className="mb-0 ">생년월일</Form.Label>
                <Form.Control
                    type="text"
                    readOnly           
                    className="mb-3 bg-light"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPlaintextUserTel">
                <Form.Label className="mb-0 ">연락처</Form.Label>
                <Form.Control
                    type="text"
                    maxLength={13}
                    className="mb-4"
                />
            </Form.Group>

            <div className="d-grid gap-1">
                <Button className="px-3" variant="outline-dark" >신청하기</Button>
            </div>
                
            </Form>

        </Container>
        </div>
    );
}

// 신청일 입력시 하이픈 자동완성
export function applicationDateAutoFormat(applicationDate) {
	const number = applicationDate.trim().replace(/[^0-9]/g, "");
  
	if (number.length < 5) return number;
	if (number.length < 7) return number.replace(/(\d{4})(\d{1})/, "$1-$2");
	if (number.length < 10) return number.replace(/(\d{4})(\d{2})(\d{1})/, "$1-$2-$3");
	return number.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
}

export default UserCardApplication;