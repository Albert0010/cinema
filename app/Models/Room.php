<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'row_count', 'column_count'];

    public function schedules()
    {
//        return $this->hasMany(Schedule::class);
    }

    public function seats()
    {
//        return $this->hasMany(Seat::class);
    }
}
