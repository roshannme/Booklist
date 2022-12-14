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
//Key prop
// user events
// Import export


//css
import './index.css'

import {books} from './books'
import Book from './Book'

//setup vars


        function BookList(){
          return (
            <section className='bookname'>{books.map((book)=>{
              const{img,title,author} = book;
              return(
              <Book book key={book.id} book={book}> </Book>

              );
            })}

            </section>
          );
        }



       
        ReactDom.render(<BookList/>,document.getElementById('root'));
