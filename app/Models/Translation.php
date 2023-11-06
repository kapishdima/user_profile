<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Translation extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $table = 'translations';

    protected $fillable = [
        'field',
        'text',
        'locale_id',
        'translatable_id',
        'translatable_type',
    ];

    public function locale(): BelongsTo
    {
        return $this->belongsTo(Locale::class);
    }
}
