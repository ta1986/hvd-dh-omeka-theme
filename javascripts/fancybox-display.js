var thumbnails = jQuery.map(jQuery('.download-file img'), function(element) { return jQuery(element).attr('src'); });
var fancybox_gallery = jQuery.map(jQuery('.download-file img'), function(element) {
    jElement = jQuery(element);
    var href = jElement.attr('src');
    href = href.replace("square_thumbnails","fullsize");
    var title = jElement.attr('title');
    var linkOut = jElement.parent().attr('href');
    title = '<a href="'+linkOut+'">'+title+'</a>';
    fancybox_item = {"href":href,"title":title};
    return fancybox_item;
});
jQuery(".download-file").click(function(e) {
    e.preventDefault();
    var startIndex = thumbnails.indexOf(e.currentTarget.firstElementChild.getAttribute('src'));
    var imageTitle = e.currentTarget.firstElementChild.getAttribute('title');
    jQuery.fancybox(fancybox_gallery,{
        index:startIndex
    });
})
