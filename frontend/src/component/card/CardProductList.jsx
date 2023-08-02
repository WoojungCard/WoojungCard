import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { cardList } from "../../store/card/cardSlice";

// 카드상품 리스트 보여주는 컴포넌트
function CardProductList() {

	const {cardListData} = useSelector((state) => state.card);

	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(cardList());
	},[])

	return (
		<div className="container mt-5 pt-5">
		
			<h4 className="fw-bold text-center">신용카드</h4>
			
			<div className="row row-cols-2 pt-3 mx-5 px-5">
			{cardListData?.map((el)=>
			el.state === "PROCEEDING" &&
				<Link to={`/user/cardapplication/${el.id}`}
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