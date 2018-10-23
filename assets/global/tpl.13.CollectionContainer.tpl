[[!pdoPage@materialNav?
  &parents=`[[*id]]`
  &depth=`0`
  &tpl=`tpl.13.CollectionContainer.kuxni`
  &includeTVs=`foto,price,HitsPage,pokritieKuxni,materialKuxni,styleKuxni,color,colorOtenok,colorTon,ral,stiker,cxema`
  &limit=`12`
  &toPlaceholder=`vivod.kuxni`
  &sortby=`{"publishedon":"DESC"}`
  &ajaxMode=`default`
  &tplPageFirstEmpty=``
  &tplPageLastEmpty=``
  &tplPageFirstEmpty=``
  &tplPageNextEmpty=``
  &tplPagePrevEmpty=``
]]
[[!pdoResources:toPlaceholder=`vivod.styleKuxni`?
  &showHidden=`1`
  &parents=`11`  
  &tpl=`tpl.2.CollectionContainer.styleKuxni`
  &includeTVs=`foto,sign,price,stiker,HitsPage`
  &limit=`12`
  &sortby=`{"publishedon":"DESC"}`
  &sortdir=`asc`
]]
<!-- BREADCRUMBS -->
<div class="container-fluid page-title">
  <div class="row pt-4 pb-1 justify-content-center">
    <div class="col">
      <h1 class="display-3 text-center">[[*longtitle]]</h1>
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

<!-- Grid -->
<div class="container">
  <div class="row mt-5 mb-3">
    <div class="col">
      [[*tags:!empty=`<div class="tags mt-2 mb-2">
        [[!tolinks? &items=`[[*tags]]` &target=`27` &tpl=`tagItem` &inputDelim=`,` &outputDelim=` `]]
      </div>`]]
    </div>
  </div>
  <div class="row no-gutters mb-5">
    [[+vivod.styleKuxni]]
  </div>
  <div class="row pt-5 justify-content-center">
    <div class="col-8">
      <h2 class="text-center pb-5">Все кухни</h2>
    </div>
  </div>
  <div class="row mb-3">
    [[+vivod.kuxni]]
  </div>
  <div class="row justify-content-center mb-5">
    [[!+page.nav]]
  </div>
</div>