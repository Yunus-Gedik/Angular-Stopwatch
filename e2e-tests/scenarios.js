"use strict";

describe("Stopwatch e2e tests", function () {
  describe("Check elements", function () {
    beforeEach(function () {
      browser.get("index.html");
    });

    it("should have a title", function () {
      expect(browser.getTitle()).toEqual("Stopwatch");
    });
      
    it("should render stopwatch", function () {
      const stopwatch = by.css(".stopwatch");
      expect(stopwatch).toBeTruthy();
    });
      
    it("should set buttons' names correctly", function () {
      const resetText = element(by.css(".resetButton")).getText();
      const toggleText = element(by.css(".toggleButton")).getText();
      expect(resetText).toEqual("Reset");
      expect(toggleText).toEqual("Start");
    });
  });
    
  describe("Check Stopwatch functionality", function () {
    beforeEach(function () {
      browser.get("index.html");
    });
      
    it("should start stopwatch", () => {
        const startBtn = element(by.css("[ng-click*=toggle]"));
        const timeText = element(by.css(".ng-binding"));

      startBtn.click();
      browser.sleep(1000);

      expect(timeText.getText()).toEqual("00:00:01");
    });

    it("should change text of toggle button of stopwatch", () => {
        const startBtn = element(by.css("[ng-click*=toggle]"));
        const timeText = element(by.css(".ng-binding"));

        startBtn.click();

        const toggleText = element(by.css(".toggleButton")).getText();

        expect(toggleText).toEqual("Stop");
    });

  });
    
});
