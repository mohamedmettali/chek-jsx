import {Card,CardGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

function Produit () {
    const product1 = {
        name: "Adidas",
        price: "$90",
        description: "The new Adidas product!",
        imageUrl: "https://suggestedproducts.in/wp-content/uploads/2020/07/AdidasShoe.jpg",
      };
      const product2 = {
        name: "Puma",
        price: "$90",
        description: "The new puma product!",
        imageUrl: "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1554502827/puma_sale_gi6bap",
      };

      
    const product3 = {
      name: "Nike",
      price: "$90",
      description: "The new Nike product!",
      imageUrl: "https://www.slrlounge.com/wp-content/uploads/2016/02/Final.jpg",
    };

    return (
        <>

<CardGroup>
<Card>

  <Card.Body>
    <Card.Title> <p> {product1.name !== "" ? product1.name : "Hello there!"}</p>

{product1.name && <img src={product1.imageUrl} alt={product1.name} style={{ width: '400px', height: '250px'  }} />}</Card.Title>
    <Card.Text>
    {product1.price}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted"> {product1.description}</small>
  </Card.Footer>
</Card>
<Card>
  
  <Card.Body>
    <Card.Title> <p> {product2.name !== "" ? product2.name : "Hello there!"}</p>

{product2.name && <img src={product2.imageUrl} alt={product2.name} style={{ width: '100%', height: '100%' }} />}</Card.Title>
    <Card.Text>
    {product2.price}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted"> {product2.description}</small>
  </Card.Footer>
</Card>
<Card>
 
  <Card.Body>
    <Card.Title> <p> {product3.name !== "" ? product3.name : "Hello there!"}</p>

{product3.name && <img src={product3.imageUrl} alt={product3.name} style={{ width: '500px', height: '250px' }} />}    </Card.Title>
    <Card.Text>
    {product3.price}
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">  {product3.description}</small>
  </Card.Footer>
</Card>
</CardGroup>


   
      


 
        </>
    );

}

 
  export default Produit;