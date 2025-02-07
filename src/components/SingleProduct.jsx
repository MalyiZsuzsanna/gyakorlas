import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

 export const SingleProduct = ({id,title,category,description,price,thumbnail}) => {
    console.log(title)
  return (
    <div>
        <Card
  style={{ width: '18rem', height:'100%' }}
>
  <img alt={title} src={thumbnail}
  />
  <CardBody style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
    <CardTitle tag="h5">
      {title}
    </CardTitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6"
    >
      {category}
    </CardSubtitle>
    <CardText>
      {description}
    </CardText>
    <CardText>
      Price:{price} €
    </CardText>
    <Button style={{background:'blue'}}>
      Add to cart
    </Button>
  </CardBody>
</Card>
    </div>
  )
}

