using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.Windows.Media.Imaging;

namespace ChocolateAdmin
{
    public class Product
    {
        [BsonId]
        public ObjectId Id { get; set; }

        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Category { get; set; } = string.Empty;

        [BsonElement("Image")]
        public byte[] ImageBytes { get; set; } = Array.Empty<byte>();

        public BitmapImage? Image
        {
            get
            {
                if (ImageBytes == null || ImageBytes.Length == 0)
                    return null;

                var bitmap = new BitmapImage();
                using (var stream = new System.IO.MemoryStream(ImageBytes))
                {
                    bitmap.BeginInit();
                    bitmap.CacheOption = BitmapCacheOption.OnLoad;
                    bitmap.StreamSource = stream;
                    bitmap.EndInit();
                }
                return bitmap;
            }
        }
    }
}