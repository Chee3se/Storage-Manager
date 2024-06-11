<?php

namespace Database\Seeders;

use App\Models\Image;
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
        $product1 = Product::factory()->create([
            'name' => 'Nike Air Max 90',
            'description' => 'The Nike Air Max 90 stays true to its OG roots with its iconic Waffle outsole, stitched overlays and classic, color-accented TPU plates. Retro colors celebrate the first generation while Max Air cushioning adds comfort to your journey.',
            'shelf' => true,
            'price' => 120,
            'supplier_id' => 1
        ]);
        $product2 = Product::factory()->create([
            'name' => 'Adidas Superstar',
            'description' => 'The adidas Superstar shoes have been around for decades, and they\'re not going anywhere. This version of the iconic shell-toe shoes is made of leather with a shiny metallic finish. The rubber shell toe and thick rubber cupsole keep them authentic.',
            'shelf' => false,
            'price' => 100,
            'supplier_id' => 2
        ]);
        $product3 = Product::factory()->create([
            'name' => 'Apple iPhone 15',
            'description' => 'iPhone 15. Beautifully bright 6.1-inch Super Retina XDR display. Ceramic Shield with 4x better drop performance. Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision HDR video recording, editing, and playback. Powerful A14 Bionic chip. 5G capable. And new MagSafe accessories for easy attach and faster wireless charging. Let the fun begin.',
            'shelf' => true,
            'price' => 800,
            'supplier_id' => 3
        ]);

        ProductCategory::factory()->create([
            'product_id' => $product1->id,
            'category_id' => 1
        ]);
        ProductCategory::factory()->create([
            'product_id' => $product1->id,
            'category_id' => 3
        ]);
        ProductCategory::factory()->create([
            'product_id' => $product2->id,
            'category_id' => 1
        ]);
        ProductCategory::factory()->create([
            'product_id' => $product2->id,
            'category_id' => 3
        ]);
        ProductCategory::factory()->create([
            'product_id' => $product3->id,
            'category_id' => 2
        ]);
        Image::factory()->create([
            'url' => 'https://sizeer.lv/media/cache/gallery/rc/obzlx5gp/nike-air-max-90-viriesiem-sporta-apavi-balta-fb9658-102.jpg',
            'is_thumbnail' => true,
            'product_id' => $product1->id
        ]);
        Image::factory()->create([
            'url' => 'https://sizeer.lv/media/cache/gallery/rc/6sfnyu3d/adidas-superstar-viriesiem-sporta-apavi-melna-eg4959-58.jpg',
            'is_thumbnail' => true,
            'product_id' => $product2->id
        ]);
        Image::factory()->create([
            'url' => 'https://www.rdveikals.lv/images/midi/15e032e50fd39a395b77ea246cc5383a.jpg',
            'is_thumbnail' => true,
            'product_id' => $product3->id
        ]);
    }
}
