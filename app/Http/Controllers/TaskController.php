<?php

namespace App\Http\Controllers;

use App\Http\ServiceLayers\TaskService;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    private $service;
    public function __construct(TaskService $taskService)
    {
        $this->service = $taskService;
    }
    public function index(Request $request)
    {
        if($request->wantsJson()){
            return $this->service->getAll();
        }
    }

    public function store(Request $request)
    {
        $request->validate(['title' => 'required|min:3']);
        return $this->service->create($request->all(),false);
    }

    public function updateTitle(Request $request)
    {
        $request->validate(['title' => 'required|min:3']);
        return $this->service->updateTitle($request->all());
    }
    public function updateStatus(Request $request)
    {
        $request->validate(['status' => 'required|exists:status,title']);
        return $this->service->updateStatus($request->all());
    }
    public function destroy(Task $task)
    {
        return $this->service->delete($task);
    }
    public function show(Task $task)
    {
        return $task;
    }
}
