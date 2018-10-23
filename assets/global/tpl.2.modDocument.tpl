<!-- BREADCRUMBS -->
<div class="container-fluid page-title">
  <div class="row pt-4 pb-1 justify-content-center">
    <div class="col">
      <h1 class="display-3 text-center"><i class="[[*sign]]"></i> [[*pagetitle]]</h1>
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

<!-- Стиль кухни детальная  -->
<div class="container-fluid">
  <div class="container">
    <div class="row mt-5 mb-3 justify-content-center">
      <div class="col-8">
        [[*content]]
      </div>
    </div>
  </div>
  <div class="row">
    <div id="works-carousel" class="owl-carousel owl-theme owl-loaded">
      [[!pdoResources? 
        &showHidden=`1`
        &parents=`36,507`  
        &tpl=`mainCatalog`
        &includeTVs=`foto,price,tags,stiker`
        &processTVs=`foto`
        &limit=`12`
        &sortby=`{"publishedon":"DESC"}`
        &sortdir=`asc`
        &tvFilters=`styleKuxni==[[*styleKuxni]]`
      ]]
    </div>
  </div>
</div>

<!--Советы-->
[[$sovet]]

<!--Форма -->
[[$formMain.vizov]]

<!--За что любят мебель МФ ГОСТ-->
[[$love]]

<!--Главные причины купить кухню МФ ГОСТ -->
[[$prichina]]