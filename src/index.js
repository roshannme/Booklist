import React from "react"
import ReactDom from 'react-dom'


//Stateles functional comp
// always return JSX
//JSX Rules
//return single element
// use  div section or fragment
//className instead of class
// close every element
// formatting
// Nested elements
// React Dev tools
// Book List 
//CSS
//JSX inline css stronger than css

//css
import './index.css'

//setup vars
        const firstBook = {
          img:'https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SX320_BO1,204,203,200_.jpg',
          title:'It Ends with Us',
          author:'hoover'
        
        };

          const secondBook = {
          img:'https://m.media-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg',
          title:'Atomic Habits',
          author:'James'
        
        };

        const thirdBook = {
          img:'https://m.media-amazon.com/images/I/41zFito0fdL._SX373_BO1,204,203,200_.jpg',
          title:'Gotodinner',
          author:'hardcover'
        
        };

        function BookList(){
        return (
          <section>
            <Book
            img={firstBook.img}
            title={firstBook.title}
            author={firstBook.author}
            />
            <Book 
            img={secondBook.img} title={secondBook.title} 
            author={secondBook.author}/>

            <Book
            img={thirdBook.img} title={thirdBook.title}
            author={thirdBook.author}/>

          </section>

        );
        }

       const Book = ({img,title,author}) =>{
        // const {img,title,author} = props;
        return (
        <article className='book'>
            <img src={img} alt=''/>
            <h1>{title}</h1>
            <h4>{author}</h4>
            
        </article>
        );
       }
       
        ReactDom.render(<BookList/>,document.getElementById('root'));
