<?php

namespace App\Models;

use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Media extends Model
{
    use HasFactory;
    use SoftDeletes;
    use Filterable;

    public $table = 'media';

    protected $hidden = ['pivot'];

    protected $fillable = [
        'name',
        'compressed_path',
        'path',
    ];

    public const TRANSLATABLE = [
        'name',
    ];

    public function modelFilter()
    {
        return $this->provideFilter(\App\ModelFilters\MediaFilter::class);
    }

    protected static function boot()
    {
        parent::boot();

        // Order by name ASC
        static::addGlobalScope('order', function (Builder $builder) {
            $builder->orderBy('updated_at', 'desc');
        });
    }


}
