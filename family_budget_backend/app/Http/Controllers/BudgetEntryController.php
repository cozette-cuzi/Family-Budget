<?php

namespace App\Http\Controllers;

use App\Http\Requests\BudgetEntryRequest;
use App\Models\BudgetEntry;

class BudgetEntryController extends Controller
{
    public function store(BudgetEntryRequest $request)
    {
        $data = $request->validated();
        $entry = BudgetEntry::create($data);

        return $entry;
    }

    public function index()
    {
        $data = BudgetEntry::all();
        return $data;
    }

    public function show(BudgetEntry $budgetEntry)
    {
        return $budgetEntry;
    }

    public function update(BudgetEntry $budgetEntry, BudgetEntryRequest $request)
    {
        $data = $request->validated();
        $budgetEntry->update($data);
        return $budgetEntry;
    }

    public function destroy(BudgetEntry $budgetEntry)
    {
        $budgetEntry->delete();
        return 'success';
    }

    public function balance()
    {
        $outcome =  BudgetEntry::all()->where('category', 'OUTCOME')->sum('amount');
        $income =  BudgetEntry::all()->where('category', 'INCOME')->sum('amount');
        return $income - $outcome;
    }
}
