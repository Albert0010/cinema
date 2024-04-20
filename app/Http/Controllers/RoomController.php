<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\Ticket;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function get_rooms(): JsonResponse
    {
        return response()->json(Room::all());
    }
    public function store(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'row_count' => 'required|integer',
            'column_count' => 'required|integer',
        ]);
        $room = new Room();

        $name = $validatedData['name'];
        $row_count = $validatedData['row_count'];
        $column_count = $validatedData['column_count'];

        $room->name = $name;
        $room->row_count = $row_count;
        $room->column_count = $column_count;
        $room->save();
        return response()->json($room,201, ['message' => 'Room created']);
    }
    public function update(Request $request,$id): JsonResponse
    {
        $validatedData = $request->validate([
            'name' => 'sometimes|string|max:255',
            'row_count' => 'sometimes|integer',
            'column_count' => 'sometimes|integer',
        ]);

        $room = Room::find($id);

        if (isset($validatedData['name'])) {
            $room->name = $validatedData['name'];
        }

        if (isset($validatedData['row_count'])) {
            $room->row_count = $validatedData['row_count'];
        }

        if (isset($validatedData['column_count'])) {
            $room->column_count = $validatedData['column_count'];
        }

        $room->save();
        return response()->json($room,201, ['message' => 'Room updated']);
    }

    public function destroy(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'id' => 'required|integer',
        ]);
        $id = $validatedData['id'];
        Room::destroy($id);
        return response()->json([],204,['message' => 'Room deleted']);

    }
}
