export default function GifListItem({ gif }) {
    // gif prop can contain the url of the gif and the title
    return (
        <div>
        <img src={gif.url} alt={gif.title} />
        <p>{gif.title}</p>
      </div>
    )
  }









