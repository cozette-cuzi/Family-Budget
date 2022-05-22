<?php

namespace App\Http\Controllers;

use App\Http\Requests\BudgetEntryRequest;
use App\Models\BudgetEntry;
use Illuminate\Http\Request;

class BudgetEntryController extends Controller
{
    public function store(BudgetEntryRequest $request)
    {
        $data = $request->validated();
        $entry = BudgetEntry::create($data);

        return $this->response('success', $entry);
    }

    public function index()
    {
        $data = BudgetEntry::all();
        return $this->response('success', $data);
    }

    public function show(BudgetEntry $budgetEntry)
    {
        return $this->response('success', $budgetEntry);
    }

    public function update(BudgetEntry $budgetEntry, BudgetEntryRequest $request)
    {
        $data = $request->validated();
        $budgetEntry->update($data);
        return $this->response('success');
    }

    public function destroy(BudgetEntry $budgetEntry)
    {
        $budgetEntry->delete();
        return $this->response('success');
    }
}
