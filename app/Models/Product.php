<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function thumbnail()
    {
        return $this->hasOne(Image::class)->where('is_thumbnail', true);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'product_categories');
    }
}
