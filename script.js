var itemIndex = 1;
    document.addEventListener("DOMContentLoaded", function(event) {
        showItem(itemIndex);
    },false);

    // Next/previous controls
    function plusItem(n) {
        console.log('plusitem')
        showItem(itemIndex += n);
    }

    // Thumbnail image controls
    function currentItem(n) {
        showItem(itemIndex = n);
    }

    function showItem(n) {

        var item = document.getElementsByClassName("carousel-item");
        if (n > item.length) {itemIndex = 1}
        if (n < 1) {itemIndex = item.length}
        for (var i = 0; i < item.length; i++) {
            item[i].style.display = "none";
        }

        item[itemIndex-1].style.display = "block";
    }