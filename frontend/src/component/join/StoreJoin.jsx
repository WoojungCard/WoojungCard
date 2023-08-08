import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import { phoneNumberAutoFormat } from "./UserJoin";
import { birthAutoFormat } from "./UserJoin";
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-bootstrap/Modal';
import { userIdCheck } from "../../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { storeIdCheck, storeSignUp } from "../../store/store/storeSlice";
import { useNavigate } from "react-router-dom";

// 가맹점 회원가입
function StoreJoin() {
	const { storeIdCheckResult,signUpStatus } = useSelector((state) => state.store);
	
	const dispatch =useDispatch();
	
	const [insertStoreId, setInsertStoreId] = useState('');
	const [insertStorePwd, setInsertStorePwd] = useState('');
	const [insertStoreRepresent, setInsertStoreRepresent] = useState('');
	const [insertStoreName, setInsertStoreName] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [insertStoreAddr, setInsertStoreAddr] = useState('');
	const [insertStoreAddrDetail, setInsertStoreAddrDetail] = useState('');
	const [insertStoreDate, setInsertStoreDate] = useState('');
	const [insertStoreTel, setInsertStoreTel] = useState('');
	
	const [storeType, setStoreType] = useState('');
	
	const onChangeinputStoreId = (e) => {
		setInsertStoreId(e.target.value);
	};

			
//	사업자번호 입력 input에서 포커스 전환 시 사업자번호 중복체크
	const [idAlertOpen, setIdAlertOpen] = useState(false);
	
	useEffect(() => {
		handleBlur();
	},[insertStoreId]);
	
	const handleBlur = (e) => {
		dispatch(storeIdCheck(insertStoreId));
		if (storeIdCheckResult === false) {
			setIdAlertOpen(true);  // 중복일 경우, 알림 메시지 보이게 적용
		}else{
			setIdAlertOpen(false);
		}
		
	};
		
//	비밀번호 유효성 검증
	const [pwdAlertOpen, setPwdAlertOpen] = useState(false);
	const handlePwdBlur = (e) => {
		const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{10,25}$/
        const passwordCurrent = e.target.value;
        
        if (!passwordRegex.test(passwordCurrent)) {
			setPwdAlertOpen(true);
		} else {
			setPwdAlertOpen(false);
			setInsertStorePwd(passwordCurrent);
		}
	};
	
	const onChangeinputStoreRepresent = (e) => {
		setInsertStoreRepresent(e.target.value);
	};
	
	const onChangeinputStoreName = (e) => {
		setInsertStoreName(e.target.value);
	};
		
	const onChangeinputUserBirth = (e) => {
		const targetValue = birthAutoFormat(e.target.value);
		setInsertStoreDate(targetValue);
	}

	
	const onChangeinputStoreTel = (e) => {
		const targetValue = phoneNumberAutoFormat(e.target.value);  // 하이픈 자동완성
		setInsertStoreTel(targetValue);
	};
	
	const handleStoreType = (e) => {
		setStoreType(e.target.value);
	};
	
//	다음 주소 api 사용하는 모달창
	const [show, setShow] = useState(false);
	
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	const handleStoreAddrComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
		if (data.bname !== "") {
			extraAddress += data.bname;
		}
		if (data.buildingName !== "") {
			extraAddress +=
			extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
		}
		fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setShow(false);
    setZipCode(data.zonecode);  // 우편번호
    setInsertStoreAddr(fullAddress);  // 검색 후 클릭한 기본 주소
    }
    
    const onChangeinputStoreAddrDetail = (e) => {
		setInsertStoreAddrDetail(e.target.value);
	};
	
	const store = ({
	"businessNumber" : insertStoreId,
	"storePwd" : insertStorePwd,
	"representative" : insertStoreRepresent, 
	"storeName" : insertStoreName,
	"storeZipCode" : zipCode,
	"storeAddress1" :insertStoreAddr,
	"storeAddress2" :insertStoreAddrDetail, 
	"businessStartDate" : insertStoreDate,
	"businessType" : storeType,
	"storeTel" : insertStoreTel
	})
	
	
