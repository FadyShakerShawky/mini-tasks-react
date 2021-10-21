<?php

namespace App\Http\RepositoryLayers;

use Illuminate\Database\Eloquent\Model;


class Repository{

    var $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function getAll()
    {
        return $this->model->orderBy('created_at','desc')->get();
    }




}
