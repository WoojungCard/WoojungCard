import React from "react";
import {Link} from "react-router-dom";

// 카드상품 리스트 보여주는 컴포넌트
function CardProductList() {
	return (
		<div className="container mt-5 pt-5">
		
			<h4 className="fw-bold text-center">신용카드</h4>
			
			<div className="row row-cols-2 pt-3 mx-5 px-5">
			
				<Link to="/cardProductDetail" 
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
								<span className="fw-bold">[우정카드]</span><br/>
								<span>대중교통 15% 결제일 할인</span>
							</div>
						</div>
				</Link>
				
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
						<span className="fw-bold">[우정카드]</span><br/>
						<span>대중교통 15% 결제일 할인</span>
					</div>
				</div>
				
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
						<span className="fw-bold">[우정카드]</span><br/>
						<span>대중교통 15% 결제일 할인</span>
					</div>
				</div>
				
				
			</div>
			
			
		</div>		
	);
}

export default CardProductList;