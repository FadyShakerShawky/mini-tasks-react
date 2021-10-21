<?php
namespace App\Http\RepositoryLayers;

use App\Models\Task;

class TaskRepo extends Repository
{
    public function __construct()
    {
        parent::__construct(new Task());
    }
}
