<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
class ScheduleController extends Controller
{
    public function get_schedule(Request $request,$id): JsonResponse
    {
        $schedules = Schedule::with(['movie','room'])->where('id', $id)->get()->first();
        return response()->json($schedules);
    }
    public function get_schedule_by_room_id(Request $request): JsonResponse
    {
        $room_id = $request->query('room_id');
        $schedules = Schedule::with('movie')->where('room_id', $room_id)->get();

        return response()->json($schedules);
    }
}
