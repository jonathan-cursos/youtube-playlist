const getVideos = async ({ q, maxResults, pageToken = '' }) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?type=video&key=${process.env.YT_API_KEY}&q=${q}&maxResults=${maxResults}&pageToken=${pageToken}`
  )
  const data = await response.json()
  return data
}

export default getVideos