var Sort = require("../public/javascripts/articles").sort;
var GetStringToDisplay = require("../public/javascripts/articles").getStringToDisplay;

describe("Sort functionality", function () {
    it("regroup articles into boxes when all boxes can be full", function () {
        //
        var listOfArticles = "9876554321";
        var sortedListOfArticles = Sort(listOfArticles);
        expect(sortedListOfArticles.length).toBe(5);
        expect(sortedListOfArticles[0]).toEqual([9,1]);
        expect(sortedListOfArticles[1]).toEqual([8,2]);
        expect(sortedListOfArticles[2]).toEqual([7,3]);
        expect(sortedListOfArticles[3]).toEqual([6,4]);
        expect(sortedListOfArticles[4]).toEqual([5,5]);
    });

    it("regroup articles into boxes when no boxes can be full", function () {
        var listOfArticles = "9865398653";
        // should result in [[9],[9],[8],[8],[6,3],[6,3],[5,5]]
        var sortedListOfArticles = Sort(listOfArticles);
        expect(sortedListOfArticles.length).toBe(7);
        expect(sortedListOfArticles[0]).toEqual([9]);
        expect(sortedListOfArticles[1]).toEqual([9]);
        expect(sortedListOfArticles[2]).toEqual([8]);
        expect(sortedListOfArticles[3]).toEqual([8]);
        expect(sortedListOfArticles[4]).toEqual([6,3]);
        expect(sortedListOfArticles[5]).toEqual([6,3]);
        expect(sortedListOfArticles[6]).toEqual([5,5]);
    });

    it("regroup articles into boxes with the example of the test", function () {
        var listOfArticles = "163841689525773";
        // should result in [[9,1],[8,2],[8,1],[7,3],[7,3],[6,4],[6],[5,5]]
        var sortedListOfArticles = Sort(listOfArticles);
        expect(sortedListOfArticles.length).toBe(8);
        expect(sortedListOfArticles[0]).toEqual([9,1]);
        expect(sortedListOfArticles[1]).toEqual([8,2]);
        expect(sortedListOfArticles[2]).toEqual([8,1]);
        expect(sortedListOfArticles[3]).toEqual([7,3]);
        expect(sortedListOfArticles[4]).toEqual([7,3]);
        expect(sortedListOfArticles[5]).toEqual([6,4]);
        expect(sortedListOfArticles[6]).toEqual([6]);
        expect(sortedListOfArticles[7]).toEqual([5,5]);
    });

    it("regroup articles into boxes with another example", function () {
        var listOfArticles = "89991112";
        // should result in [[9,1],[9,1],[9,1],[8,2]]
        var sortedListOfArticles = Sort(listOfArticles);
        expect(sortedListOfArticles.length).toBe(4);
        expect(sortedListOfArticles[0]).toEqual([9,1]);
        expect(sortedListOfArticles[1]).toEqual([9,1]);
        expect(sortedListOfArticles[2]).toEqual([9,1]);
        expect(sortedListOfArticles[3]).toEqual([8,2]);
    });

    it("return error when format invalid", function () {
        var listOfArticles = "7356HDUZ";
        // should throw an exception
        var anonym = function() {
            return Sort(listOfArticles);
        };
        expect(anonym).toThrow(new Error('Invalid Format'));
    });
});

describe("StringToDisplay functionality", function () {
    it("transform to string the list of boxes", function () {
        // should become 91/82/81/73/73/64/6/55
        var boxedArticles = [[9,1],[8,2],[8,1],[7,3],[7,3],[6,4],[6],[5,5]];
        var stringToDisplay = GetStringToDisplay(boxedArticles);
        expect(stringToDisplay).toBe('91/82/81/73/73/64/6/55');
    });
});