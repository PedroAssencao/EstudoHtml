using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using AlunosApi.Models;

namespace AlunosApi.DAL
{
    public partial class ConexaoDB : DbContext
    {
        public ConexaoDB()
        {
        }

        public ConexaoDB(DbContextOptions<ConexaoDB> options)
            : base(options)
        {
        }

        public virtual DbSet<Aluno> Alunos { get; set; } = null!;


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Aluno>(entity =>
            {
                entity.HasKey(e => e.AluId)
                    .HasName("PK__alunos__240B7276EF6BC9DF");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
