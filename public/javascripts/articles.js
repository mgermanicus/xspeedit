var sort = function (articles) {
    var maxWeight = 10;
    var boxes = [];

    // Transform articles in number array
    var articleList = articles.split('').map(function (item) {
        if (isNaN(item)) {
           throw new Error('Invalid Format');
        }
        return parseInt(item);
    }).sort().reverse();

    while (articleList.length > 0) {
        var box = articleList.splice(0, 1); // get the first article

        // We look for an article that can perfectly complete the box
        var indexOfArticleNeeded = articleList.indexOf(maxWeight - box[0]);
        if (indexOfArticleNeeded !== -1) {
            box.push(articleList.splice(indexOfArticleNeeded, 1)[0]);
        } else {
            // if this article is not found, we try to fill as much as possible
            var test = articleList.filter(function (number) { return number < maxWeight - box[0];})
                .sort().reverse();

            for (var i = 0; i < test.length; i++) {
                var sum = box.reduce(function(a, b) { return a + b; }, 0);
                if (sum + test[i] <= 10) {
                    box.push(test[i]);
                    var index = articleList.indexOf(test[i]);
                    articleList.splice(index, 1);
                }
            }
        }

        boxes.push(box);
    }

    return boxes;
};

var getStringToDisplay = function(boxedArticles) {
    return boxedArticles.reduce(function(accumulator, newBox) {
        var separator = accumulator ? '/' : '';
        return accumulator + separator + newBox.reduce(function (accumulator, articles) {
            return '' + accumulator + articles;
        });
    }, '');
};

module.exports = {
    sort: sort,
    getStringToDisplay: getStringToDisplay
};
