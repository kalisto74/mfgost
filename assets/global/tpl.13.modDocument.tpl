<!--Фото-->
<div class="container-fluid">
  <div class="row mb-2">
    <div class="col-sm-12">
      <ul class="pgwSlideshow">
        [[getImageList? 
          &tvname=`foto` 
          &tpl=`@CODE:<li><img src="[[+image]]"></li>`
        ]]
      </ul>
      [[*stiker:ne=`0`:then=`
      <div class="options">
        [[*stiker:is=`1`:then=`РАСПРОДАЖА`]]
        [[*stiker:is=`2`:then=`НОВИНКА`]]
        [[*stiker:is=`3`:then=`ПОПУЛЯРНАЯ`]]
        [[*stiker:is=`4`:then=`ФАНТАЗИЙНАЯ`]]
      </div>`:else=``]]
      [[*price:ne=`0`:then=`<p class="small muted text-right">Стоимость без учета бытовой техники: от [[*price]] руб.</p>`:else=``]]
    </div>
  </div>
</div>

<!-- BREADCRUMBS -->
<div class="container-fluid page-title">
  <div class="row pt-4 pb-1 justify-content-center">
    <div class="col">
      <h1 class="display-3 text-center">[[*pagetitle]]</h1>
    </div>
  </div>
  <div class="row pb-3 justify-content-center">
    [[pdoCrumbs?
      &from=`0`
      &showAtHome=`0`
      &showHome=`1`
      &exclude=`[[*id]]`
      &tpl=`@INLINE <li class="breadcrumb-item"><a href="[[+link]]">[[+menutitle]]</a></li>`
      &tplWrapper=`@INLINE <nav aria-label="breadcrumb"><ol class="breadcrumb">[[+output]]</ol></nav>`
    ]]
  </div>
</div>

<!-- Кухни детальная -->
<div class="container detail">
  <div class="row mt-5 align-items-top justify-content-center">
    <div class="col-xs-12 col-sm-6">
      <div class="d-inline-block pr-5">
        <p class="card-text">Стиль: <span class="text-muted">[[*styleKuxni]]</span></p>
        <p class="card-text">Основа фасада: <span class="text-muted">[[*materialKuxni]]</span></p>
        [[*pokritieKuxni:ne=`без покрытия`:then=`<p class="card-text">Покрытие: <span class="text-muted">[[*pokritieKuxni]]</span></p>`]]
      </div>
      <div  class="ral d-inline-block align-top pl-1">
       [[#[[*color]].colorMain:is=`Дерево ARPA`:or:if=`[[#[[*color]].colorMain]]`:is=`Дерево ABET`:then=`<a href="#" ><div class="ral-color">
        [[getImageList?
          &docid=`[[*color]]`
          &tvname=`foto`
          &tpl=`colorFotoFactura`
          &limit=`1`
        ]]</div></a>`:else=`<a href="#" ><div class="ral-color" style="background-color: [[#[[*color]].ral]];"></div></a>`]]
      </div>
      <div class="d-inline-block align-top pl-1">
        <p class="card-text small">Цвет: <span class="text-muted">[[#[[*color]].pagetitle]]</span></p>
      </div>
    </div>
    <div class="col-xs-12 col-sm-2 text-center">
      <a class="btn btn-xs mr-1 mb-1" href="[[~850]]" tittle="Рассрочка" target="_blank">Рассрочка</a>
      <a class="btn btn-xs" href="[[~849]]" tittle="Выберите ваш подарок" target="_blank">Подарки</a>
    </div>
    <div class="col-xs-12 col-sm-3">
      [[*price:ne=`0`:then=`
      <p class="h4"><strong>От [[*price]]</strong>  <i class="fas fa-ruble-sign"></i></p>
      <p class="muted base1">Стоимость модели в базовой комплектации</p>`:else=``]]
      <button type="button" class="btn btn2 btn-xs mt-2" data-toggle="modal" data-target="#coast">Рассчитать стоимость</button>
    </div>
    <div class="col-xs-12 col-sm-1 text-center">
      [[pdoNeighbors? 
        &tplPrev=`@INLINE <span class="link-prev"><a href="[[+link]]"><i class="fa fa-chevron-left fa-1x"></i></a></span>` 
        &tplNext=`@INLINE <span class="link-next"><a href="[[+link]]"><i class="fa fa-chevron-right fa-1x"></i></a></span>`
        &tplWrapper=`@INLINE <div class="neighbors"><div id="post-navigation" class="text-right">[[+prev]]<a href="[[~[[*parent]]]]" class="ml-2 mr-2"><i class="fa fa-th-large fa-1x"></i></a>[[+next]]</div></div>`
      ]]
    </div>
  </div>
</div>

<!--Описание-->
<div class="container">
  <div class="row mt-5 mb-5 product-page">
    <div class="col-xs-12 col-sm-8">
      <p class="h3"><strong>Состав модели в базовой комплектации</strong></p>
    </div>
    [[*cxema:is=`Нет`:then=``:else=`
    <div class="col-xs-12 col-sm-4">
      [[getImageList? 
        &tvname=`foto`
        &offset=`1`
        &tpl=`@CODE:<a href="[[+image]]" class="image-link" title="[[+title]]"><p class="muted base2"><u>Посмотреть схему базовой комплектации</u></p></a>`
        &limit=`1`
      ]]
    </div>`]]
  </div>
  <!--Описание-->
  <div class="row opis">
    [[*content]]
  </div>
</div>
<!--Выполненные кухни-->
<div class="container-fluid">
  <div class="container">
    <div class="row mt-5 mb-3 justify-content-center">
      <div class="col-8">
        <h2 class="text-center pb-4">Выполненные кухни МФ ГОСТ <sup><i class="fas fa-th-large"></i></sup></h2>
      </div>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <div class="mt-2 mb-2">
        <div id="works-carousel" class="owl-carousel owl-theme owl-loaded">
          [[!pdoResources? 
            &showHidden=`1`
            &parents=`507`  
            &tpl=`mainCatalog`
            &includeTVs=`foto,price,tags,stiker`
            &processTVs=`foto`
            &sortby=`{"publishedon":"DESC"}`
            &sortdir=`asc`
            &tvFilters=`styleKuxni==[[*styleKuxni]]`
          ]]
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <!--Отзывы-->
  <div class="row mt-3">
    <div class="col">
      <div class="review mt-2 mb-2">
        Отзывы
      </div>
      <p class="text-center mt-2 mb-2"><a href="" class="btn ">Оставить отзыв</a></p>
    </div>
  </div>
  <!--Теги-->
  <div class="row mt-3">
    <div class="col">
      <div class="tags mt-2 mb-2">
          [[!tolinks? &items=`[[*tags]]` &target=`27` &tpl=`tagItem` &inputDelim=`,` &outputDelim=` `]]
      </div>
      <p class="text-muted mt-2 mb-2"><a href="[[~[[*parent]]]]" title="К кухням" alt=""><span class="pr-2"><i class="fas fa-arrow-circle-left"></i></span><u>К кухням</u></a></p>
    </div>
  </div>
  <!--Соцсети-->
  [[$socSeti]]
</div>

<!--Советы-->
[[$sovet]]

<!--Форма -->
[[$formMain.vizov]]

<!--Сервис parallax -->
[[$service]]