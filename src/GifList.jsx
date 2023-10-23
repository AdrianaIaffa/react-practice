import GifListItem from './GifListItem'
export default function GifList({gifs}) {
      return (
        <div>
            {/* // use map to iterate over gifs array */}
          {gifs.map((gif, index) => (
              // for each gif in the array, render a new giftlist item
            <GifListItem key={index} gif={gif} />
            // pass in the key to track the list of items and set the current gif object
          ))}
        </div>
      )
}
