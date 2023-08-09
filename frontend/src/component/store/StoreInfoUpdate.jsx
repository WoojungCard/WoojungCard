import React, { useEffect, useInsertionEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import { phoneNumberAutoFormat } from "../join/UserJoin";
import { birthAutoFormat } from "../join/UserJoin";
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-bootstrap/Modal';
import { userIdCheck } from "../../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { storeGetInfo, storeIdCheck, storeInfoUpdate, storeSignUp } from "../../store/store/storeSlice";
import { useNavigate } from "react-router-dom";

// 가맹점 회원가입
function StoreInfoUpdate() {
	
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
	
	const { storeInfo, updateStatus } = useSelector((state) => state.store);
	
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
  	useEffect(()=> {
        dispatch(storeGetInfo());
    },[]);
    
    useEffect(() => {
		setInsertStoreRepresent(storeInfo.representative);
		setZipCode(storeInfo.storeZipCode);
		setInsertStoreAddr(storeInfo.storeAddress1);
		setInsertStoreAddrDetail(storeInfo.storeAddress2);
		setInsertStoreTel(storeInfo.storeTel);
	}, [storeInfo]);
	
	
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
		console.log(insertStoreId);
		if (storeInfo === false) {
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
	
	const info = ({
		"representative" : insertStoreRepresent, 
		"storePwd" : insertStorePwd,
		"storeZipCode" : zipCode,
		"storeAddress1" :insertStoreAddr,
		"storeAddress2" :insertStoreAddrDetail, 
		"storeTel" : insertStoreTel
	})
	
	const onClickStoreInfoUpdate = (e) => {
	    e.preventDefault();
	    dispatch(storeInfoUpdate(info));
	}

	useEffect(()=>{
		if (updateStatus === "successed") {
			navigate(0)
		} else if (updateStatus === "failed") {
			alert("변경에 실패하였습니다. 다시 시도해주세요.");
		}
	},[updateStatus])

	return (
		<div className="mt-5">
			<Container className="container d-flex justify-content-center my-3">
				<Form style={{width: "500px"}}>
					<h4 className="fw-bold text-center">가맹점 정보 변경</h4>
					
					<Form.Group controlId="formPlaintextStoreId">
						<Form.Label className="mb-0">사업자번호</Form.Label>
                        <Form.Control
                            type="text" placeholder="사업자번호를 입력하세요"
                            onChange={onChangeinputStoreId}
                            onBlur={handleBlur}
                            defaultValue={storeInfo.businessNumber}
                            className="mb-2"
                            disabled
                            style={{ backgroundColor: '#B5B4B4', color: '#100F0F' }}
                        />
                    </Form.Group>
                    
                    {idAlertOpen && <p className="mb-1 text-danger" style={{marginTop: "-8px", fontSize: "13px"}}>&#8226; 사용할 수 없는 사업자번호입니다. 다른 사업자번호를 입력해 주세요.</p>}

                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    	<Form.Label className="mb-0">비밀번호</Form.Label>
                        <Form.Control
                            type="password" 
							placeholder="변경할 비밀번호를 입력하세요"
                            onBlur={handlePwdBlur}
                            value={storeInfo.storePwd}
                            className="mb-2"
                        />
                    </Form.Group>
                    
                    {pwdAlertOpen && <p className="mb-1 text-danger" style={{marginTop: "-16px", fontSize: "13px"}}>&#8226; 10~25자의 영문 소문자, 숫자를 사용해 주세요.</p>}
                    
                    <Form.Group className="mb-3" controlId="formPlaintextRepresent">
						<Form.Label className="mb-0 ">대표자</Form.Label>
                        <Form.Control
                            type="text" 
                            placeholder="대표자명을 입력하세요"
                            onChange={onChangeinputStoreRepresent}
                            value={storeInfo.representative}
                            className="mb-2"
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formPlaintextStoreName">
						<Form.Label className="mb-0 ">사업장명</Form.Label>
                        <Form.Control
                            type="text" 
							placeholder="사업장명을 입력하세요"
                            onChange={onChangeinputStoreName}
                            defaultValue={storeInfo.storeName}
                            className="mb-2"
                            disabled
                            style={{ backgroundColor: '#B5B4B4', color: '#100F0F' }}
                        />
                    </Form.Group>
                    
                    
					<Form.Label className="mb-0 ">사업장주소</Form.Label>
					<Form.Control
                        type="text" 
						placeholder="검색"
                        style={{width: "75px"}}
                        onClick={handleShow}
                        value={storeInfo.storeZipCode}
                        className="mb-1"
                    />

                    <Form.Control
                        type="text" 
						placeholder="사업장주소를 입력하세요"
                        onClick={handleShow}
                        value={storeInfo.storeAddress1}
                        className="mb-1"
                    />
                    <Form.Control
                        type="text" 
						placeholder="상세주소를 입력하세요"
                        onChange={onChangeinputStoreAddrDetail}
                        value={storeInfo.storeAddress2}
                        className="mb-2"
                    />
                    
                    
                    <Modal show={show} onHide={handleClose} animation={false} centered>
                    	<Modal.Body>
                    		<DaumPostcode onComplete={handleStoreAddrComplete}/>
                    	</Modal.Body>
                    </Modal>
                    
                    
                    <Form.Group className="mb-3" controlId="formPlaintextStoreType">
						<Form.Label className="mb-0 ">업종</Form.Label>
                        <Form.Select aria-label="Default select example" className="mb-2" onChange={handleStoreType} 
							defaultValue={storeInfo.businessType}
							disabled
							style={{ backgroundColor: '#B5B4B4', color: '#100F0F' }}
                        >


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
                            defaultValue={storeInfo.businessStartDate}
                            maxLength={10}
                            className="mb-2"
                            disabled
                            style={{ backgroundColor: '#B5B4B4', color: '#100F0F' }}
                        />
                    </Form.Group>
			        
			        <Form.Group className="mb-3" controlId="formPlaintextStoreTel">
						<Form.Label className="mb-0 ">연락처</Form.Label>
                        <Form.Control
                            type="text" 
							placeholder="연락처를 입력하세요"
                            onChange={onChangeinputStoreTel}
                            maxLength={13}
                          	value={storeInfo.storeTel}
                            className="mb-4"
                        />
                    </Form.Group>

                    <div className="d-grid gap-1">
                        <Button className="px-3" variant="outline-dark" onClick={onClickStoreInfoUpdate}>변경하기</Button>
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
export default StoreInfoUpdate;