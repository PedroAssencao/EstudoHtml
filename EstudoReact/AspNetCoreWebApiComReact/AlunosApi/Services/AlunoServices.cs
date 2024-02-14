using AlunosApi.Models;
using AlunosApi.Repository;

namespace AlunosApi.Services
{
    public class AlunoServices
    {
        protected readonly AlunoRepository _context;

        public AlunoServices(AlunoRepository context)
        {
            _context = context;
        }

        public async Task<List<Aluno>> BuscarTodosAlunos()
        {
            try
            {
                return await _context.BuscarTodos();
            }
            catch (Exception)
            {

                throw;
            }

        }

        public async Task<Aluno?> BuscarAlunosPorId(int id)
        {
            try
            {
                return await _context.BuscarPorID(id);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<Aluno?> AtualizarAluno(Aluno Model)
        {
            try
            {
                return await _context.Atualizar(Model);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<bool> ApagarAluno(int id)
        {
            try
            {
                return await _context.Delete(id);
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
