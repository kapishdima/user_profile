<?php

namespace App\Models;

use App\Traits\Translatable;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Settings extends Model
{
    use SoftDeletes;
    use HasFactory;
    use Filterable;
    use Translatable;

    public $table = 'settings';

    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    public const TRANSLATABLE = [];

    public $fillable = [
        'html_before_body',
        'html_after_body',
        'html_after_footer',
    ];

    public function modelFilter()
    {
        return $this->provideFilter(\App\ModelFilters\SettingFilter::class);
    }
}
