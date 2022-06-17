import React from 'react'

const Meals = () => {
  return (
    <div>
    <div className='meals'>
        <div className='heading'>
            <h1>BROWSE CATOGORIES</h1>
        </div>
        <div className='line'>
            <hr />
        </div>
        </div>

        <div className='mainimage'>
            <div className='mainimageinside'>
                <img className='image' src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=16.66" alt="" />
                <p>CHICKEN BUCKETS</p>
            </div>
            <div className='mainimageinside'>
                <img className='image' src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT200.jpg?ver=16.66" alt="" />
                <p>NEW LAUNCH</p>
            </div>
            <div className='mainimageinside'>
                <img className='image' src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=16.66" alt="" />
                <p>CHICKEN ROLLS</p>
            </div>
            <div className='mainimageinside'>
                <img className='image' src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=16.66" alt="" />
                <p>BIRIYANI BUCKETS</p>
            </div>
        </div>
    </div>
  )
}

export default Meals;