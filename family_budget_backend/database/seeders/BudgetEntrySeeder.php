<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\BudgetEntry;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BudgetEntrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('books')->truncate();
        BudgetEntry::factory(20)->create();
    }
}
