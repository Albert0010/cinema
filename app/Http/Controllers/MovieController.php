<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function get_movies(): JsonResponse
    {
        return response()->json(Movie::all());
    }
    public function store(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'genre' => 'required|string|max:255',
            'rating' => 'required|string|max:255',
        ]);
        $movie = new Movie();

        $name = $validatedData['name'];
        $genre = $validatedData['genre'];
        $rating = $validatedData['rating'];

        $movie->name = $name;
        $movie->genre = $genre;
        $movie->rating = $rating;
        $movie->poster = $rating;
        $movie->save();
        return response()->json($movie,201, ['message' => 'Movie created']);
    }
    public function update(Request $request,$id): JsonResponse
    {
        $movie = Movie::find($id);
        $name = $request->input('name');
        $genre = $request->input('genre');
        $rating = $request->input('rating');

        if ($name) {
            $movie->name = $name;
        }

        if ($genre) {
            $movie->genre = $genre;
        }

        if ($rating) {
            $movie->rating = $rating;
        }

        $movie->save();
        return response()->json($movie,201, ['message' => 'Movie updated']);
    }

    public function destroy(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'id' => 'required|integer',
        ]);
        $id = $validatedData['id'];
        Movie::destroy($id);
        return response()->json([],204,['message' => 'Movie deleted']);

    }
}
