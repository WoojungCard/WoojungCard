import Form from 'react-bootstrap/Form';
import { userCardAppInfo } from "../../store/user/userSlice";
function FormControlDisabledExample() {
  return (
    <>
      <Form.Control
        type="text"
        placeholder="Disabled input"
        aria-label="Disabled input example"
        disabled
        readOnly
      />
      <br />
      <Form.Control
        type="text"
        placeholder="Disabled readonly input"
        aria-label="Disabled input example"
        readOnly
      />
      <br />
      
       <Form.Control
       
        type="text" 
        placeholder=""
        aria-label="Disabled input example"
        readOnly
      />
      <br />
      <Form.Group className="mb-3" controlId="formPlaintextStoreTel">
      <Form.Label className="mb-0">연락처</Form.Label>
       <Form.Control
        type="text"
        placeholder="변경할 연락처를 입력하세요"
        aria-label="Disabled input example"
       // ohChange={onchangeInputStoreTel}
        maxLength={13}
      />
      </Form.Group>
         <Form.Group className="mb-3" controlId="formPlaintextStoreTel">
      <Form.Label className="mb-0">비밀번호</Form.Label>
       <Form.Control
        type="text"
        placeholder="변경할 비밀번호를 입력하세요"
        aria-label="Disabled input example"
       // ohChange={onchangeInputStoreTel}
        maxLength={13}
      />
      </Form.Group>
      
       <br />
       <Form.Control
        type="text"
        placeholder="Disabled readonly input"
        aria-label="Disabled input example"
        readOnly
      />
    </>
  );
}

export default FormControlDisabledExample;