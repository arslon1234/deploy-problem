import React, { useEffect } from 'react'
import useBooksStore from '../../store/books'
export default function Books() {
  const {books, getBooks} = useBooksStore()
  useEffect(()=>{
    getBooks()
  },[])
  return (
    <div>
      <h1>Books</h1>
    </div>
  )
}
