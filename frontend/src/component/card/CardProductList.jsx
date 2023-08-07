import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { cardList } from "../../store/card/cardSlice";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

// 카드상품 리스트 보여주는 컴포넌트
function CardProductList() {

	const {cardListData} = useSelector((state) => state.card);

	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(cardList());
	},[])

	const [cardType, setCardType] = useState("CREDIT");

	const handleCardType = (e) => {
		setCardType(e);
	}


	return (
		<div className="container mt-5 pt-3">

			<div className="d-flex justify-content-center mb-4">
				<ToggleButtonGroup 
					type="radio" 
					name="userType" 
					defaultValue="CREDIT" 
					value={cardType} 
					onChange={handleCardType}
					// size="lg"
					>
					<ToggleButton  variant="outline-dark" id="tbg-radio-1" value="CREDIT">
						신용카드
					</ToggleButton>
					<ToggleButton variant="outline-dark" id="tbg-radio-2" value="CHECK">
						체크카드
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
			
			<div className="row row-cols-2 pt-3 mx-5 px-5">
			{cardListData?.map((el)=>
			el.state === "PROCEEDING" &&
			el.cardType === cardType &&
				<Link to={`/user/cardapplication/${el.id}`}
					key={el.id}
					style={{color: "black", textDecoration: "none"}}>
						
						<div className="row my-4 py-2">
							<div className="col-4">
								<img
									className="d-block"
									src="/img/defaultCardImage.png"
									alt="[우정카드]"
									style={{width: "145px", height: "90px"}}
								/>
							</div>
							<div className="col">
								<span className="fw-bold">[{el.cardName}]</span><br/>
								<span>{el.cardInfo}</span>
							</div>
						</div>						
				</Link>
)}
			</div>
		</div>		
	);
}

export default CardProductList;