<?php

namespace App\Http\ServiceLayer;

use App\Http\RepositoryLayers\TaskRepo;

class TaskService
{
    private $repository;

    public function __construct(TaskRepo $taskRepo)
    {
        $this->repository = $taskRepo;;
    }
    public function getAll()
    {
        $this->repository->getAll();
    }
    // public function create($data, $getId)
    // {
    //     return $this->repository->save($data, $getId);
    // }

    // public function update($data, $id)
    // {
    //     return $this->repository->update($data, $id);
    // }


    // public function delete($id)
    // {
    //     return $this->repository->delete($id);
    // }
}
