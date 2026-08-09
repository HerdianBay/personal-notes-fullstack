<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;

class NoteController extends Controller
{
    public function index() {
        $notes = Note::where('archived', false)->get();

        return response()->json([
            'status' => 'success',
            'data' => $notes,
        ]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'title' => 'required|string',
            'body' => 'required|string',
        ]);

        $note = Note::create([
            'title' => $validated['title'],
            'body' => $validated['body'],
            'archived' => false,
        ]);

        return response()->json([
            'status' => 'success',
            'data' => $note,
        ], 201);
    }

    public function archived() {
        $notes = Note::where('archived', true)->get();
        
        return response()->json([
            'status' => 'success',
            'data' => $notes,
        ]);    
    }

    public function show($id) {
        $note = Note::find($id);

        if (!$note) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Note not found',
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $note,
        ]);
    }

    public function archive($id) {
        $note = Note::find($id);

        if (!$note) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Note not found',
            ], 404);
        }

        $note->update([
            'archived' => true,
        ]);

        return response()->json([
            'status' => 'success',
            'data' => $note,
        ]);
    }

    public function unarchive($id) {
        $note = Note::find($id);

        if (!$note) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Note not found',
            ], 404);
        }

        $note->update([
            'archived' => false,
        ]);

        return response()->json([
            'status' => 'success',
            'data' => $note,
        ]);
    }

    public function destroy($id) {
        $note = Note::find($id);

        if (!$note) {
            return response()->json([
                'status' => 'fail',
                'message' => 'Note not found',
            ], 404);
        }

        $note->delete();

        return response()->json([
            'status' => 'success',
            'data' => $note,
        ]);
    }
}
