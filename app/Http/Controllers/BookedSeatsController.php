<?php

namespace App\Http\Controllers;

use App\Models\BookedSeats;
use Illuminate\Http\Request; // Import the Request class from Illuminate\Http namespace
use Illuminate\Http\JsonResponse;

class BookedSeatsController extends Controller
{
    public function get_seats(Request $request): JsonResponse
    {
        $schedule = $request->query('schedule_id');
        $booked_seats = BookedSeats::with('schedule')->where('schedule_id', $schedule)->get();

        return response()->json($booked_seats);
    }
    public function add_seat(Request $request): JsonResponse
    {
        $booked_seat = new BookedSeats();
        $schedule_id = $request->input('schedule_id');
        $column_value = $request->input('column_value');
        $row_value = $request->input('row_value');
//        return response()->json($schedule_id);

        $booked_seat->schedule_id = $schedule_id;
        $booked_seat->column_value = $column_value;
        $booked_seat->row_value = $row_value;

        $booked_seat->save();

        return response()->json($booked_seat);
    }


}
