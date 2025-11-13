import { Button, Card, Badge, Alert } from 'react-bootstrap';

const Carts = ({ carts = [], setCarts }) => {
    
    const deleteFromCart = (productId) => {
        setCarts(carts.filter(item => item.id !== productId));
    };

    const getTotalPrice = () => {
        return carts.reduce((sum, item) => sum + item.price, 0);
    };

    const handleCheckout = () => {
        alert(`ชำระเงินจำนวน $${getTotalPrice().toFixed(2)} สำเร็จ!\n(นี่เป็นเพียงการจำลอง)`);
        setCarts([]);
    };

    if (carts.length === 0) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <Alert variant="info" className="mt-4">
                    <Alert.Heading>ตะกร้าสินค้าว่างเปล่า</Alert.Heading>
                    <p>กรุณาเพิ่มสินค้าลงในตะกร้าจากหน้า Products</p>
                </Alert>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px' }}>
            <div className="products-items-container">
                {carts.map((product) => {
                    return (
                        <Card key={product.id} style={{ width: '100%' }}>
                            <Card.Img 
                                variant="top" 
                                src={product.thumbnailUrl} 
                                style={{ height: '150px', objectFit: 'cover' }} 
                            />
                            <Card.Body>
                                <Card.Title style={{ 
                                    fontSize: '0.9rem', 
                                    minHeight: '3em',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical'
                                }}>
                                    {product.title}
                                </Card.Title>
                                <Card.Text className="text-center fw-bold fs-5 text-primary">
                                    ${product.price.toFixed(2)}
                                </Card.Text>
                                <div className="d-grid">
                                    <Button 
                                        variant="danger" 
                                        onClick={() => deleteFromCart(product.id)}
                                    >
                                        Delete from Carts
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
            
            <div style={{ 
                marginTop: '30px', 
                padding: '20px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap mb-3">
                    <h5 className="mb-0">
                        Products: 
                        <Badge bg="danger" className="ms-2">{carts.length} items</Badge>
                    </h5>
                    <span className="text-muted">-</span>
                    <h5 className="mb-0">
                        Total price: 
                        <Badge bg="success" className="ms-2">${getTotalPrice().toFixed(2)}</Badge>
                    </h5>
                </div>
                <Button 
                    variant="warning" 
                    size="lg" 
                    onClick={handleCheckout}
                    className="fw-bold"
                >
                    Checkout 💳
                </Button>
            </div>
        </div>
    );
}

export default Carts;