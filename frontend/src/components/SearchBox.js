// import React, { useState } from 'react'
// import { Form, Button } from 'react-bootstrap'

// const SearchBox = ({ history }) => {
//   // const [keyword, setKeyword] = useState('')

//   // const submitHandler = (e) => {
//   //   e.preventDefault()
//   //   if (keyword.trim()) {
//   //     history.push(`/search/${keyword}`)
//   //   } else {
//   //     history.push('/')
//   //   }
//   // }

//   return (
//     // <Form onSubmit={submitHandler} inline>
//     //   <Form.Control
//     //     type='text'
//     //     name='q'
//     //     onChange={(e) => setKeyword(e.target.value)}
//     //     placeholder='Search Products...'
//     //     className='mr-sm-2 ml-sm-5'
//     //   ></Form.Control>
//     //   <Button type='submit' variant='outline-success' className='p-2'>
//     //     Search
//     //   </Button>
//     // </Form>

//     <SearchBox
//     onSubmit={(searchTerm) => {
//       window.location.href = `${window.location.origin}/search?q=${searchTerm}`;
//     }}
//     autocompleteMinimumCharacters={3}
//     autocompleteResults={{
//       linkTarget: "_blank",
//       sectionTitle: "Results",
//       titleField: "title",
//       urlField: "nps_link",
//       shouldTrackClickThrough: true,
//       clickThroughTags: ["test"]
//     }}
//     autocompleteSuggestions={true}
//     debounceLength={0}
//   />
//   )
// }

// export default SearchBox
