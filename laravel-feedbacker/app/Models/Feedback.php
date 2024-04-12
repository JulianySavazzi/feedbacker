<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *
 * Por convenção, o "snake case", o nome plural da classe
 * será usado como o nome da tabela,
 * a menos que outro nome seja especificado explicitamente.
 *
 * O Eloquent também assumirá que a tabela de banco de dados
 * correspondente de cada modelo possui uma coluna
 * de chave primária chamada id.
 * 
 * Por padrão, o Eloquent espera que colunas created_at updated_at existam
 * na tabela de banco de dados correspondente do seu modelo.
 * O Eloquent definirá automaticamente os valores dessas colunas
 * quando os modelos forem criados ou atualizados.
 * 
 * Por padrão, todos os modelos do Eloquent usarão a conexão
 * de banco de dados padrão configurada para sua aplicação.
 */

class Feedback extends Model
{
    use HasFactory;
    
    /**
     * The database table name
     * 
    */
    protected $table = 'feedbacks';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'text',
        'fingerprint',
        'api_key',
        'type',
        'device',
        'page',
    ];
}
