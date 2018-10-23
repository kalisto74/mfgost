<!-- slider -->
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <a href="[[~480]]" title="Акция"><img class="d-block w-100" src="assets/upload/slider/01.jpg" alt="Акция"></a>
    </div>
    <div class="carousel-item">
      <a href="[[~826]]" title="Распил и раскрой листовых материалов"><img class="d-block w-100" src="assets/upload/manufacter/01.jpg" alt="Распил и раскрой листовых материалов"></a>
    </div>
    <div class="carousel-item">
      <a href="[[~827]]" title="Кромление"><img class="d-block w-100" src="assets/upload/manufacter/02.jpg" alt="Кромление"></a>
    </div>
    <div class="carousel-item">
      <a href="[[~828]]" title="Изготовление фасадов в пластике"><img class="d-block w-100" src="assets/upload/manufacter/03.jpg" alt="Изготовление фасадов в пластике"></a>
    </div>
    <div class="carousel-item">
      <a href="[[~849]]" title="Выберите ваш подарок"><img class="d-block w-100" src="assets/upload/stock/08.jpg" alt="Выберите ваш подарок"></a>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<!-- counter -->
<div class="container-fluid chislo">
  <div class="container">
    <div class="row pt-4 pb-4 justify-content-center">
      [[getImageList? 
        &docid=`1`
        &tvname=`count`
        &tpl=`countItem`
        &limit=`4`
      ]]
    </div>
  </div>
</div>

<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-8">
      [[*content]]
    </div>
  </div>
</div>

<!-- Кухни слайдер -->
<div class="container-fluid mt-2 mb-5">
  <div class="container">
    <div class="row mb-3 justify-content-center">
      <div class="col-8">
        <h2 class="text-center pb-4">Кухонные гарнитуры МФ ГОСТ <sup><i class="fas fa-th-large"></i></sup></h2>
      </div>
    </div>
  </div>
  <div class="row">
    <div id="works-carousel" class="owl-carousel owl-theme owl-loaded">
      [[!pdoResources? 
        &showHidden=`1`
        &parents=`36,507`  
        &tpl=`mainCatalog`
        &includeTVs=`foto,price,stiker`
        &limit=`12`
        &sortby=`{"publishedon":"DESC"}`
        &sortdir=`asc`
      ]]
    </div>
  </div>
</div>

<!--За что любят мебель МФ ГОСТ-->
[[$love]]

<!--Форма -->
[[$formMain.vizov]]

<!--Главные причины купить кухню МФ ГОСТ -->
[[$prichina]]

<!--Блог МФ ГОСТ -->
<div class="container">
  <div class="row mt-5 mb-3 justify-content-center">
    <div class="col-8">
      <h2 class="text-center pb-4">Блог МФ ГОСТ <sup><i class="far fa-edit"></i></sup></h2>
      <p class="text-center">Делимся интересными идеями для декора и интерьера, последними новостями от МФ ГОСТ, трендами и советами.</p>
    </div>
  </div>
  <div class="row mt-3 mb-3">
    [[!pdoResources? 
      &showHidden=`1`
      &parents=`25`  
      &tpl=`blogItemMain`
      &includeTVs=`foto,tags,video`
      &limit=`3`
    ]]
  </div>
  <div class="row mb-5">
    <div class="col">
      <p class="text-center"><a href="[[~25]]" class="btn" title="Блог">Блог</a></p>
    </div>
  </div>
</div>