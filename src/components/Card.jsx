import React from 'react';

const Card = () => {
  return <>
   <div class="container-fluid">
       <div class="my-2 shadow p-2">
         <h2 class="text-center">Latest Products</h2>
       </div>
       <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card shadow-lg">
            <img src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <button class="btn btn-success">View Details</button>
              
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-lg">
            <img src="https://myrepublica.nagariknetwork.com/uploads/media/eeee_20210524140327.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <button class="btn btn-success">View Details</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-lg">
            <img src="https://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <button class="btn btn-success">View Details</button>
          </div>
        </div>
        </div>
        <div class="col">
          <div class="card shadow-lg">
            <img src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <button class="btn btn-success">View Details</button>
            </div>
          </div>
        </div>
      </div>
       
     </div>
  </>;
};

export default Card;
