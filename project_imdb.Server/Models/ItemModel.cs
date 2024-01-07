namespace project_imdb.Server.Models
{
    public class ItemModel
    {
        public int id { get; set; }

        public string queryId { get; set; } = string.Empty; // query id for ex. movie. That means you search for a movie. If it was an actor, then it would be actor.

        public string title { get; set; } = string.Empty;

        public int year { get; set; }

        public string description { get; set; } = string.Empty;

        public string stars { get; set; } = string.Empty;

        public string query { get; set; } = string.Empty;

        public string imageUrl { get; set; } = string.Empty;
    }
}
