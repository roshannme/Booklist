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
//learning git
//props
// props child
// Refactoring

//css
import './index.css'

//setup vars
const books = [
{
          img:'https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SX320_BO1,204,203,200_.jpg',
          title:'It Ends with Us',
          author:'hoover'
        
        },

{
          img:'https://m.media-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg',
          title:'Atomic Habits',
          author:'James'
        
        },

{
          img:'https://m.media-amazon.com/images/I/41zFito0fdL._SX373_BO1,204,203,200_.jpg',
          title:'Gotodinner',
          author:'hardcover'
        
        },

        {
          img:'https://m.media-amazon.com/images/I/518z5dvykPL._SX348_BO1,204,203,200_.jpg',
          title:'Intresting facts about minds',
          author:'Jordan'
        
        },

      ];


        function BookList(){
          return (
            <section className='bookname'>{books.map((book)=>{
              const{img,title,author} = book;
              return(
              <Book book={book}> </Book>

              );
            })}

            </section>
          );
        }


      //  const Book = ({img,title,author}) =>{
        const Book = (props)=>{
        const {img,title,author} = props.book;

        return (
        <article className='book'>
            <img src={img} alt=''/>
            <h1>{title}</h1>
            <h4>{author}</h4>
            
        </article>
        );
       };
       
        ReactDom.render(<BookList/>,document.getElementById('root'));
