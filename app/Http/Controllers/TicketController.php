<?php

namespace App\Http\Controllers;

use App\Models\BookedSeats;
use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'schedule_id' => 'required|integer|exists:schedules,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);
        $ticket = new Ticket();
        $schedule_id = $validatedData['schedule_id'];
        $name = $validatedData['name'];
        $email = $validatedData['email'];

        $ticket->schedule_id = $schedule_id;
        $ticket->name = $name;
        $ticket->email = $email;

        $ticket->save();

        return response()->json($ticket);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
