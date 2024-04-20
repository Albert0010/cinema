<?php

use App\Http\Controllers\Admin;
use App\Http\Controllers\BookedSeatsController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\TicketController;
use Illuminate\Support\Facades\Route;

Route::post('admin', [Admin::class, 'index']);

Route::get("movies", [MovieController::class, "get_movies"]);
Route::post("movies", [MovieController::class, "store"]);
Route::patch("movies/{id}", [MovieController::class, "update"]);
Route::delete("movies", [MovieController::class, "destroy"]);



Route::get("rooms", [RoomController::class, "get_rooms"]);
Route::post('rooms', [RoomController::class, 'store']);
Route::patch('rooms/{id}', [RoomController::class, 'update']);
Route::delete('rooms', [RoomController::class, 'destroy']);


Route::get("schedules", [ScheduleController::class, "get_schedule_by_room_id"]);
Route::get("schedules/{id}", [ScheduleController::class, "get_schedule"]);

Route::get('seats_occupied', [BookedSeatsController::class, 'get_seats']);

Route::post('seats_occupied', [BookedSeatsController::class, 'add_seat']);

Route::post('ticket', [TicketController::class, 'store']);


