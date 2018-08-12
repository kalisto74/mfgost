    <div class="col-xs-12 col-sm-4 col-lg-3 col-xl-2 d-flex align-items-stretch">
      <div class="card">
        <div class="view overlay zoom">
          [[getImageList?
            &docid=`[[+id]]`
            &tvname=`foto`
            &tpl=`fotoColorContainer`
            &limit=`1`
          ]]
          <a href="[[~[[+id]]]]" title="[[+pagetitle]]" ><div class="mask flex-center icon-link"></div></a>
        </div>
        <div class="card-body text-center">
          <p><a href="[[~[[+id]]]]" title="[[+pagetitle]]"><strong>[[+pagetitle]]</strong></a></p>
          <small class="muted">[[+tv.colorOtenok]]</small>
        </div>
      </div>
    </div>