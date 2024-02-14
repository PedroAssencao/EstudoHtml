using AlunosApi.DAL;
using AlunosApi.Models;

namespace AlunosApi.Repository
{
    public class AlunoRepository : BaseRepository<Aluno>
    {
        public AlunoRepository(ConexaoDB context) : base(context)
        {
        }
    }
}
