import {Fragment} from 'react'
import './header.css'

function Header() {
  return (
    <Fragment>
        <header className='header'>
         <h1>Meals</h1>
         <button>Cart</button>
        </header>
        <div className='main-image'>
            <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt="food" />
        </div>
    </Fragment>
  )
}

export default Header