<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\task;
class taskController extends Controller
{
    public function add(Request $request){
$title =$request->input('title');
$status =$request->input('status');
$date =$request->input('date');

$task =new task();
$task->title=$title;
$task->status=$status;
$task->date=$date;
$task->save();
return $task;
    }
    public function get(){
        $records = task::all();
        return response()->json($records);
    }
}