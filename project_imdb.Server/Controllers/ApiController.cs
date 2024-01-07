using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

namespace project_imdb.Server.Controllers
{
    public class ApiController
    {
        [ApiController]
        [Route("[controller]")]
        public class MoviesController : ControllerBase
        {
            [HttpGet("Top Rated", Name = "GetTopRated")]
            public async Task<IActionResult> GetMovies()
            {
                try
                {
                    var client = new HttpClient();
                    var request = new HttpRequestMessage
                    {
                        Method = HttpMethod.Get,
                        RequestUri = new Uri("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"),
                        Headers =
                {
                    { "Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzk2YmFjOWU2MGMxMTRkMWQwNzg4ZDUyMDg1Mjc5YSIsInN1YiI6IjY1OTllMDZlYzk5NWVlMDFmZWI0ZmFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hQeZz4X41M1awI7VvpUGWn4Kg5T9I6USFP7QZ4gOjho" },
                    { "accept", "application/json" },
                },
                    };

                    using var response = await client.SendAsync(request);
                    response.EnsureSuccessStatusCode();
                    var body = await response.Content.ReadAsStringAsync();
                    return Ok(body);
                }
                catch (Exception ex)
                {
                    return StatusCode(500, $"Internal server error: {ex.Message}");
                }
            }
        }

    }
}
