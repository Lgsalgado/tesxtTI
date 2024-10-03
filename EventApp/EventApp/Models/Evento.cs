namespace EventosAPI.Models
{
    public class Evento
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public DateTime FechaEvento { get; set; }
        public string Lugar { get; set; }
        public string Descripcion { get; set; }
        public decimal Precio { get; set; }
        public bool EstaActivo { get; set; } = true; // Para la eliminación lógica
    }
}