//	가맹점 신청하기 클릭
	const onClickStoreJoin = (e) => {
		e.preventDefault();
		dispatch(storeSignUp(store));
	};

	const navigate = useNavigate();

	useEffect(()=>{
		if (signUpStatus === "successed") {
			navigate("/");
		} else if (signUpStatus === "failed") {
			alert("등록에 실패하였습니다. 다시 시도해주세요.");
		}
	},[signUpStatus])
	
	
	return (
		<div className="mt-5">
			<Container className="container d-flex justify-content-center my-3">
				<Form style={{width: "500px"}}>
					<h4 className="fw-bold text-center">가맹점 회원가입</h4>
					
					<Form.Group controlId="formPlaintextStoreId">
						<Form.Label className="mb-0">사업자번호</Form.Label>
                        <Form.Control
                            type="text" 
							placeholder="사업자번호를 입력하세요"
                            onChange={onChangeinputStoreId}
                            onBlur={handleBlur}
                            className="mb-2"
                        />
                    </Form.Group>
                    
                    {idAlertOpen && (
						<p className="mb-1 text-danger" style={{marginTop: "-8px", fontSize: "13px"}}>
							&#8226; 사용할 수 없는 사업자번호입니다. 다른 사업자번호를 입력해 주세요.
						</p>
					)}

                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    	<Form.Label className="mb-0">비밀번호</Form.Label>
                        <Form.Control
                            type="password" 
							placeholder="비밀번호를 입력하세요"
                            onBlur={handlePwdBlur}
                            className="mb-2"
                        />
                    </Form.Group>
                    
                    {pwdAlertOpen && (
						<p className="mb-1 text-danger" style={{marginTop: "-16px", fontSize: "13px"}}>
							&#8226; 10~25자의 영문 소문자, 숫자를 사용해 주세요.
						</p>
					)}
                    
                    <Form.Group className="mb-3" controlId="formPlaintextRepresent">
						<Form.Label className="mb-0 ">대표자</Form.Label>
                        <Form.Control
                            type="text" 
							placeholder="대표자명을 입력하세요"
                            onChange={onChangeinputStoreRepresent}
                            className="mb-2"
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formPlaintextStoreName">
						<Form.Label className="mb-0 ">사업장명</Form.Label>
                        <Form.Control
                            type="text" 
							placeholder="사업장명을 입력하세요"
                            onChange={onChangeinputStoreName}
                            className="mb-2"
                        />
                    </Form.Group>
                    
                    
					<Form.Label className="mb-0 ">사업장주소</Form.Label>
					<Form.Control
                        type="text" 
						placeholder="검색"
                        style={{width: "75px"}}
                        onClick={handleShow}
                        value={zipCode}
                        className="mb-1"
                        readOnly
                    />
                    <Form.Control
                        type="text" 
						placeholder="사업장주소를 입력하세요"
                        value={insertStoreAddr}
                        onClick={handleShow}
                        className="mb-1"
                        readOnly
                    />
                    <Form.Control
                        type="text" placeholder="상세주소를 입력하세요"
                        onChange={onChangeinputStoreAddrDetail}
                        className="mb-2"
                    />
                    
                    
                    <Modal show={show} onHide={handleClose} animation={false} centered>
                    	<Modal.Body>
                    		<DaumPostcode onComplete={handleStoreAddrComplete}/>
                    	</Modal.Body>
                    </Modal>
                    
                    
                    <Form.Group className="mb-3" controlId="formPlaintextStoreType">
						<Form.Label className="mb-0 ">업종</Form.Label>
                        <Form.Select aria-label="Default select example" 
									 className="mb-2" 
									 onChange={handleStoreType}>
                        	<option>업종을 선택하세요</option>
                        	<option value="1">가전/가구</option>
                        	<option value="2">가정생활/서비스</option>
                        	<option value="3">교육/학원</option>
                        	<option value="4">문화/레저</option>
                        	<option value="5">미용</option>
                        	<option value="6">여행/교통</option>
                        	<option value="7">요식/유흥</option>
                        	<option value="8">유통</option>
                        	<option value="9">음/식료품</option>
                        	<option value="10">의료</option>
                        	<option value="11">자동차</option>
                        	<option value="12">주유</option>
                        	<option value="13">패션/잡화</option>
					    </Form.Select>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formPlaintextStoreStart">
						<Form.Label className="mb-0 ">사업개시일</Form.Label>
                        <Form.Control
                            type="text" 
							placeholder="사업개시일 8자리를 입력하세요"
                            onChange={onChangeinputUserBirth}
                            maxLength={10}
                            value ={insertStoreDate}
                            className="mb-2"
                        />
                    </Form.Group>
			        
			        <Form.Group className="mb-3" controlId="formPlaintextStoreTel">
						<Form.Label className="mb-0 ">연락처</Form.Label>
                        <Form.Control
                            type="text" 
							placeholder="연락처를 입력하세요"
                            onChange={onChangeinputStoreTel}
                            maxLength={13}
                            value={insertStoreTel}
                            className="mb-4"
                        />
                    </Form.Group>

                    <div className="d-grid gap-1">
                        <Button className="px-3" 
								variant="outline-dark" 
								onClick={onClickStoreJoin}>
									신청하기
						</Button>
                    </div>
                </Form>
                        
            </Container>
		</div>
	);
}
export function DateAutoFormat(date) {
	const number = date.trim().replace(/[^0-9]/g, "");
	
	if (number.length < 5) return number;
	if (number.length < 7) return number.replace(/(\d{4})(\d{1})/, "$1-$2");
	if (number.length < 10) return number.replace(/(\d{4})(\d{2})(\d{1})/, "$1-$2-$3");
	return number.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
}
export default StoreJoin;