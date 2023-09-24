namespace backend.Models
{
    public class Product
    {
        public int Id {get; set;}
        public int Price {get; set;}
        public string ProductName {get; set;} = string.Empty;
        public string ProductDescription {get; set;} = string.Empty;
        public string LinkToThePicture {get; set;} = string.Empty;
    }
}