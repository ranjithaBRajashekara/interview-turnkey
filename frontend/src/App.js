import logo from './logo.svg';
import './App.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'

function App() {
  return (
    <div className="App">
    <div className='nav'>
      <ul>
        <li className='input-div'><input className='input'  placeholder='Search' type='text'/></li>
        <li><a href='/' className='nav-items'>Home </a></li>
        <li><a href='/' className='nav-items'>Courses </a></li>
        <li className='nav-items-cart'><a href='/'><AiOutlineShoppingCart size='25px' color='black'/> </a></li>
        <li className='nav-items-login'><a className='login'>Login</a></li>
      </ul>
    </div>
    <div className='design'>
      <div className='design-heading'>
        <h1 className='desin-top-heading'>Design Courses</h1>
        <h2 className='design-bottom-heading'>Courses to get you started</h2>
      </div>
    </div>
    <div className='b-container'>
      <div className='left-column'>
        <div className='filter'>Filter</div>
        <div className='container'>
        <div className='heading'>Topic</div>
        <div><input className='topic-input' type='text'/></div>
        <div className='heading'>Level</div>
        <div><input type="checkbox" id="Beginner" name="Beginner" value="Beginner"/>Beginner</div>
        <div><input type="checkbox" id="Beginner" name="Beginner" value="Beginner"/>Intermediate</div>
        <div><input type="checkbox" id="Beginner" name="Beginner" value="Beginner"/>Advanced</div>
        <div><input type="checkbox" id="Beginner" name="Beginner" value="Beginner"/>All of the Above</div>
        <div className='heading'>Price</div>
        <div><input type="checkbox" id="Beginner" name="Beginner" value="Beginner"/>499 - 1000</div>
        <div><input type="checkbox" id="Beginner" name="Beginner" value="Beginner"/>1000 - 1500</div>
        <div><input type="checkbox" id="Beginner" name="Beginner" value="Beginner"/>499 - 1000</div>
        <div><input type="checkbox" id="Beginner" name="Beginner" value="Beginner"/>1000 - 1500</div>
        </div>
      </div>
      <div className='right-column'>
        <div className='courses'>
            <div className='course-image'></div>
            <div className='ux-design'>UI/UX Designing Course</div>
            <div className='ux-design'>Rs. 699</div>
        </div>
        <div className='courses'>
            <div className='course-image'></div>
            <div className='ux-design'>UI/UX Designing Course</div>
            <div className='ux-design'>Rs. 699</div>
        </div>
        <div className='courses'>
            <div className='course-image'></div>
            <div className='ux-design'>UI/UX Designing Course</div>
            <div className='ux-design'>Rs. 699</div>
        </div>
        <div className='courses'>
            <div className='course-image'></div>
            <div className='ux-design'>UI/UX Designing Course</div>
            <div className='ux-design'>Rs. 699</div>
        </div>
        <div className='courses'>
            <div className='course-image'></div>
            <div className='ux-design'>UI/UX Designing Course</div>
            <div className='ux-design'>Rs. 699</div>
        </div>
        <div className='courses'>
            <div className='course-image'></div>
            <div className='ux-design'>UI/UX Designing Course</div>
            <div className='ux-design'>Rs. 699</div>
        </div>
      </div>
    </div>
    <div className='heading'>Advance Your career with new skill</div>
    <div className='end'>
      <div className='img'></div>
      <div className='end-content'>
      <div className='end-heading'>UI/UX Designing Course</div>
      {/* <div className='end-details'>Lorem ipsum is the dummy text used tokdkdi kdolll kolk yundjkdi idkdldie dkdldiek idiekm in the nrooot .</div> */}
      <div class='justify'>
        <p class="paragraph">Lorem ipsum is the dummy text used tokdkdi kdolll kolk yundjkdi idkdldie dkdldiek idiekm in the nrooot .</p>
      </div>
      <div className='end-cost'>Rs. 699</div>
      </div>
    </div>
    </div>
  );
}

export default App;
