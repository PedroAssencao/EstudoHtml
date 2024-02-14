using AlunosApi.DAL;
using Microsoft.EntityFrameworkCore;

namespace AlunosApi.Repository
{
    public class BaseRepository<Tmodel> where Tmodel : class
    {

        protected readonly ConexaoDB _context;

        public BaseRepository(ConexaoDB context)
        {
            _context = context;
        }

        public async Task<List<Tmodel>> BuscarTodos()
        {
            return await _context.Set<Tmodel>().ToListAsync();
        }

        public async Task<Tmodel?> BuscarPorID(int model)
        {
            return await _context.Set<Tmodel>().FindAsync(model);
        }

        public async Task<Tmodel> add(Tmodel Model)
        {
            await _context.AddAsync(Model);
            await _context.SaveChangesAsync();
            return Model;
        }

        public async Task<Tmodel> Atualizar(Tmodel model)
        {
            _context.Update(model);
            await _context.SaveChangesAsync();
            return model;
        }

        public async Task<bool> Delete(int id)
        {
            var a = await BuscarPorID(id);
             _context.Remove(a);
            await _context.SaveChangesAsync();
            return true;
        }


    }
}
