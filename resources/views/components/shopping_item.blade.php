<div class="row justify-content-center border-bottom shopCartEntry">
    <div class="col-sm-2 entry-img">
        <img src={{asset($item['img'])}} alt="" class="shopCartProduct-image">
    </div>
    <div class="col-sm-9 row justify-content-center entry-info">
        <div class=" col-sm-3 col-6 align-self-center shopCartProduct-name">
        <p class="mb-0">{{$item['name']}}</p>
        </div>
        <div class="col-sm-2 col-6 align-self-center shopCartProduct-per-price">
        <p class="mb-0 text-right">{{$item['price']}}€</p>
        </div>
        <div class="col-sm-4 col-9 text-center align-self-center shopCartProduct-stock">
        <a href="" class="stock-minus"><i class="fas fa-minus"></i></a>
        <span class="ml-2 mr-2">{{$item['qty']}}</span>
        <a href="" class="stock-plus"><i class="fas fa-plus"></i></a>
        </div>
        <div class="col-sm-1 col-3 align-self-center shopCartProduct-delete">
        <a href="" class="shopCartProduct-trash"><i class=" fas fa-trash"></i></a>
        </div>
        <div class="col-sm-2 col-6 align-self-center shopCartProduct-total">
        <p class="mb-0 text-right">{{($item['qty'] * $item['price'])}}€</p>
        </div>
    </div>
</div>