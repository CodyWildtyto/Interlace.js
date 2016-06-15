# Interlace.js
The pure JavaScript plugin. Executing stunt-man and preview when image file is been loading likes interlaced images.


## Usage

Include **interlace.css** file.

```
<link rel="stylesheet" href="interlace.css">
```

Or minify file with **interlace.min.css**.

```
<link rel="stylesheet" href="interlace.min.css">
```

Include **interlace.js** file. All static interlace-elements will be executed When Interlace plugin is loaded.

```
<script src="interlace.js"></script>
```

Or minify file with **interlace.min.js**.

```
<script src="interlace.min.js"></script>
```

There has two ways to execute Interlace.

### Create an Interlace-element

Just use ```Interlace.new``` method with some parameters. And return a HTMLElement.

```
var iImg = Interlace.new({
	interlaceSrc: "picture_a.jpg",
	interlaceLow: "picture_a.low.jpg"
});
```

Append this HTMLElement to anywhere.

```
document.body.appendChild(iImg);
```

### Launch Interlace-elements with HTML attributes

Set HTML attributes.

```
<div data-interlace-src="picture_b.jpg"
	 data-interlace-low="picture_b.low.jpg">
</div>
```

Or JavaScript.

```
var iElmt = document.createElement("div");
iElmt.dataset.interlaceSrc = "picture_b.jpg";
iElmt.dataset.interlaceLow = "picture_b.low.jpg";
document.body.appendChild(iElmt);
```

Executing all uninitialized Interlace-elements.

```
Interlace.scan();
```

## Methods


###Interlace.new###

Created an Interlace-element with parameters.

```
_element = Interlace.new( _paramObject )
```
_parameter: **\_paramObject:Object** (parameters with [Options](#options) section) / return: **\_element:HTMLElement**_


###Interlace.scan###
Launched all uninitialized Interlace-elements on document.

```
Interlace.scan()
```

## Values
###Interlace.list###

An array of initial Interlace-elements.

```
_ary = Interlace.list
```
_return: **\_ary:Array** (include HTMLElements)_ 


## Options

###interlaceSrc###
 
Original image file path.

_type: **String** / attribute-name: **data-interlace-src**_ / **required**

###interlaceLow###

Low-quality image file path.

_type: **String** / attribute-name: **data-interlace-low**_

###interlaceTip###

Toggle visibility of loading icon.

_type: **Boolean** / attribute-name: **data-interlace-tip**_ / default: **false**

###interlaceTitle###

Set title attribute to Interlace-element.

_type: **String** / attribute-name: **data-interlace-title**_

###interlaceAlt###

Set ALT attribute to Interlace-element.

_type: **String** / attribute-name: **data-interlace-alt**_

## Examples

* <a href="http://wildtyto.github.io/Interlace.js/examples/basic.html" target="_blank">Basic</a>
* <a href="http://wildtyto.github.io/Interlace.js/examples/optional.html" target="_blank">Optional</a>

## Todo

* Color preview
* Multiple preview

## License
Released under the <a href="http://www.opensource.org/licenses/MIT">MIT license</a>.