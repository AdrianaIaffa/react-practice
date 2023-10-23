import React, { useState } from 'react'


export default function SearchBar() {
    // getAllGiphys
    const [searchBar, setSearchBar] = useState('')
    const url = process.env.DATABASE_URL;

    function handleSearchBarData(event) {
        setSearchBar(event.target.value)
        console.log('Search Bar Content:', event.target.value);
    }
    function handleSearchSubmit(evt) {
        evt.preventDefault()
        console.log('search info', searchBar)
        const apiUrl=`${url}${searchBar}`
        console.log('API URL:', apiUrl);
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setSearchBar(data)
    //         })
    //         .catch((error) => {
    //         console.error('Error fetching data:', error);
    //         });

    }
  return (
    <>
    <h2>Search Giphy</h2>
    <form onSubmit={handleSearchSubmit}>
        <input
            type='text'
            placeholder='search giphy'
            value={searchBar}
            onChange={handleSearchBarData}
        >
        </input>
        <button type="submit">Find Giphy</button>
    </form>

    </>
  )
}

