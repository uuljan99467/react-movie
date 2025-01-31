

const VideoCard = ({ videoKey }) => {
    const url = "https://www.youtube.com/embed/" + videoKey
    return (
        <div>
            <iframe
                width="320"
                height="200"
                src={url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>

            </iframe>
        </div>
    )
}

export default VideoCard