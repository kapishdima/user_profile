<?php

namespace App\Models;

use App\Traits\Translatable;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SeoData extends Model
{
    use SoftDeletes;
    use HasFactory;
    use Filterable;
    use Translatable;

    public $table = 'seo_datas';

    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    public const TRANSLATABLE = [
        'title',
        'description',
        'keywords',
        'og_title',
        'og_description',
    ];

    public $fillable = [
        'title',
        'description',
        'keywords',
        'og_title',
        'og_description',
        'media_id',
        'slug',
    ];

    public function modelFilter()
    {
        return $this->provideFilter(\App\ModelFilters\SeoDataFilter::class);
    }

    public function translated()
    {
        return $this->getTranslatables(self::TRANSLATABLE);
    }

    public function translations()
    {
        return $this->morphMany(Translation::class, 'translatable');
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function image()
    {
        return $this->hasOne(Media::class, 'id', 'media_id');
    }
}
