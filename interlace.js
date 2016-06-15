/*
 * Interlace.js
 * https://github.com/Wildtyto/Interlace.js
 *
 * Copyright (c) 2016 Wildtyto
 * Licensed under the MIT licenses.
 */
 
(function (Interlace) {

    "use strict";

    (function () {

        Interlace = window.Interlace = Interlace || _defineInterlaceClass();
        Interlace.scan();

    }());

    function _defineInterlaceClass() {

        var ClassInterlace = {};
        ClassInterlace.list = [];
        ClassInterlace.scan = _scanUnInterlaceElements;
        ClassInterlace.new = _addInterlaceElement;
        return ClassInterlace;

    }

    function _scanUnInterlaceElements() {

        _setInterlacesEvent();

    }

    function _addInterlaceElement(_datum) {

        return _getNewInterlaceElementByDatum(_datum);

    }

    function _setInterlacesEvent() {

        var _elementAry = document.querySelectorAll("[data-interlace-src]");
        var _countOfElement = _elementAry.length;
        var _numOfElement = 0;
        while ( _countOfElement-_numOfElement ) _updateInterlaceElement(_elementAry[_numOfElement++]);

    }

    function _getNewInterlaceElementByDatum(_datum) {

        var _element = document.createElement("div");
        if ( _datum.interlaceSrc ) _element.dataset.interlaceSrc = _datum.interlaceSrc;
        if ( _datum.interlaceTitle ) _element.dataset.interlaceTitle = _datum.interlaceTitle;
        if ( _datum.interlaceAlt ) _element.dataset.interlaceAlt = _datum.interlaceAlt;
        if ( _datum.interlaceLow ) _element.dataset.interlaceLow = _datum.interlaceLow;
        if ( _datum.interlaceTip === true ) _element.dataset.interlaceTip = "";
        _updateInterlaceElement(_element);
        return _element;

    }

    function _updateInterlaceElement(_element) {

        var _highQualityImage = document.createElement("img");
        _setLowQualityImage(_element, _highQualityImage);
        _setHighQualitySrcImage(_element, _highQualityImage);
        _setElementAttribute(_element);
        Interlace.list.unshift(_element);

    }

    function _setLowQualityImage(_element, _highQualityImage) {

        var _lowQualityImage = document.createElement("img");
        var _datumOfLow = _element.dataset.interlaceLow;
        var _datumOfSrc = _element.dataset.interlaceSrc;
        _element.appendChild(_lowQualityImage);
        if ( !_datumOfLow ) _onLowImageFinish();
        else {
            _lowQualityImage.addEventListener("load", _onLowImageLoaded, false);
            _lowQualityImage.src = _datumOfLow;
        } 

        function _onLowImageLoaded() {
            _lowQualityImage.removeEventListener("load", _onLowImageLoaded);
            _onLowImageFinish();
        }

        function _onLowImageFinish() {
            _highQualityImage.src = _datumOfSrc;
        }

    }

    function _setHighQualitySrcImage(_element, _highQualityImage) {

        var _datumOfTitle = _element.dataset.interlaceTitle;
        var _datumOfAlt = _element.dataset.interlaceAlt;
        _highQualityImage.addEventListener("load", _onSrcImageLoaded, false);
        _element.appendChild(_highQualityImage);
        if ( _datumOfTitle ) _highQualityImage.title = _datumOfTitle;
        if ( _datumOfAlt ) _highQualityImage.alt = _datumOfAlt;

        function _onSrcImageLoaded() {
            _highQualityImage.removeEventListener("load", _onSrcImageLoaded);
            _element.dataset.interlace = "loaded";
        }

    }

    function _setElementAttribute(_element) {

        var _interlaceTip = _element.dataset.interlaceTip;
        var _datasetName;
        for ( _datasetName in _element.dataset) {
            if ( _datasetName.indexOf("interlace") !== 0 ) continue;
            delete _element.dataset[_datasetName];
        }
        _element.dataset.interlace = ( _interlaceTip === "" ) ? "loading" : "" ;

    }

}(window.Interlace));