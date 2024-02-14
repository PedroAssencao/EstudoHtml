using AlunosApi.Models;
using AlunosApi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AlunosApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlunosController : ControllerBase
    {
        protected readonly AlunoServices _services;

        public AlunosController(AlunoServices services)
        {
            _services = services;
        }


        [Route("/Alunos")]
        [HttpGet]
        public async Task<List<Aluno>> BuscarTodosAlunos()
        {
            return await _services.BuscarTodosAlunos();
        }

        [Route("/Alunos/{id}")]
        [HttpGet]
        public async Task<Aluno?> BuscarAluPorId(int id)
        {
            return await _services.BuscarAlunosPorId(id);
        }

        [Route("/Alunos/Atualizar")]
        [HttpPut]
        public async Task<Aluno?> AtualizarAluno(Aluno model)
        {
            return await _services.AtualizarAluno(model);
        }

        [Route("/Alunos/Delete/{id}")]
        [HttpDelete]
        public async Task<bool> DeletarAluno(int id)
        {
            return await _services.ApagarAluno(id);
        }


    }
}
