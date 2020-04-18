<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public $timestamps  = false;


    public function orders()
    {
        return $this->belongsToMany('App\Order', 'product_order')->withPivot('quantity');
    }

    public function wishlists()
    {
        return $this->belongsToMany('App\Wishlist', 'wishlist_product');
    }

    public function shoppingCart()
    {
        return $this->belongsToMany('App\User', 'shopping_cart')->withPivot('quantity');
    }

    public function discounts()
    {
        return $this->belongsToMany('App\Discount', 'apply_discount');
    }

    public function images()
    {
        return $this->belongsToMany('App\Image', 'product_image');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag');
    }
}