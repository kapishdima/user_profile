@extends('layouts.app')

@section('content')
<div class="error-page">
    <div class="error-page__wrapper">
        @include('../components/lazy-asset', [
        "src" => viteAsset('resources/images/gifs/404.gif')
        ])
        <div class="error-page__text">
            <h2 class="text--medium">No adventures here</h2>
            <a href="{{ locUrl('/') }}" class="text--extrasmall error-page__btn">back home</a>
        </div>
    </div>
</div>
@endsection