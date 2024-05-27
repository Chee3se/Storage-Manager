<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $product1 = Product::create([
            'name' => 'Nike Air Max 90',
            'description' => 'The Nike Air Max 90 stays true to its OG roots with its iconic Waffle outsole, stitched overlays and classic, color-accented TPU plates. Retro colors celebrate the first generation while Max Air cushioning adds comfort to your journey.',
            'price' => 120,
            'supplier_id' => 1
        ]);
        $product2 = Product::create([
            'name' => 'Adidas Superstar',
            'description' => 'The adidas Superstar shoes have been around for decades, and they\'re not going anywhere. This version of the iconic shell-toe shoes is made of leather with a shiny metallic finish. The rubber shell toe and thick rubber cupsole keep them authentic.',
            'price' => 100,
            'supplier_id' => 2
        ]);
        $product3 = Product::create([
            'name' => 'Apple iPhone 12',
            'description' => 'iPhone 12. Beautifully bright 6.1-inch Super Retina XDR display. Ceramic Shield with 4x better drop performance. Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision HDR video recording, editing, and playback. Powerful A14 Bionic chip. 5G capable. And new MagSafe accessories for easy attach and faster wireless charging. Let the fun begin.',
            'price' => 800,
            'supplier_id' => 3
        ]);

        ProductCategory::create([
            'product_id' => $product1->id,
            'category_id' => 1
        ]);
        ProductCategory::create([
            'product_id' => $product1->id,
            'category_id' => 3
        ]);
        ProductCategory::create([
            'product_id' => $product2->id,
            'category_id' => 1
        ]);
        ProductCategory::create([
            'product_id' => $product2->id,
            'category_id' => 3
        ]);
        ProductCategory::create([
            'product_id' => $product3->id,
            'category_id' => 2
        ]);
    }
}
