Ext.define('Test.grid.InfiniteScroll', {
    xtype: 'test-grid-infinite-scroll',
    extend: 'Ext.grid.Panel',
    cnfInfinScroll: {
        bottomScroll: 0,
        topScroll: 0,
        scrollHeight: 16,
        indexStop: 0,
    },
    firstView: true,
    onScrollEnd: function(x, y){
        var store = this.getStore();

        var scrolableRect = this.getScrollable().getElement().dom.getBoundingClientRect();
        var indexStart = this.getView().all.startIndex;
        var rowStart = this.getView().getRow(indexStart);
        if(rowStart && !this.firstView) {
            var rowStartRect = rowStart.getBoundingClientRect();
            if(rowStartRect.top >= scrolableRect.top) {
                if(store && store.currentPage > 1) {
                    store.loadPage(store.currentPage - 1);
                }
            }
        }
        if (scrolableRect.height/2 <= y ) {
            this.firstView = false;
        }

        var indexStop = this.getView().all.endIndex;
        var rowStop = this.getView().getRow(indexStop);
        if(rowStop) {
            var rowStopRect = rowStop.getBoundingClientRect();
            // иногда нижний row оказывается на пару пикселей ниже чем, scrollable
            if ((rowStopRect.bottom - 5)  <= scrolableRect.bottom) {
                if(store && store.currentPage) {
                    // Если вернулось меньше, чем по лимиту, значит таблица закончилась.
                    // Допустим, у нас 1000 страниц в таблице и PageSize == 500. Тогда этот способ не сработает.
                    if(store.getCount() >= store.getPageSize()) {
                          store.loadPage(store.currentPage + 1, {
                              callback:function(rec, oper){
                                // тут можно получить с сервера какой-то параметр о том, что таблица кончилась, например.
                                //oper.getResponse()ж
                              }
                          });
                        this.firstView = true;
                    }
                }
            }
        }
    }
});