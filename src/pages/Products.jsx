import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = ({ products = [], carts = [], setCarts }) => {
    
    const addToCart = (product) => {
        const isInCart = carts.find(item => item.id === product.id);
        if (!isInCart) {
            setCarts([...carts, product]);
        }
    };

    const isProductInCart = (productId) => {
        return carts.some(item => item.id === productId);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div className="products-items-container">
                {products.map((product) => {
                    const inCart = isProductInCart(product.id);
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
                                    {inCart ? (
                                        <Button variant="secondary" disabled>
                                            added to carts
                                        </Button>
                                    ) : (
                                        <Button variant="primary" onClick={() => addToCart(product)}>
                                            Add to carts
                                        </Button>
                                    )}
                                </div>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default Products;