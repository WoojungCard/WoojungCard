import React from "react";

// 카드상품 리스트 보여주는 컴포넌트
function CardProductList() {
	return (
		<div className="container">
			<div className="row row-cols-2">
				<div className="col">
					<img
						className="d-block"
						src="/img/defaultCardImage.png"
						alt="[우정카드]"
						style={{width: "145px", height: "90px"}}
					/>
					
				</div>
				
				<div>
					<span className="fw-bold">[우정카드]</span><br/>
					<span>대중교통 15% 결제일 할인</span>
				</div>
			</div>
			
		</div>
		
	);
}

export default CardProductList;