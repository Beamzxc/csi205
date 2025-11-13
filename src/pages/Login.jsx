import { useRef, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { verifyUser } from '../data/user';

const Login = ({ setToken, setRole }) => {
    const userRef = useRef();
    const passRef = useRef();
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const username = userRef.current.value;
        const password = passRef.current.value;

        const result = verifyUser(username, password);
        
        if (result) {
            setToken(result.token);
            setRole(result.role);
            setError('');
        } else {
            setError('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
            userRef.current.value = '';
            passRef.current.value = '';
            userRef.current.focus();
        }
    };

    return (
        <div 
            className="d-flex justify-content-center align-items-center" 
            style={{ minHeight: '70vh' }}
        >
            <div 
                style={{ 
                    width: '500px',
                    padding: '40px',
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center'
                }}
            >
                {error && (
                    <Alert variant="danger" className="mb-3">
                        {error}
                    </Alert>
                )}

                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">USER:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="user"
                            ref={userRef}
                            required
                            style={{ 
                                padding: '12px',
                                textAlign: 'center',
                                backgroundColor: '#333',
                                color: '#fff',
                                border: '2px solid #000'
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">PASS:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="pass"
                            ref={passRef}
                            required
                            style={{ 
                                padding: '12px',
                                textAlign: 'center',
                                backgroundColor: '#333',
                                color: '#fff',
                                border: '2px solid #000'
                            }}
                        />
                    </Form.Group>

                    <Button 
                        variant="success" 
                        type="submit"
                        style={{ 
                            padding: '10px 40px',
                            fontWeight: 'bold',
                            fontSize: '18px'
                        }}
                    >
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;