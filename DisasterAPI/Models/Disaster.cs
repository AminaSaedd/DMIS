namespace DisasterAPI.Models
{
    public class Disaster
    {

        public int Id { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public string Description{ get; set; }
        public string TypeOfDisaster { get; set; }
        public string District { get; set; }
        public string Neighborhood { get; set; }
        public string Location { get; set; }
        public string CurrentStatus { get; set; }
        public string remarks { get; set; }
        public string NumberOfDamagedHouses { get; set; }
        public string NumberOfDeaths { get; set; }
        public string NumberOfInjuries { get; set; }
        public string NumberOfSurvivors { get; set; }
        public string LossCost{ get; set; }
        public string reportedBy { get; set; }
        public string Contact { get; set; }
        public DateTimeOffset Date { get; set; } = DateTimeOffset.Now;
       
    }
}
