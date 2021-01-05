import './test.css'
import logo from './logo.jpg'


console.log("hello webpack!")
document.getElementById("root").innerHTML='<h1>hello</h1>'

const fn = () =>{
    console.log('fn()...')
}

const image = new Image()
image.src = logo;
document.getElementById('root').appendChild(image)