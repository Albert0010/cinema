<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookedSeats extends Model
{
    use HasFactory;

    protected $fillable = ['schedule_id', 'column_value', 'row_value'];

    public function schedule()
    {
        return $this->belongsTo(Schedule::class);
    }
}
