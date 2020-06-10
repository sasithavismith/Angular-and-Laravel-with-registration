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
    public function delete(Request $request){
        $id =$request->input('id');
        $record =task:: find($id);
        $record->delete();
        $response =array('id'=>$id);
        return $response;
    }
    public function getone(Request $request){
        $id= $request->input('id');
         
        $record =task::find($id);
        return response()->json($record);
    }
}
