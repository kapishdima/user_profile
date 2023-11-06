<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Locale extends Model
{
    use HasFactory;
    use SoftDeletes;
    use Uuids;

    public $table = 'locales';

    protected $fillable = [
        'locale',
        'name',
    ];

    public const DEFAULT_LOCALE = 'English';

    protected static function boot()
    {
        parent::boot();

        self::createHook();
    }

    public function scopeTranslated()
    {
        return $this->whereIn('name', ['English']);
    }
}
