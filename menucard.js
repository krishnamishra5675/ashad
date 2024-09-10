
 export function Products(props) {
     return(
         <div className='productList'>
             <div key={props.id} className='productCard'>
                 <img src={props.image} alt='product-img' className='productImage'></img>




                 <div className='productCard__content'>
                     <h3 className='productName'>{props.name}</h3>
                     <div className='displayStack__1'>
                         <h4 className='productDescription'>{props.description}</h4>

                     </div>

                 </div>
             </div>
         </div>
     )
 }
