import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const styles = {
    main: {
        textDecoration: 'none',
        fontSize: 27,
        fontWeight: 'bold',
        color: 'black'
    }

};


function MainHeader(props) {
	return (
		<>
			<Navbar style={{marginTop: 10}}>
		        <Container>
		        	<Navbar.Brand href="/" style={styles.main}>우정카드</Navbar.Brand>
		        </Container>
	        </Navbar>			
		</>
	);
}

export default MainHeader;