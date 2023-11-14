<?php

namespace App\Services;

abstract class EntityService
{
    public $model;

    public function __construct()
    {

    }

    public function processDataAdditionally($data)
    {
        return $data;
    }

    public function create($data)
    {
        $data = $this->processDataAdditionally($data);

        $entity = $this->model::create($data);

        return $entity;
    }

    public function update($data, $id)
    {

        $entity = $this->model::find($id);

        if (!$entity) {
            return false;
        }

        $data = $this->processDataAdditionally($data);


        $entity->update($data);


        return $entity;
    }

    public function show($id)
    {
        $entity = $this->model::find($id);

        if (!$entity) {
            return false;
        }

        return $entity;
    }

    public function delete($id)
    {
        $entity = $this->model::find($id);

        if (!$entity) {
            return false;
        }

        $entity->delete();

        return true;
    }
}
