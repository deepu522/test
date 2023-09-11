import React from 'react'
import Book from './Books'

const book1={
image:"https://www.amazon.in/Power-Your-Subconscious-Mind/dp/8194790832/ref=sr_1_3?adgrpid=59956079195&ext_vrnc=hi&hvadid=596980891615&hvdev=c&hvlocphy=9147754&hvnetw=g&hvqmt=e&hvrand=6405081735846610804&hvtargid=kwd-529045278&hydadcr=23636_2222263&keywords=amazon+books+store&qid=1693908207&sr=8-3",
title:"Example",
publisher:"Author1",
price: 499,
};

const book2={
    image:"https://www.amazon.in/Power-Your-Subconscious-Mind/dp/8194790832/ref=sr_1_3?adgrpid=59956079195&ext_vrnc=hi&hvadid=596980891615&hvdev=c&hvlocphy=9147754&hvnetw=g&hvqmt=e&hvrand=6405081735846610804&hvtargid=kwd-529045278&hydadcr=23636_2222263&keywords=amazon+books+store&qid=1693908207&sr=8-3",
    title:"Example",
    publisher:"Author1",
    price: 499,
    
};
const Booklist = () => {
  return (
    <div>
    <Book
    image={book1.image}
    title={book1.title}
    publisher={book1.author}
    price={book1.price}
    />

      <Book
    image={book2.image}
    title={book2.title}
    publisher={book2.author}
    price={book2.price}
    />
    </div>
  )
}

export default Booklist
