import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

function Join() {
	return (
		<div>
			<Container className="container d-flex justify-content-center align-items-center">
				<Link to="/userJoin">
					<Button className="ms-1 me-4 p-3" variant="outline-dark">개인고객 회원가입</Button>
				</Link>
				
				<Link to="/storeJoin">
					<Button className="p-3" variant="outline-dark">가맹점 회원가입</Button>
				</Link>
			</Container>
			
		</div>
	);
}

export default Join;