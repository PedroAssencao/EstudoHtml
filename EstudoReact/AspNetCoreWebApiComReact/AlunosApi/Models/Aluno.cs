using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AlunosApi.Models
{
    [Table("alunos")]
    public partial class Aluno
    {
        [Key]
        [Column("alu_id")]
        public int AluId { get; set; }
        [Column("alu_nome")]
        [StringLength(255)]
        [Unicode(false)]
        public string? AluNome { get; set; }
        [Column("alu_Email")]
        [StringLength(255)]
        [Unicode(false)]
        public string? AluEmail { get; set; }
        [Column("alu_Idade")]
        public int? AluIdade { get; set; }
    }
}
