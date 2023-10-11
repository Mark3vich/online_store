namespace backend.Models
{
    public class MobilePhones
    {   
        public int Id {get; set;}
        public int Article {get; set;}
        public string ProductName {get; set;} = string.Empty;
        public double Price {get; set;}
        public int Quantity {get; set;}
        public string Description {get; set;} = string.Empty;
        public string Manufacturer {get; set;} = string.Empty;
        public string Colour {get; set;} = string.Empty;
        public string Hashtags { get; set; } = string.Empty;
    }
}